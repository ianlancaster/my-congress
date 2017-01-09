import React, { PropTypes } from 'react'
import classes from './Bill.styles.scss'

const Bill = ({ billName }) => {
  return (
    <div>
      <h2>{billName}</h2>
    </div>
  )
}

Bill.propTypes = {
  billName: PropTypes.string.isRequired
}

module.exports = Bill
