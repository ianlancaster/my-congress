import React, { Component, PropTypes } from 'react'
import Header from 'globals/Header'
import classes from './CoreLayout.styles.scss'

class CoreLayout extends Component {
  constructor () {
    super()
    this.state = {
      mainHeight: 400,
      scrollTop: 0,
      showNav: true
    }
  }
  componentDidMount () {
    this.setContentViewportHeight()
    this.watchScrollActivity()
  }
  setContentViewportHeight () {
    const header = document.getElementById('header')
    const coreLayoutHeight = document.getElementById('coreLayout').offsetHeight
    const headerHeight = header ? header.offsetHeight : 0
    this.setState({ mainHeight: coreLayoutHeight - headerHeight })

    window.onresize = () => {
      this.setState({ mainHeight: coreLayoutHeight - headerHeight })
    }
  }
  watchScrollActivity () {
    const main = document.getElementById('main')
    main.onscroll = (e) => {
      if (this.state.scrollTop < e.srcElement.scrollTop) {
        this.setState({ showNav: false })
      } else {
        this.setState({ showNav: true })
      }
      this.setContentViewportHeight()
      this.setState({ scrollTop: e.srcElement.scrollTop })
    }
  }
  render () {
    const { children } = this.props
    const { showNav, mainHeight } = this.state
    return (
      <div id={'coreLayout'} className={classes.coreLayout}>
        {showNav && (<Header />)}
        <main id={'main'} style={{ height: `${mainHeight}px` }}>
          {children}
        </main>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
}

module.exports = CoreLayout
