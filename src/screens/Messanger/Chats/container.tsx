import React from 'react'
import { connect } from 'react-redux'

import { IChat } from '../../../concepts/chat/types'
import { getChats, receiveChat } from '../../../concepts/chat/actions'
import { IRootState } from '../../../concepts/rootReducer'
import ChatsComponent from './component'

interface IProps {
  chats: IChat[]
  getChats: VoidFunction
  receiveChat(chat: unknown): void
}

class Chats extends React.Component<IProps> {
  componentDidMount() {
    this.props.getChats();
  }

  render() {
    const { chats, receiveChat } = this.props

    return (
      <ChatsComponent
        chats={chats}
        onReceived={receiveChat}
      />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  chats: state.chat.chats
})

const mapDispatchToProps = ({
  getChats,
  receiveChat,
})

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
