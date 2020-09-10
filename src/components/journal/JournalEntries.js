import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import JournalEntry from './JournalEntry'

const JournalEntries = props => {
  const { notes } = useSelector(state => state.notes)
  console.log('notes', notes)

  return (
    <div className="journal__entries">
      {notes.map(note => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </div>
  )
}

JournalEntries.propTypes = {}

export default JournalEntries
