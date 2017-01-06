import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Hello from '../globals/Hello'
import Bills from './Bills'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Hello}>
        {/* <Route path='/bills' component={Bills} /> */}
        {Bills()}
      </Route>
    </Router>
  )
}

export default Routes
