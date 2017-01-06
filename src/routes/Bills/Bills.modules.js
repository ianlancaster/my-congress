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
    console.log('state: ', state)
    return {
      ...state,
      billNames: [...state.billNames, 'ummm... hello?']
    }
  }
}

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = { billNames: ['HEEEeeeeLLLlllloooOOOooo'] }

export default function billsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
