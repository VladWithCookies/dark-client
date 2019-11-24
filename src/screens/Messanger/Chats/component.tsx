import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import { IUser } from '../../../concepts/user/types'
import { asChatName } from '../../../utils/formatters'
import { IChat } from '../../../concepts/chat/types'
import Contact from '../../../components/Contact'

interface IProps {
  chats: IChat[]
  currentUser?: IUser
  selectedChatId?: string
  onSelect(id: string): void
  onReceived(chat: unknown): void
}

const Chats: React.FC<IProps> = ({
  chats,
  onSelect,
  onReceived,
  currentUser,
  selectedChatId,
}) => (
  <ActionCableConsumer
    channel='ChatsChannel'
    onReceived={onReceived}
  >
    <div className='contacts'>
      {chats.map((chat: IChat) => (
        <Contact
          id={chat.id}
          key={chat.id}
          onClick={onSelect}
          selectedId={selectedChatId}
          name={asChatName(chat, currentUser)}
        />
      ))}
    </div>
  </ActionCableConsumer>
)

export default Chats
