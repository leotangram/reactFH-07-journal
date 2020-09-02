import React from 'react'
import PropTypes from 'prop-types'

const NothingSelected = props => {
  return (
    <div className="nothing__main-content">
      <p>
        Select something <br /> or create an entry
      </p>
      <i className="far fa-star fa-4x mt-5" />
    </div>
  )
}

NothingSelected.propTypes = {}

export default NothingSelected
