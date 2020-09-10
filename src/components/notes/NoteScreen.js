import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const NoteScreen = props => {
  const { active: note } = useSelector(state => state.notes)
  const [formValues, handleInputChange, reset] = useForm(note)

  const { body, title } = formValues

  const activeId = useRef(note.id)

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
  }, [note, reset])

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
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="image"
            />
          </div>
        )}
      </div>
    </div>
  )
}

NoteScreen.propTypes = {}

export default NoteScreen
