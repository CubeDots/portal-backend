import React from "react";

import BotAvatar from "./icons/logo512.png";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
         className="column-right"
        style={{ background: "none", alignItems: 'center', justifyContent: 'center' }}
      >
        <img alt="BotAvatar" src={BotAvatar} style={{height: 40, width: 40}} />
      </div>
    </div>
  );
};

export default CoBotAvatar;

