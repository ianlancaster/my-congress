import React, { PropTypes } from 'react'
import classes from './Bill.styles.scss'

const Bill = ({ billName }) => {
  return (
    <article className={classes.billCard}>
      <h2>{billName}</h2>
    </article>
  )
}

Bill.propTypes = {
  billName: PropTypes.string.isRequired
}

module.exports = Bill
