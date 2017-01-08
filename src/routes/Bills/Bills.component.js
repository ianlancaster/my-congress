import React, { Component, PropTypes } from 'react'
import classes from './Bills.styles.scss'

class Bills extends Component {
  render () {
    const { showBills, billNames, fetchBills } = this.props
    return (
      <div>
        <h1 className={classes.bill}>Bills</h1>
        <button onClick={showBills}>Show Bills</button>
        <button onClick={fetchBills}>Fetch Actual Bills</button>
        <section id='bills-list'>
          {billNames && (billNames.map((billName, i) => <h3 key={i}>{billName}</h3>))}
        </section>
      </div>
    )
  }
}

Bills.propTypes = {
  showBills: PropTypes.func.isRequired,
  fetchBills: PropTypes.func.isRequired,
  billNames: PropTypes.arrayOf(PropTypes.string)
}

module.exports = Bills
