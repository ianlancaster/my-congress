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
