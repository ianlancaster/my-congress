/* eslint-disable */

// // // ------------------------------------
// // // SHORTCUT
// // // ------------------------------------
'nerpReduxModules'

// // // ------------------------------------
// // // OUTPUT
// // // ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

export const thunkExample = () => {
  return (dispatch) => {
    dispatch(requestThunk())
    return fetch('https://pre.domain.ext/endpoint')
      .then(data => data.json())
      .then(json => dispatch(recieveThunk(json)))
      .catch(err => dispatch(recieveErr(err)))
  }
}

const requestThunk = () => ({
  type: 'REQUEST_THUNK'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  REQUEST_THUNK: (state) => ({
    ...state,
    fetching: true
  })
}

const recieveThunk = (json) => ({
  type: 'RECIEVE_THUNK',
  payload: json
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  RECIEVE_THUNK: (state, action) => ({
    ...state,
    existingStateArr: state.existingStateArr.push(action.payload),
    newStateProp: action.payload.newStateProp,
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

export const exampleAction = () => ({
  type: 'EXAMPLE_ACTION'
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  EXAMPLE_ACTION: (state, action) => ({
    ...state,
    toggleState: !toggleState
  })
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState = { fetching: false }

export default function exampleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// // // ------------------------------------
// // // INPUT
// // // ------------------------------------
'tabstop engineered snippet goes here'

// // // ------------------------------------
// // // GENERATED
// // // ------------------------------------
'oneline generated snippet goes here'
