import React, { Component, PropTypes } from 'react'
import classes from './Bills.styles.scss'
import Bill from 'globals/Bill'

class Bills extends Component {
  constructor () {
    super()
    this.state = {}
  }
  componentWillMount () {
    const { fetchBills } = this.props
    fetchBills()
  }
  render () {
    const { bills } = this.props
    return (
      <div>
        <section id='bills-list'>
          {bills && (bills.map((bill, i) => <Bill key={i} billName={bill.official_title} />))}
        </section>
      </div>
    )
  }
}

Bills.propTypes = {
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.arrayOf(PropTypes.object)
}

module.exports = Bills
