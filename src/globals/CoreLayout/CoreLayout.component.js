import React, { Component, PropTypes } from 'react'
import Iphone from 'globals/Iphone'

class CoreLayout extends Component {
  render () {
    return (
      <div className={'CoreLayout'}>
        <h2>CoreLayout World!</h2>
        {this.props.children}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
}

module.exports = CoreLayout
