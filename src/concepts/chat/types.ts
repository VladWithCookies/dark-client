export interface IUser {
  id: string
  email: string
}

export interface IChat {
  id: number
  name?: string
  messages: IMessage[]
}

export interface IMessage {
  id: number
  text: string
  user: IUser
}
