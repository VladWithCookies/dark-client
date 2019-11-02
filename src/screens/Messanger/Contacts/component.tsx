import React from 'react'

import { asFullName } from '../../../utils/formatters'
import { IUser } from '../../../concepts/user/types'
import Contact from '../../../components/Contact'

interface IProps {
  users: IUser[]
}

const Contacts: React.FC<IProps> = ({ users }) => (
  <div className='contacts'>
    {users.map((user: IUser) => (
      <Contact
        key={user.id}
        name={asFullName(user)}
      />
    ))}
  </div>
)

export default Contacts
