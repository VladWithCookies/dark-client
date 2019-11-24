import React from 'react'
import { connect } from 'react-redux'

import { IChat } from '../../../concepts/chat/types'
import { IUser } from '../../../concepts/user/types'
import { getChats, receiveChat, selectChat } from '../../../concepts/chat/actions'
import { currentChatSelector } from '../../../concepts/chat/selectors'
import { IRootState } from '../../../concepts/rootReducer'
import ChatsComponent from './component'

interface IProps {
  chats: IChat[]
  currentChat: IChat
  currentUser?: IUser
  getChats: VoidFunction
  selectChat(id: string): void
  receiveChat(chat: unknown): void
}

class Chats extends React.Component<IProps> {
  componentDidMount() {
    this.props.getChats()
  }

  render() {
    const { chats, receiveChat, currentUser, selectChat, currentChat } = this.props

    return (
      <ChatsComponent
        chats={chats}
        onSelect={selectChat}
        onReceived={receiveChat}
        currentUser={currentUser}
        selectedChatId={currentChat && currentChat.id}
      />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  chats: state.chat.chats,
  currentUser: state.user.currentUser,
  currentChat: currentChatSelector(state),
})

const mapDispatchToProps = ({
  getChats,
  selectChat,
  receiveChat,
})

export default connect(mapStateToProps, mapDispatchToProps)(Chats)
