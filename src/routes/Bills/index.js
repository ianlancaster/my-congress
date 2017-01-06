// import React from 'react'
// import { Route } from 'react-router'
// import Bills from './Bills.component'
// import BillsContainer from './Bills.container'
//
// const Routes = () => {
//   return (
//     <Route path='/bills' component={BillsContainer} />
//   )
// }
//
// export default Routes

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'bills',
  getComponent (nextState, next) {
    require.ensure([
      './Bills.container',
      './Bills.modules'
    ], (require) => {
      const Bills = require('./Bills.container').default
      const billsReducer = require('./Bills.modules').default

      injectReducer(store, {
        key: 'bills',
        reducer: billsReducer
      })

      next(null, Bills)
    })
  }
})
