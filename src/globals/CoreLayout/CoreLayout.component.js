import React, { Component, PropTypes } from 'react'
import Header from 'globals/Header'
import classes from './CoreLayout.styles.scss'

class CoreLayout extends Component {
  constructor () {
    super()
    this.state = {}
  }
  componentDidMount () {
    this.setContentViewportHeight()
  }
  setContentViewportHeight () {
    const coreLayoutHeight = document.getElementById('coreLayout').offsetHeight
    const headerHeight = document.getElementById('header').offsetHeight
    this.setState({ mainHeight: coreLayoutHeight - headerHeight })

    window.onresize = () => {
      this.setState({ mainHeight: coreLayoutHeight - headerHeight })
    }
  }
  render () {
    return (
      <div id={'coreLayout'} className={classes.coreLayout}>
        <Header />
        <main style={{ height: `${this.state.mainHeight}px` }}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
}

module.exports = CoreLayout
