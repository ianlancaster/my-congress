// import React from 'react'
// import { Router, Route, hashHistory } from 'react-router'
//
// import CoreLayout from '../globals/CoreLayout'
// import Bills from './Bills'
//
// const Routes = (props) => {
//   return (
//     <Router {...props} history={hashHistory}>
//       <Route path='/' component={CoreLayout}>
//         {Bills()}
//       </Route>
//     </Router>
//   )
// }
//
// export default Routes

import Iphone from 'globals/Iphone'

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: Iphone,
    indexRoute: { onEnter: (nextState, replace) => replace('/bills') },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./Bills').default(store)
        ])
      })
    }
  }

  return routes
}

export default createRoutes
