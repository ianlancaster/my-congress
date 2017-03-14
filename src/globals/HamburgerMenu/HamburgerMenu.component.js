import React, { Component, PropTypes } from 'react'
import classes from './HamburgerMenu.styles.scss'

class HamburgerMenu extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { exampleProp1 } = this.props
    return (
      <div id='nav-icon2'>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  }
}

HamburgerMenu.propTypes = {
  exampleProp1: PropTypes.number
}

module.exports = HamburgerMenu
