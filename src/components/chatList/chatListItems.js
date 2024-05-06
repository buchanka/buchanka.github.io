import React, { useState } from "react";
import Avatar from "./Avatar";
import chat_icon from '../../assets/used/chat-icon.png'


const ChatListItems = ({ animationDelay, active, name, image, isOnline }) => {
  const [isActive, setIsActive] = useState(active);

  const handleChatSelect = (e) => {
    setIsActive(true);
  };

  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={handleChatSelect}
      className={`chatlist__item ${isActive ? "active" : ""}`}
    >
      <Avatar
        image={image || chat_icon}
        isOnline={isOnline}
      />

      <div className="userMeta">
        <p>{name}</p>
        <span className="activeTime">30 mins ago</span>
      </div>
    </div>
  );
};

export default ChatListItems;
