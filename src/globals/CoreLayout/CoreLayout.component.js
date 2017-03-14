import React, { Component, PropTypes } from 'react'
import Header from 'globals/Header'
import classes from './CoreLayout.styles.scss'
import MainNav from 'globals/MainNav'

class CoreLayout extends Component {
  render () {
    const { children } = this.props
    return (
      <div id='coreLayout' className={classes.coreLayout}>
        <Header />
        <main id='main'>
          {children}
        </main>
        <MainNav />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
}

module.exports = CoreLayout
