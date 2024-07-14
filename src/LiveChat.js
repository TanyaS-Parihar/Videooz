import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName } from "./utils/helper";
import { generateRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setliveMessage] = useState("");
  const ChatMessages = useSelector((store) => store.chat.messages);
  console.log("ChatMessages", ChatMessages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 2000);
    console.log("hey");

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <div className=" overflow-scroll flex flex-col-reverse w-[250px] h-[600px] m;-2 p-2 border border-black fg-slate-100">
        {ChatMessages.map((mssg, index) => (
          <ChatMessage key={index} name={mssg.name} message={mssg.message} />
        ))}
      </div>
      <div className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              addMessage({
                name: "Tanya",
                message: liveMessage,
              })
            );
            setliveMessage(" ");

            setTimeout(() => {}, 2000);
          }}
        >
          <input
            className=" h-8 m-2 w-[10rem] absolute top-[43rem] right-[5rem] border-2 border-black"
            placeholder="comment"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setliveMessage(e.target.value);
            }}
          />
          <button className="m-1 p-1 absolute right-10 bg-green-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
