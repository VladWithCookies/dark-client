import React from 'react'

import { IUser } from '../../../../concepts/chat/types'
import MessageComponent from './component'

interface IProps {
  text: string
  user: IUser
}

class Message extends React.Component<IProps> {
  get isCurrentUserMessage(): boolean {
    return this.props.user.id === '1' // FIXME
  }

  render() {
    return (
      <MessageComponent
        text={this.props.text}
        isCurrentUserMessage={this.isCurrentUserMessage}
      />
    )
  }
}

export default Message
