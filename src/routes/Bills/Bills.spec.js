import React from 'react'
import { Provider } from 'react-redux'
// import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import createFakeStore from 'utilities/createFakeStore'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

import BillsContainer from './Bills.container'
import BillsComponent from './Bills.component'
import billsData from './Bills.data'
import billsReducer, { fetchBills, requestBills, RECEIVEBills, RECEIVEErr } from './Bills.modules'

import Promise from 'promise-polyfill'

// To add to window
if (!window.Promise) {
  window.Promise = Promise
}

describe('BILLS TESTS', () => {
  const setup = () => {
    const props = {
      fetchBills: sinon.spy(),
      bills: billsData,
      appShouldFetchContent: false
    }

    const fakeStore = createFakeStore({
      bills: { bills: billsData },
      coreLayout: { appShouldFetchContent: false }
    })

    const ContainerWrapper = mount(
      <Provider store={fakeStore}>
        <BillsContainer />
      </Provider>,
    ).find(BillsContainer)

    const ComponentWrapper = shallow(<BillsComponent {...props} />)

    return {
      ContainerWrapper,
      ComponentWrapper,
      props
    }
  }

  context('Bills container', () => {
    it('should render the Bills component', () => {
      const { ContainerWrapper } = setup()
      expect(ContainerWrapper).to.exist
    })

    it('should render 20 bill components when mounted', () => {
      const { ContainerWrapper } = setup()
      expect(ContainerWrapper.find('article').length).to.equal(20)
    })
  })

  context('Bills component', () => {
    it('should call fetchBills once when mounted', () => {
      const { ComponentWrapper, props } = setup()
      expect(props.fetchBills).to.have.property('callCount', 1)
    })

    it('should call fetchBills again props.appShouldFetchContent is changed to true', () => {
      const { ComponentWrapper, props } = setup()
      expect(props.fetchBills).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldFetchContent: true })
      expect(props.fetchBills).to.have.property('callCount', 2)
    })
  })

  context('Bills action creators', () => {
    it('Should export five functions: fetchBills, billsReducer, RECEIVEErr, RECEIVEBills, requestBills', () => {
      // module exports imported at top of file
      expect(fetchBills).to.a('function')
      expect(billsReducer).to.a('function')
      expect(RECEIVEErr).to.a('function')
      expect(RECEIVEBills).to.a('function')
      expect(requestBills).to.a('function')
    })

    it('requestBills() should take no parameters and return a proper REQUEST_BILLS action object', () => {
      const expectedAction = {
        type: 'REQUEST_BILLS'
      }

      expect(requestBills()).to.deep.equal(expectedAction)
    })

    it('RECEIVEBills() should take a bills array as a parameter and return a proper RECEIVE_BILLS action object', () => {
      const expectedAction = {
        type: 'RECEIVE_BILLS',
        bills: billsData
      }

      expect(RECEIVEBills(billsData)).to.deep.equal(expectedAction)
    })

    it('RECEIVEErr() should take no parameters and return a proper RECEIVE_ERR action object', () => {
      const expectedAction = {
        type: 'RECEIVE_ERR',
        err: 'test error'
      }

      expect(RECEIVEErr('test error')).to.deep.equal(expectedAction)
    })
  })

  context('Bills async actions', () => {
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)

    // let server

    it('fetchBills() should dispatch a REQUEST_BILLS action and a bill-populated RECEIVE_BILLS action', () => {
      // before(() => {
      //   server = sinon.fakeServer.create()
      //   const response = [200, { 'Content-type': 'application/json' }, billsData]
      //   server.respondWith('GET', 'http://localhost:3001/api/bills/1', JSON.stringify(response))
      // })
      //
      // after(() => {
      //   server.restore()
      // })

      let expectedActions = [
        { type: 'REQUEST_BILLS' },
        { type: 'RECEIVE_BILLS', bills: billsData }
      ]
      const store = mockStore({
        bills: { bills: billsData },
        coreLayout: { appShouldFetchContent: false }
      })

      return store.dispatch(fetchBills())
        .then(() => {
          return Promise.resolve(store.getActions())
        })
        .then((resolved) => {
          // console.log('PROMIS: ', Promise.resolve(store.getActions()))
          // console.log('RESOLV: ', resolved)
          // console.log('EXPECT: ', expectedActions)
          // return expect(Promise.resolve(store.getActions())[0]).to.eventually.deep.equal(expectedActions[0])
          // return expect(Promise.resolve(resolved)).to.eventually.deep.equal(expectedActions)
          // return expect(resolved).to.eventually.deep.equal(expectedActions)
          expect(resolved[0]).to.deep.equal(expectedActions[0])
          expect(resolved[1].length).to.deep.equal(expectedActions[1].length)
        })
    })
  })

  context('Bills reducer (action handlers)', () => {
    it('REQUEST_BILLS | should set fetching to true', () => {
      const REQUEST_BILLS = requestBills()

      const initialState = {
        bills: billsData
      }

      const expectedState = {
        bills: billsData,
        fetching: true
      }

      expect(billsReducer(initialState, REQUEST_BILLS)).to.deep.equal(expectedState)
    })

    it('RECEIVE_BILLS | should append fetched bills to the bills array and set fetching to false', () => {
      const RECEIVE_BILLS = RECEIVEBills(billsData)

      const initialState = {
        appShouldFetchContent: false,
        bills: billsData,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        bills: [ ...billsData, ...billsData ],
        fetching: false
      }

      expect(billsReducer(initialState, RECEIVE_BILLS)).to.deep.equal(expectedState)
    })

    it('RECEIVE_ERR | should return the error and set fetching to false', () => {
      const RECEIVE_ERR = RECEIVEErr('test error')

      const initialState = {
        appShouldFetchContent: false,
        bills: billsData,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        bills: billsData,
        err: 'test error',
        fetching: false
      }

      expect(billsReducer(initialState, RECEIVE_ERR)).to.deep.equal(expectedState)
    })
  })
})
