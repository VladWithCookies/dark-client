import { connect } from 'react-redux'

import { currentChatSelector } from '../../concepts/chat/selectors'
import { IRootState } from '../../concepts/rootReducer'
import CurrentChat from './component'

const mapStateToProps = (state: IRootState) => ({
  currentChat: currentChatSelector(state),
})

export default connect(mapStateToProps)(CurrentChat)
