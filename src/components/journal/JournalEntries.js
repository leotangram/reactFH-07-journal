import React from 'react'
import PropTypes from 'prop-types'
import JournalEntry from './JournalEntry'

const JournalEntries = props => {
  const entries = [1, 2, 3, 4, 5]

  return (
    <div className="journal__entries">
      {entries.map(entry => (
        <JournalEntry key={entry} />
      ))}
    </div>
  )
}

JournalEntries.propTypes = {}

export default JournalEntries
