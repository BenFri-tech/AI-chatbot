import React, { useState } from 'react';

export const Sidebar = () => {
  const [chats,setChats] = useState([])

  const handleNewChatClick = (e) => {
    e.preventDefault()
    setChats([...chats, 'new chat'])
  };
  const handleDeleteChat = (e) => {
    e.preventDefault()
    const chatsCopy = [...chats];
    chatsCopy.pop()
    setChats(chatsCopy)
  };

  return (
    <div className="sidebar">
      <button onClick={handleNewChatClick} className="new-chat-button">
        <img
          className="new-chat-button-img"
          src="https://cdn-icons-png.flaticon.com/512/7326/7326020.png"
        />
        <p className="chat-name">Neuer Chat</p>
      </button>
      <div className="today-line">
      {chats.map((chatTitle,index)=>{
        return (
      <div key={index}className="access-chats">
      <p className="new-chat">{chatTitle}</p>
      <button className="delete-chat-button" onClick={handleDeleteChat}>

        <span className="delete-chat material-symbols-outlined">
          delete
        </span>
      </button>
      </div>

        )
      })}
      </div>

    </div>
  );
};
