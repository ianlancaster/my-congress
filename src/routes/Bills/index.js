import React from 'react'
import { Route } from 'react-router'
import Bills from './Bills.component.js'

const Routes = () => {
  return (
    <Route path='/bills' component={Bills} />
  )
}

export default Routes
