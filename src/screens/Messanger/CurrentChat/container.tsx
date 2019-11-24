import React from 'react'
import { connect } from 'react-redux'

import { IChat } from '../../../concepts/chat/types'
import { IRootState } from '../../../concepts/rootReducer'
import { currentChatSelector } from '../../../concepts/chat/selectors'
import { createMessage, receiveMessage } from '../../../concepts/chat/actions'

import CurrentChatComponent from './component'

interface IProps {
  currentChat: IChat
  receiveMessage: Function
  createMessage(text: string): Object
}

interface IState {
  newMessage: string
}

class CurrentChat extends React.Component<IProps, IState> {
  ref: any = React.createRef()

  state = {
    newMessage: ''
  }
  componentDidMount() {
    this.ref.current.scrollIntoView()
  }

  componentDidUpdate() {
    this.ref.current.scrollIntoView()
  }

  handleSubmit = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      this.props.createMessage(this.state.newMessage)
      this.setState({ newMessage: '' })
      this.ref.current.scrollIntoView()
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ newMessage: e.target.value })
  }

  handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    e.target.value = ''
    e.target.value = value
  }

  render() {
    const { currentChat, receiveMessage } = this.props

    return (
      <CurrentChatComponent
        ref={this.ref}
        currentChat={currentChat}
        onFocus={this.handleFocus}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        onReceiveMessage={receiveMessage}
        newMessage={this.state.newMessage}
      />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  currentChat: currentChatSelector(state),
})

const mapDispatchToProps = ({
  createMessage,
  receiveMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChat)
