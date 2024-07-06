import React, { useState } from "react";
import { generateRandomMessage } from "./utils/helper";
import { addComment } from "./utils/commentSlice";
// import { addMessage } from "./utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import UserComment from "./UserComment";
// import { generateRandomName } from "./utils/helper";
const commentsData = [
  {
    name: "Tanya",
    text: "gjhgjhk",
    replies: [],
  },
  {
    name: "Avinash",
    text: "Lorem ipsum1",
    replies: [],
  },
  { name: "Avinash", text: "Lorem ipsum2", replies: [] },

  {
    name: "Avinash",
    text: "Lorem ipsum3",
    replies: [
      {
        name: "Avinash",
        text: "Lorem ipsum3.1",
        replies: [
          {
            name: "Avinash",
            text: "Lorem ipsum3.2",
            replies: [],
          },
          {
            name: "Avinash",
            text: "Lorem ipsum3.2.2",
            replies: [
              {
                name: "Avinash",
                text: "Lorem ipsum23.3",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return (
    <div>
      <div className="bg-gray-300 border-l-2  border-gray-600 p-3">
        {comments.map((comment) => (
          <div>
            <Comment data={comment} />
            <div className="ml-5 pl-2  ">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Comment = ({ data }) => {
  // const ChatMessages = useSelector((store) => store.chat.messages);
  // const dispatch = useDispatch();

  const { name, text, replies } = data;

  return (
    <div>
      <div className="flex rounded-md pl-7 ">
        <div>
          <img
            className="w-8 h-8 rounded-full"
            src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
            alt="User"
          />
        </div>
        <div>
          <p className="font-bold "> {" " + name}</p>
          <p> {" " + text}</p>
          <p className="pl-8 font-bold"> Reply</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

//comments is an array of objects
const CommentsContainer = () => {
  const [commentMessage, setCommentMessage] = useState(" ");
  const dispatch = useDispatch();
  return (
    <div className="m-5 p-2 shadow-lg">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <div className="flex bg-slate-400 ">
        <img
          className="h-8 rounded-full"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCommentMessage(e.target.value);

            dispatch(
              addComment({
                name: "Tanya",
                message: commentMessage,
              })
            );
            setCommentMessage(" ");
          }}
        >
          <div className="flex ">
            <input
              value={commentMessage}
              type="text"
              placeholder="Add a Comment... "
              className="w-[700px] text-black border-r-2 border-2 border-black pl-2 bg-slate-200"
              onChange={(e) => {
                setCommentMessage(e.target.value);
              }}
            />
            <button className="bg-blue-500 py-2 rounded-3xl">Submit</button>
          </div>
        </form>
      </div>
      <UserComment />
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
