import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import { asChatName } from '../../../utils/formatters'
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
      {chats.map((chat: IChat) => (
        <Contact
          id={chat.id}
          key={chat.id}
          name={asChatName(chat, { id: '1', email: 'email', firstName: 'Vlad', lastName: 'V' })} // FIXME
          onClick={() => console.log('stub')}
        />
      ))}
    </div>
  </ActionCableConsumer>
)

export default Chats
