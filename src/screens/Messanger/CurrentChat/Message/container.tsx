import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '../../../../concepts/rootReducer'
import { IUser } from '../../../../concepts/chat/types'
import MessageComponent from './component'

interface IProps {
  currentUser?: IUser
  text: string
  user: IUser
}

class Message extends React.Component<IProps> {
  get isCurrentUserMessage(): boolean {
    const { user, currentUser } = this.props

    return !!currentUser && user.id === currentUser.id
  }

  render() {
    return (
      <MessageComponent
        text={this.props.text}
        isCurrentUserMessage={this.isCurrentUserMessage}
      />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Message)
