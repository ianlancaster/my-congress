import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Bills from './Bills.component.js'
import CoreLayout from '../../globals/CoreLayout'

const Routes = () => {
  return (
    <Route path='/bills' component={Bills}>
      <Route path='/bills/hello' component={CoreLayout} />
    </Route>
  )
}

export default Routes
