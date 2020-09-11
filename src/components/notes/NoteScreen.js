import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const NoteScreen = props => {
  const { active: note } = useSelector(state => state.notes)
  const [formValues, handleInputChange, reset] = useForm(note)
  const dispatch = useDispatch()

  const { body, title } = formValues

  const activeId = useRef(note.id)

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
  }, [note, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }))
  }, [formValues, dispatch])

  const handleDelete = () => {
    dispatch(startDeleting(note.id))
  }

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          value={body}
          name="body"
          onChange={handleInputChange}
        />
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="image" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

NoteScreen.propTypes = {}

export default NoteScreen
