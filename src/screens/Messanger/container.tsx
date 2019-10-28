import { connect } from 'react-redux'

import { IRootState } from '../../concepts/rootReducer'
import CurrentChat from './component'

const mapStateToProps = (state: IRootState) => ({
  currentChat: state.chat.chats[0] // TEMP
})

export default connect(mapStateToProps)(CurrentChat)
