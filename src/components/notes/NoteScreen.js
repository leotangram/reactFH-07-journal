import React from 'react'
import PropTypes from 'prop-types'
import NotesAppBar from './NotesAppBar'

const NoteScreen = props => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        />

        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  )
}

NoteScreen.propTypes = {}

export default NoteScreen
