import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes, startUploading } from '../../actions/notes'

const NotesAppBar = props => {
  const dispatch = useDispatch()
  const { active: note } = useSelector(state => state.notes)

  const handleSave = () => {
    dispatch(startSaveNotes(note))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      dispatch(startUploading(file))
    }
  }

  return (
    <div className="notes__appbar">
      <span>28 de Agosto 2020</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

NotesAppBar.propTypes = {}

export default NotesAppBar
