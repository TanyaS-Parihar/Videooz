import { useSelector } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "./utils/commentSlice";
import { addReply } from "./utils/commentSlice";
const UserComment = ({}) => {
  const [commentMessage, setCommentMessage] = useState(" ");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplyInput2, setShowReplyInput2] = useState(false);
  const dispatch = useDispatch();

  const addMessage = useSelector((store) => store.comment.reply);
  const addMessage2 = useSelector((store) => store.comment.nextReply);

  // const replies = () => {
  //   return (
  //     <div>
  //       {addMessage2.map((mssg, index) => (
  //         <div className="bg-slate-300 pl-8   flex-col-reverse">
  //           <div className="flex  ">
  //             <img
  //               className="w-8 h-8 rounded-full"
  //               src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
  //               alt="User"
  //             />
  //             <p className="font-bold "> {" " + mssg.name}</p>
  //             <p> {" " + mssg.message}</p>{" "}
  //           </div>
  //           <p
  //             className="font-bold pl-10 cursor-pointer"
  //             id="reply"
  //             onClick={(e) => {
  //               console.log(index);
  //               !showReplyInput2
  //                 ? setShowReplyInput2(true)
  //                 : setShowReplyInput2(false);
  //             }}
  //           >
  //             Reply
  //           </p>
  //           {showReplyInput && <FirstReply />}
  //         </div>
  //       ))}
  //       ;
  //     </div>
  //   );
  // };
  return (
    <div>
      {addMessage.map((mssg, index) => (
        <div className="bg-slate-300 pl-8   flex-col-reverse">
          <div className="flex  ">
            <img
              className="w-8 h-8 rounded-full"
              src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
              alt="User"
            />
            <p className="font-bold "> {" " + mssg.name}</p>
            <p> {" " + mssg.message}</p>{" "}
          </div>
          <p
            className="font-bold pl-10 cursor-pointer"
            id="reply"
            onClick={(e) => {
              console.log(index);
              !showReplyInput
                ? setShowReplyInput(true)
                : setShowReplyInput(false);
            }}
          >
            Reply
          </p>
          {showReplyInput && (
            <div>
              <FirstReply />
              {/* <input className="h-5 border-2 w-20" />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCommentMessage(e.target.value);

                  dispatch(
                    addReply({
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
                    className="w-80 ml-10 text-black border-r-2 border-2 border-black pl-2 bg-slate-200"
                    onChange={(e) => {
                      setCommentMessage(e.target.value);
                    }}
                  />
                  <button className="bg-blue-500 py-2 rounded-3xl">
                    Reply
                  </button>
                </div>
              </form>
              {replies()} */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FirstReply = () => {
  const [commentMessage, setCommentMessage] = useState(" ");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplyInput2, setShowReplyInput2] = useState(false);
  const dispatch = useDispatch();

  const addMessage = useSelector((store) => store.comment.reply);
  const addMessage2 = useSelector((store) => store.comment.nextReply);
  return (
    <div>
      {/* <input className="h-5 border-2 w-20" /> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCommentMessage(e.target.value);

          dispatch(
            addReply({
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
            className="w-80 ml-10 text-black border-r-2 border-2 border-black pl-2 bg-slate-200"
            onChange={(e) => {
              setCommentMessage(e.target.value);
            }}
          />
          <button className="bg-blue-500 py-2 rounded-3xl">Reply</button>
        </div>
      </form>
      <Replies />
    </div>
  );
};

const Replies = () => {
  const [commentMessage, setCommentMessage] = useState(" ");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplyInput2, setShowReplyInput2] = useState(false);

  const addMessage2 = useSelector((store) => store.comment.nextReply);
  return (
    <div>
      {addMessage2.map((mssg, index) => (
        <div className="bg-slate-300 pl-8   flex-col-reverse">
          <div className="flex  ">
            <img
              className="w-8 h-8 rounded-full"
              src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
              alt="User"
            />
            <p className="font-bold "> {" " + mssg.name}</p>
            <p> {" " + mssg.message}</p>{" "}
          </div>
          <p
            className="font-bold pl-10 cursor-pointer"
            id="reply"
            onClick={(e) => {
              console.log(index);
              !showReplyInput2
                ? setShowReplyInput2(true)
                : setShowReplyInput2(false);
            }}
          >
            Reply
          </p>
          {showReplyInput2 && (
            <div>
              <FirstReply />
            </div>
          )}
        </div>
      ))}
      ;
    </div>
  );
};

export default UserComment;
