import { useRef, useState, useEffect } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import man_avatar from '../../assets/used/man-avatar.webp';
import woman_avatar from '../../assets/used/woman-avatar.webp';
import { IoSettings } from "react-icons/io5";


function ChatContent() {
  const messagesEndRef = useRef(null);
  const [chat, setChat] = useState([
    {
      key: 1,
      image: man_avatar,
      type: "",
      msg: "hi Anna, how a u?",
    },
    {
      key: 2,
      image: woman_avatar,
      type: "other",
      msg: "i m fine",
    },
    {
      key: 3,
      image: woman_avatar,
      type: "other",
      msg: "what ab you?",
    },
    {
      key: 4,
      image: man_avatar,
      type: "",
      msg: "awesome these days",
    },
    {
      key: 5,
      image: woman_avatar,
      type: "other",
      msg: "yay! videochat?",
    },
    {
      key: 6,
      image: man_avatar,
      type: "",
      msg: "5 mins and i ll be there",
    },
    {
      key: 7,
      image: woman_avatar,
      type: "other",
      msg: "k",
    },
  ]);
  const [msg, setMsg] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        if (msg !== "") {
          setChat((prevChat) => [
            ...prevChat,
            {
              key: prevChat.length + 1,
              type: "",
              msg: msg,
              image: {man_avatar}
            }
          ]);
          scrollToBottom();
          setMsg("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [msg]);

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image={woman_avatar}
            />
            <p>Anna Balogh</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
            <IoSettings/>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => (
            <ChatItem
              animationDelay={index + 2}
              key={itm.key}
              user={itm.type ? itm.type : "me"}
              msg={itm.msg}
              image={itm.image}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            value={msg}
            onChange={onStateChange}
          />
         <button className="btnSendMsg" id="sendMsgBtn">
           <svg className="size-6 m-0.5" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
             <title>paper-plane</title>
             <path d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
