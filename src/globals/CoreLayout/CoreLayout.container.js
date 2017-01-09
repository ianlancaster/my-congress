import { connect } from 'react-redux'
import { fetchAdditionalContent } from './CoreLayout.modules.js'
import CoreLayout from './CoreLayout.component.js'

const mapDispatchToProps = {
  fetchAdditionalContent
}

export default connect(null, mapDispatchToProps)(CoreLayout)
