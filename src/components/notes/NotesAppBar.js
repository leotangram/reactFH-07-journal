import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes } from '../../actions/notes'

const NotesAppBar = props => {
  const dispatch = useDispatch()
  const { active: note } = useSelector(state => state.notes)

  const handleSave = () => {
    dispatch(startSaveNotes(note))
  }

  return (
    <div className="notes__appbar">
      <span>28 de Agosto 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

NotesAppBar.propTypes = {}

export default NotesAppBar
