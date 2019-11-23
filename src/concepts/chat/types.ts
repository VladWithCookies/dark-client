export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
}

export interface IChat {
  id: string
  name: string
  users: IUser[]
  messages: IMessage[]
}

export interface IMessage {
  id: string
  text: string
  user: IUser
}
