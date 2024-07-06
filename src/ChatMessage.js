import React from "react";
import { generateRandomMessage } from "./utils/helper";
const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex">
        <img
          className=" w-6 h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
        <span className="font-bold">{name}</span>
        <span> {" " + message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
