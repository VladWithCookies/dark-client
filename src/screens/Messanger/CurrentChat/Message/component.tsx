import React from 'react'
import clsx from 'clsx'
import { Card, Elevation } from "@blueprintjs/core"

interface IProps {
  text: string
  isCurrentUserMessage: boolean
}

const Message: React.FC<IProps> = ({ text, isCurrentUserMessage }) => (
  <div
    className={clsx('message__container', {
      'message__container--right-aligned': isCurrentUserMessage
    })}
  >
    <img
      alt='avatar'
      src='https://picsum.photos/200/400'
      className={clsx('contact__image contact__image--small', {
        'contact__image--right-aligned': isCurrentUserMessage
      })}
    />
    <Card
      elevation={Elevation.ONE}
      className={clsx('message__content', {
        'message__content--primary': isCurrentUserMessage
      })}
    >
      {text}
    </Card>
  </div>
)

export default Message
