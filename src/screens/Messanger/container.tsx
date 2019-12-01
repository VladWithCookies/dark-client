import React from 'react'
import { connect } from 'react-redux'

import { IChat } from '../../concepts/chat/types'
import { currentChatSelector } from '../../concepts/chat/selectors'
import { IRootState } from '../../concepts/rootReducer'
import CurrentChatComponent from './component'

interface IProps {
  currentChat: IChat
}

interface IState {
  selectedTab: string
}

class CurrentChat extends React.Component<IProps, IState> {
  state = {
    selectedTab: 'chats'
  }

  handleTabChange = (selectedTab: string) => {
    this.setState({ selectedTab })
  }

  render() {
    const { currentChat } = this.props
    const { selectedTab } = this.state

    return (
      <CurrentChatComponent
        selectedTab={selectedTab}
        currentChat={currentChat}
        onTabChange={this.handleTabChange}
      />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  currentChat: currentChatSelector(state),
})

export default connect(mapStateToProps)(CurrentChat)
