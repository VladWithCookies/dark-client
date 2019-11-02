import React from 'react'
import { connect } from 'react-redux'

import { createMessage, receiveMessage } from '../../../concepts/chat/actions'
import { IMessage } from '../../../concepts/chat/types'
import { IRootState } from '../../../concepts/rootReducer'
import CurrentChatComponent from './component'

interface IProps {
  messages: IMessage[]
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
    const { messages, receiveMessage } = this.props

    return (
      <CurrentChatComponent
        ref={this.ref}
        messages={messages}
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
  messages: state.chat.chats[0].messages, // TEMP
})

const mapDispatchToProps = ({
  createMessage,
  receiveMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChat)
