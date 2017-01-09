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
    const { billNames } = this.props
    return (
      <div>
        <section id='bills-list'>
          {billNames && (billNames.map((billName, i) => <Bill key={i} billName={billName} />))}
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
