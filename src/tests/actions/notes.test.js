import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startNewNote } from '../../actions/notes'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
  auth: {
    uid: 'TESTING'
  }
})

describe('notes actions test', () => {
  test('should create a new note "startNewNote"', async () => {
    await store.dispatch(startNewNote())
  })
})
