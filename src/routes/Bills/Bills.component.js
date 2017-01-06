import React, { Component } from 'react'

class Bills extends Component {
  render () {
    return (
      <div>
        <h1>Bills</h1>
        { this.props.children }
      </div>
    )
  }
}

module.exports = Bills
