import { IUser } from '../concepts/user/types'
import { IChat } from '../concepts/chat/types'

export const asFullName = (user: IUser) => `${user.firstName} ${user.lastName}`

export const asChatName = (chat: IChat, currentUser?: IUser): string => {
  const { name, users } = chat

  if (name) return name
  if (!currentUser) return ''
  if (users.length === 1) return asFullName(currentUser)

  return users.filter(({ id }) => id.toString() !== currentUser.id).map(asFullName).join(', ')
}
