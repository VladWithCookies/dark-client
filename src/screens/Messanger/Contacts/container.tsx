import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '../../../concepts/rootReducer'
import { getUsers } from '../../../concepts/user/actions'
import { IUser } from '../../../concepts/user/types'
import ContactsComponent from './component'

interface IProps {
  users: IUser[]
  getUsers: VoidFunction
}

class Contacts extends React.Component<IProps> {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const { users } = this.props

    return (
      <ContactsComponent users={users} />
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  users: state.user.users
})

const mapDispatchToProps = { getUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
