import React from 'react'
import { Col, Row } from 'react-grid-system'
import { Navbar, Tab, Tabs } from '@blueprintjs/core'

import { IChat } from '../../concepts/chat/types'
import Chats from './Chats'
import Contacts from './Contacts'
import CurrentChat from './CurrentChat'

interface IProps {
  currentChat: IChat
}

const Messanger: React.FC<IProps> = ({ currentChat }) => (
  <div className='messanger'>
    <Row nogutter>
      <Col md={4}>
        <Tabs
          id='messanger-tabs'
          large
          animate={false}
          renderActiveTabPanelOnly
          className='messanger__tabs'
        >
          <Tab id='chats' title='Chats' panel={<Chats />} />
          <Tab id='contacts' title='Contacts' panel={<Contacts />} />
        </Tabs>
      </Col>
      <Col md={8}>
        {currentChat && <CurrentChat />}
      </Col>
    </Row>
  </div>
)

export default Messanger
