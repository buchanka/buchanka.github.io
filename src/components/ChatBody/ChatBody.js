import React from 'react'
import './ChatBody.css'
import ChatContent from '../chatContent/chatContent';
import ChatList from '../chatList/chatList';


function ChatBody() {
  return (
    <div className='mainChatBody'>
        <ChatList/>
        <ChatContent/>
    </div>
  )
}

export default ChatBody