import React from 'react'
import { Col, Row } from 'react-grid-system'

import Chats from './Chats'
import CurrentChat from './CurrentChat'

const Messanger = () => (
  <div className='messanger__container'>
    <Row nogutter>
      <Col md={3}>
        <Chats />
      </Col>
      <Col md={9}>
        <CurrentChat />
      </Col>
    </Row>
  </div>
)

export default Messanger
