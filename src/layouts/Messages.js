import * as React from 'react';
import ChatBody from '../components/ChatBody/ChatBody';
import './Messages.css';

function Messages(){
    return(
    <div className='bg-ghost w-full h-full p-36'>
        <div className='message-container'>
          <ChatBody></ChatBody>
        </div>
    </div>
       
    )
}

export default Messages;