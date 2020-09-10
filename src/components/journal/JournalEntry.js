import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date)
  console.log(noteDate)

  return (
    <div className="journal__entry pointer">
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundImage: `url(${url})`
          }}
        />
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  )
}

JournalEntry.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  url: PropTypes.string
}

export default JournalEntry
