import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import createFakeStore from 'utilities/createFakeStore'

import BillsContainer from './Bills.container'
import BillsComponent from './Bills.component'
import billsData from './Bills.data'
import billsReducer, { fetchBills, requestBills, recieveBills, recieveErr } from './Bills.modules'

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
    it('Should export five functions: fetchBills, billsReducer, recieveErr, recieveBills, requestBills', () => {
      // module exports imported at top of file
      expect(fetchBills).to.a('function')
      expect(billsReducer).to.a('function')
      expect(recieveErr).to.a('function')
      expect(recieveBills).to.a('function')
      expect(requestBills).to.a('function')
    })

    it('requestBills() should take no parameters and return a proper REQUEST_BILLS action object', () => {
      const expectedAction = {
        type: 'REQUEST_BILLS'
      }

      expect(requestBills()).to.deep.equal(expectedAction)
    })

    it('recieveBills() should take a bills array as a parameter and return a proper RECIEVE_BILLS action object', () => {
      const expectedAction = {
        type: 'RECIEVE_BILLS',
        bills: billsData
      }

      expect(recieveBills(billsData)).to.deep.equal(expectedAction)
    })

    it('recieveErr() should take no parameters and return a proper RECIEVE_ERR action object', () => {
      const expectedAction = {
        type: 'RECIEVE_ERR',
        err: 'test error'
      }

      expect(recieveErr('test error')).to.deep.equal(expectedAction)
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

    it('RECIEVE_BILLS | should append fetched bills to the bills array and set fetching to false', () => {
      const RECIEVE_BILLS = recieveBills(billsData)

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

      expect(billsReducer(initialState, RECIEVE_BILLS)).to.deep.equal(expectedState)
    })

    it('RECIEVE_ERR | should return the error and set fetching to false', () => {
      const RECIEVE_ERR = recieveErr('test error')

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

      expect(billsReducer(initialState, RECIEVE_ERR)).to.deep.equal(expectedState)
    })
  })
})
