import React from 'react'
import { Col, Row } from 'react-grid-system'

import { IChat } from '../../concepts/chat/types'
import Chats from './Chats'
import CurrentChat from './CurrentChat'

interface IProps {
  currentChat: IChat
}

const Messanger: React.FC<IProps> = ({ currentChat }) => (
  <div className='messanger__container'>
    <Row nogutter>
      <Col md={4}>
        <Chats />
      </Col>
      <Col md={8}>
        {currentChat && <CurrentChat />}
      </Col>
    </Row>
  </div>
)

export default Messanger
