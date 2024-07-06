import { useSelector } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "./utils/commentSlice";
const UserComment = ({}) => {
  const [commentMessage, setCommentMessage] = useState(" ");
  const dispatch = useDispatch();

  const addMessage = useSelector((store) => store.comment.reply);
  const handleReply = () => {
    console.log("click hua ow");
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCommentMessage(e.target.value);

            dispatch(
              addComment({
                name: "Tanya",
                message: " " + commentMessage,
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
            <button className="bg-blue-500 py-2 rounded-3xl">Reply</button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      {addMessage.map((mssg) => (
        <div className="bg-slate-300 pl-8 my-2 flex-col-reverse">
          <div className="flex  ">
            <img
              className="w-8 h-8 rounded-full"
              src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
              alt="User"
            />
            <p className="font-bold "> {" " + mssg.name}</p>
            <p> {" " + mssg.message}</p>{" "}
          </div>
          <p className="font-bold pl-10 cursor-pointer" id="reply">
            Reply
          </p>
        </div>
      ))}
    </div>
  );
};
export default UserComment;
