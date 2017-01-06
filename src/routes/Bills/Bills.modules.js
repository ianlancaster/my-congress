// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

export const showBills = () => ({
  type: 'SHOW_BILLS'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  SHOW_BILLS: (state, action) => {
    console.log('ping')
    return {
      ...state,
      billNames: state.billNames.push('Look a bill name!')
    }
  }
}

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = { billNames: [] }

export default function billsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
