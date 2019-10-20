import React from 'react';
import Textarea from 'react-textarea-autosize'

import Messege from './Message'

const CurrentChat = () => (
  <div className='chat__container'>
    <div className='chat__messages'>
      <Messege />
      <Messege />
      <Messege />
      <Messege />
    </div>
    <div className='chat__textarea'>
      <Textarea autoFocus />
    </div>
  </div>
);

export default CurrentChat;
