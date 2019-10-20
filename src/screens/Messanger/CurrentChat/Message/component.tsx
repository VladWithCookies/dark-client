import React from 'react'
import { Card, Elevation } from "@blueprintjs/core"

const Message = () => (
  <div className='message__container message__container--right-aligned'>
    <img
      alt='avatar'
      src='https://picsum.photos/200/400'
      className='contact__image contact__image--right-aligned'
    />
    <Card
      elevation={Elevation.ONE}
      className='message__content message__content--primary'
    >
      We build products that make people better at their most important work.
    </Card>
  </div>
)

export default Message
