import { IUser } from '../concepts/user/types'

export const asFullName = (user: IUser) => `${user.firstName} ${user.lastName}`
