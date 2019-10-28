import React from 'react'
import Textarea from 'react-textarea-autosize'
import { ActionCableConsumer } from 'react-actioncable-provider'

import { IMessage } from '../../../concepts/chat/types'
import Message from './Message'

interface IProps {
  newMessage: string
  messages: IMessage[]
  onReceiveMessage: Function
  onSubmit(e: React.KeyboardEvent): void
  onFocus(e: React.FocusEvent<HTMLTextAreaElement>): void
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
}

const CurrentChat = React.forwardRef<any, any>(({
  onFocus,
  messages,
  onSubmit,
  onChange,
  newMessage,
  onReceiveMessage,
}, ref: any) => (
  <ActionCableConsumer
    channel={{ channel: 'MessagesChannel', chat: 17 }}
    onReceived={onReceiveMessage}
  >
    <div className='chat__container'>
      <div className='chat__messages'>
        {messages.map((message: IMessage) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
      <div className='chat__textarea'>
        <Textarea
          autoFocus
          onFocus={onFocus}
          value={newMessage}
          onChange={onChange}
          onKeyDown={onSubmit}
          placeholder='Write message...'
          />
      </div>
      <div ref={ref} />
    </div>
  </ActionCableConsumer>
))

export default CurrentChat;
