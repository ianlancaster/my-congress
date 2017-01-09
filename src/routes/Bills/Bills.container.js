import { connect } from 'react-redux'
import { showBills, fetchBills } from './Bills.modules'
import Bills from './Bills.component'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    bills: state.bills.bills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
