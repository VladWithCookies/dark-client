import React from 'react'
import { Col, Row } from 'react-grid-system'
import { Tab, Tabs } from '@blueprintjs/core'

import { IChat } from '../../concepts/chat/types'
import Chats from './Chats'
import Contacts from './Contacts'
import CurrentChat from './CurrentChat'

interface IProps {
  currentChat: IChat
  selectedTab: string
  onTabChange(tab: string): void
}

const Messanger: React.FC<IProps> = ({ currentChat, onTabChange, selectedTab }) => (
  <div className='messanger'>
    <Row nogutter>
      <Col md={4}>
        <Tabs
          id='messanger-tabs'
          large
          animate={false}
          onChange={onTabChange}
          renderActiveTabPanelOnly
          className='messanger__tabs'
          selectedTabId={selectedTab}
        >
          <Tab id='chats' title='Chats' panel={<Chats />} />
          <Tab id='contacts' title='Contacts' panel={<Contacts onTabChange={onTabChange} />} />
        </Tabs>
      </Col>
      <Col md={8}>
        {currentChat && <CurrentChat />}
      </Col>
    </Row>
  </div>
)

export default Messanger
