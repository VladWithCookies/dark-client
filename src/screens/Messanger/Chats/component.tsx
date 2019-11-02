import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import { IChat } from '../../../concepts/chat/types'
import Contact from '../../../components/Contact'

interface IProps {
  chats: IChat[]
  onReceived(chat: unknown): void
}

const Chats: React.FC<IProps> = ({ chats, onReceived }) => (
  <ActionCableConsumer
    channel='ChatsChannel'
    onReceived={onReceived}
  >
    <div className='contacts'>
      {chats.map((chat: IChat) => <Contact key={chat.id} {...chat} />)}
    </div>
  </ActionCableConsumer>
)

export default Chats
