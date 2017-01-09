import React, { PropTypes } from 'react'
import classes from './Bill.styles.scss'

const Bill = ({ official_title, bill_id, chamber, introduced_on, last_action_at, appId }) => {
  return (
    <article className={classes.billCard}>
      <h3>{appId}</h3>
      <h3>{bill_id}</h3>
      <h2>{`${official_title.slice(0, 70)}...`}</h2>
      <p>Introduced on: {introduced_on}</p>
      <p>Last action: {last_action_at}</p>
    </article>
  )
}

Bill.propTypes = {
  official_title: PropTypes.string.isRequired,
  bill_id: PropTypes.string.isRequired,
  chamber: PropTypes.string.isRequired,
  introduced_on: PropTypes.string.isRequired,
  last_action_at: PropTypes.string.isRequired
}

module.exports = Bill
