import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'

const JournalScreen = props => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <h1>Main content</h1>
      </main>
    </div>
  )
}

JournalScreen.propTypes = {}

export default JournalScreen
