import { IUser } from '../concepts/user/types'
import { IChat } from '../concepts/chat/types'

export const asFullName = (user: IUser) => `${user.firstName} ${user.lastName}`

export const asChatName = (chat: IChat, currentUser: IUser) => {
  const { name, users } = chat

  return name || users.filter(({ id }) => id.toString() !== currentUser.id).map(asFullName).join(', ')
}
