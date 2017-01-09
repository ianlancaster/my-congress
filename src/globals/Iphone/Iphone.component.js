import React, { Component, PropTypes } from 'react'
import classes from './Iphone.styles.scss'
import iphoneImage from './assets/iphone6.png'
import CoreLayout from 'globals/CoreLayout'

const Iphone = ({ children }) => {
  return (
    <div style={{ background: `url(${iphoneImage}) no-repeat` }} className={classes.iphone}>
      <div className={classes.outlet}>
        <CoreLayout>
          {children}
        </CoreLayout>
      </div>
    </div>
  )
}

Iphone.propTypes = {
  children: PropTypes.node
}

module.exports = Iphone
