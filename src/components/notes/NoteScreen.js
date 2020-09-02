import React from 'react'
import PropTypes from 'prop-types'
import NotesAppBar from './NotesAppBar'

const NoteScreen = props => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
    </div>
  )
}

NoteScreen.propTypes = {}

export default NoteScreen
