import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Bills from './Bills.component.js'
import Hello from '../../globals/Hello'

const Routes = () => {
  return (
    <Route path='/bills' component={Bills}>
      <Route path='/bills/hello' component={Hello} />
    </Route>
  )
}

export default Routes
