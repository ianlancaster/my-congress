import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import createFakeStore from 'utilities/createFakeStore'

import BillsContainer from './Bills.container'
import BillsComponent from './Bills.component'
import billsData from './Bills.data'

describe('BILLS TESTS', () => {
  const setup = () => {
    const props = {
      fetchBills: sinon.spy()
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
})
