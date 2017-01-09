import fetch from 'isomorphic-fetch'

// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

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
    payload: json
  }
}
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECIEVE_BILLS: (state, action) => ({
    ...state,
    bills: action.payload,
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
const initialState = { bills: [] }

export default function billsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
