import fetch from 'isomorphic-fetch'

// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

export const fetchBills = (pageNumber = 1) => {
  return (dispatch) => {
    dispatch(requestBills())
    console.log(`http://localhost:3001/api/bills/${pageNumber}`)
    return fetch(`http://localhost:3001/api/bills/${pageNumber}`)
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

const recieveBills = (bills) => {
  return {
    type: 'RECIEVE_BILLS',
    bills
  }
}
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECIEVE_BILLS: (state, action) => {
    console.log('billstate', state)
    return {
      ...state,
      bills: [...state.bills, ...action.bills],
      fetching: false
    }
  }
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
