import React, { PropTypes } from 'react'
import classes from './Header.styles.scss'

const Header = () => {
  return (
    <nav id={'header'} className={classes.header}>
      <p>Hello World</p>
    </nav>
  )
}

module.exports = Header
