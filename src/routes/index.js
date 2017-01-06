import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Hello from '../globals/Hello'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Hello} />
    </Router>
  )
}

export default Routes
