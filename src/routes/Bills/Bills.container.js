import { connect } from 'react-redux'
import { showBills } from './Bills.modules'
import Bills from './Bills.component'

const mapDispatchToProps = {
  showBills
}

const mapStateToProps = (state, ownProps) => ({
  billNames: state.Bills.billNames
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
