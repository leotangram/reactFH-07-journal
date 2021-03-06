import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  startLoadingNotes,
  startNewNote,
  startSaveNotes,
  startUploading
} from '../../actions/notes'
import { db } from '../../firebase/firebaseConfig'
import { fileUpload } from '../../helpers/fileUpload'
import { types } from '../../types/types'

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    // return 'https://hola.com/thing.jpg'
    return Promise.resolve('https://hola.com/thing.jpg')
  })
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  auth: {
    uid: 'TESTING'
  },
  notes: {
    active: {
      id: 'Xf6IRMdTScTyMDgcyHbO',
      title: 'Hola',
      body: 'mundo'
    }
  }
}

let store = mockStore(initState)

describe('notes actions test', () => {
  beforeEach(() => {
    store = mockStore(initState)
  })

  test('should create a new note "startNewNote"', async () => {
    await store.dispatch(startNewNote())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    })

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    })

    const docId = actions[0].payload.id
    await db.doc(`/TESTING/journal/notes/${docId}`).delete()
  })

  test('should load notes', async () => {
    await store.dispatch(startLoadingNotes('TESTING'))
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    })

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    }

    expect(actions[0].payload[0]).toMatchObject(expected)
  })

  test('should startSaveNote update note', async () => {
    const note = {
      id: 'Xf6IRMdTScTyMDgcyHbO',
      title: 'titulo',
      body: 'body'
    }

    await store.dispatch(startSaveNotes(note))

    const actions = store.getActions()
    expect(actions[0].type).toBe(types.notesUpdated)

    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get()
    expect(docRef.data().title).toBe(note.title)
  })

  test('should startUploading update entry url', async () => {
    const file = new File([], 'foto.jpg')
    await store.dispatch(startUploading(file))

    const docRef = await db
      .doc(`/TESTING/journal/notes/Xf6IRMdTScTyMDgcyHbO`)
      .get()
    expect(docRef.data().url).toBe('https://hola.com/thing.jpg')
  })
})
