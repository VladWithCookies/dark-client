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
  currentUser?: IUser
  createChat(ids: string[]): void
}

class Contacts extends React.Component<IProps> {
  componentDidMount() {
    this.props.getUsers()
  }

  handleClick = (id: string) => {
    const { currentUser } = this.props

    if (!!currentUser && id === currentUser.id) return

    this.props.createChat([id])
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
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = { getUsers, createChat }

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
