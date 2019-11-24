import { IChat } from './types'
import { IRootState } from '../rootReducer'

export const currentChatSelector = (state: IRootState): IChat => {
  const { selectedChatId, chats } = state.chat

  return chats.find((chat: IChat) => chat.id === selectedChatId) || chats[0]
}
