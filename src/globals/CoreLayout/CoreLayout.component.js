import React, { Component } from 'react'

class CoreLayout extends Component {
  render () {
    return (
      <div>
        <h2>CoreLayout World!</h2>
        {this.props.children}
      </div>
    )
  }
}

module.exports = CoreLayout
