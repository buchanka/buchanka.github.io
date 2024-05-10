import React, { useState } from "react";
import "./chatList.css";
import ChatListItems from "./chatListItems";
import man_avatar from '../../assets/used/man_avatar.webp';
import man_avatar2 from '../../assets/used/man-avatar2.jpg';
import woman_avatar from '../../assets/used/woman_avatar.webp';
import woman_avatar2 from '../../assets/used/woman-avatar2.jpg';
import woman_avatar3 from '../../assets/used/woman-avatar3.jpg';
import girl_avatar from '../../assets/used/girl_avatar.webp';
import boy_avatar from '../../assets/used/boy_avatar.webp';

const ChatList = () => {
const allChatUsers = [
        {
            image: man_avatar,
            id: 1,
            name: "Conrad Ciesielski",
            active: true,
            isOnline: true,
          },
          {
            image: woman_avatar,
            id: 2,
            name: "Anna Balogh",
            active: false,
            isOnline: false,
          },
          {
            image: man_avatar,
            id: 3,
            name: "Alexander Olsson",
            active: false,
            isOnline: false,
          },
          {
            image: girl_avatar,
            id: 4,
            name: "Stefanie Mahe",
            active: false,
            isOnline: true,
          },
          {
            image: boy_avatar,
            id: 5,
            name: "Max Roth",
            active: false,
            isOnline: false,
          },
          {
            image: girl_avatar,
            id: 6,
            name: "Kylie Mellor",
            active: false,
            isOnline: true,
          },
          {
            image: man_avatar2,
            id: 7,
            name: "Bá Khai Tùng",
            active: false,
            isOnline: true,
          },
          {
            image: woman_avatar3,
            id: 8,
            name: "Wu Chuan Jeng",
            active: false,
            isOnline: false,
          },
          {
            image: woman_avatar2,
            id: 9,
            name: "Lia Esposito",
            active: false,
            isOnline: true,
          },
          {
            image: man_avatar,
            id: 10,
            name: "Justen Batz",
            active: false,
            isOnline: true,
          },
    ];
    const [chats, setChats] = useState(allChatUsers);

  return (
    <div className='chatlist'>
        <div classname=''>
            <button className='bg-paleblue flex flex-row h-8 items-baseline gap-16 text-center hover:bg-lilac'>
                <svg className='size-5 rounded-md ' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className='text-bold text-dusty text-wrap text-xs'>New conversation</span>
            </button>
        </div>

        <div className='flex flex-row-reverse justify-between p-4'>
        <button className='btn'>
                <svg className='size-5' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                    <circle cx="5" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                    <circle cx="12" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                    <circle cx="19" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/>
                </svg>
        </button>
            <h2 className='text-left text-extrabold text-lg text-oceanblue'>Диалоги</h2>
            
        </div>

         <div className='flex flex-row align-baseline'>
            <div className="bg-paleblue rounded-xl h-10 w-46 text-center">
                <label className="input input-bordered flex items-center bg-paleblue active:bg-paleblue hover:bg-lilac rounded-xl h-10">
                    <input type="text" className="grow bg-paleblue rounded-xl h-10 text-center active:bg-paleblue hover:bg-lilac" placeholder="Search..." />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 opacity-70 items-baseline"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        </div>
        
        <div className="chatlist__items">
          {chats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image.image}
              />
            );
          })}
        </div>
    </div>
  );
};
export default ChatList