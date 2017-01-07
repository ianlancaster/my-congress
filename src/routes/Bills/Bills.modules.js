import fetch from 'isomorphic-fetch'

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

export const fetchBills = () => {
  return (dispatch) => {
    dispatch(requestBills())
    return fetch('http://localhost:3001/api/bills')
      .then(data => data.json())
      .then(json => dispatch(recieveBills(json)))
      .catch(err => dispatch(recieveErr(err)))
  }
}

const requestBills = () => ({
  type: 'REQUEST_BILLS'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  REQUEST_BILLS: (state) => ({
    ...state,
    fetching: true
  })
}

const recieveBills = (json) => {
  console.log(json)
  return {
    type: 'RECIEVE_BILLS',
    payload: json.billNames
  }
}
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECIEVE_BILLS: (state, action) => ({
    ...state,
    billNames: action.payload,
    fetching: false
  })
}

const recieveErr = (err) => ({
  type: 'RECIEVE_ERR',
  payload: err
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECIEVE_ERR: (state, action) => ({
    ...state,
    err: action.payload,
    fetching: false
  })
}

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = { billNames: ['HEEEeeeeLLLlllloooOOOooo'] }

export default function billsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
