import React from "react";

import BotAvatar from "./icons/bot.svg";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
         className="column-right"
        style={{ background: "none", alignItems: 'center', justifyContent: 'center' }}
      >
        <img alt="BotAvatar" src={BotAvatar} />
      </div>
    </div>
  );
};

export default CoBotAvatar;

