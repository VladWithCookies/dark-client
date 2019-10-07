import React from 'react'
import { Col, Row } from 'react-grid-system'

import Contacts from '../../components/Contacts'
import Chat from './Chat'

const Messanger = () => (
  <div className="messanger__container">
    <Row nogutter>
      <Col md={3}>
        <Contacts />
      </Col>
      <Col md={9}>
        <Chat />
      </Col>
    </Row>
  </div>
)

export default Messanger
