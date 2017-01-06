import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import CoreLayout from '../globals/CoreLayout'
import Bills from './Bills'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={CoreLayout}>
        {/* <Route path='/bills' component={Bills} /> */}
        {Bills()}
      </Route>
    </Router>
  )
}

export default Routes
