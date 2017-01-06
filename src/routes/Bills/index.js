import React from 'react'
import { Route } from 'react-router'
import Bills from './Bills.component.js'
import BillsContainer from './Bills.container.js'

console.log(Bills)
console.log(BillsContainer)

const Routes = () => {
  return (
    <Route path='/bills' component={Bills} />
  )
}

export default Routes
