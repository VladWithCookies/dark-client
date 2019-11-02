import { connect } from 'react-redux'

import { IRootState } from '../../concepts/rootReducer'
import Modals from './component'

const mapStateToProps = (state: IRootState) => ({
  modals: state.modal.modals,
})

export default connect(mapStateToProps)(Modals)
