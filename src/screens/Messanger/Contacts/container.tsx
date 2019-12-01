import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '../../../concepts/rootReducer'
import { createChat } from '../../../concepts/chat/actions'
import { getUsers } from '../../../concepts/user/actions'
import { IUser } from '../../../concepts/user/types'
import ContactsComponent from './component'

interface IProps {
  users: IUser[]
  getUsers: VoidFunction
  onTabChange(tab: string): void
  createChat(ids: string[]): void
}

class Contacts extends React.Component<IProps> {
  componentDidMount() {
    this.props.getUsers()
  }

  handleClick = (id: string) => {
    const { createChat, onTabChange } = this.props

    createChat([id])
    onTabChange('chats')
  }

  render() {
    const { users } = this.props

    return (
      <ContactsComponent
        users={users}
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  users: state.user.users,
})

const mapDispatchToProps = { getUsers, createChat }

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
