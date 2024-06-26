import React from "react";
import Avatar from "../chatList/Avatar";

const ChatItem = ({ animationDelay, user, msg, image }) => {
  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      className={`chat__item ${user ? user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{msg}</div>
        <div className="chat__meta">
          <span>16 mins ago</span>
          <span>Seen 1.03PM</span>
        </div>
      </div>
      <Avatar isOnline="active" image={image} />
    </div>
  );
};

export default ChatItem;

