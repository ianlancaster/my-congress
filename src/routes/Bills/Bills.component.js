import React, { Component, PropTypes } from 'react'

class Bills extends Component {
  render () {
    const { showBills, billNames } = this.props
    return (
      <div>
        <h1>Bills</h1>
        <button onClick={showBills}>Show Bills</button>
        <section id='bills-list'>
          {billNames && (billNames.map(billName => <h3>{billName}</h3>))}
        </section>
      </div>
    )
  }
}

Bills.propTypes = {
  showBills: PropTypes.func.isRequired,
  billNames: PropTypes.arrayOf(PropTypes.string)
}

module.exports = Bills
