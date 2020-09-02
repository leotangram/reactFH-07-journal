import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import NothingSelected from './NothingSelected'

const JournalScreen = props => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <NothingSelected />
      </main>
    </div>
  )
}

JournalScreen.propTypes = {}

export default JournalScreen
