import React from 'react'

import { asFullName } from '../../../utils/formatters'
import { IUser } from '../../../concepts/user/types'
import Contact from '../../../components/Contact'

interface IProps {
  users: IUser[]
  onClick(id: string): void
}

const Contacts: React.FC<IProps> = ({ users, onClick }) => (
  <div className='contacts'>
    {users.map((user: IUser) => (
      <Contact
        id={user.id}
        key={user.id}
        onClick={onClick}
        name={asFullName(user)}
      />
    ))}
  </div>
)

export default Contacts
