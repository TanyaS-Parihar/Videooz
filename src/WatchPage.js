import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  //NEW HOOK
  const [searchParams] = useSearchParams();

  const paramId = searchParams.get("v");
  // toh ye v ke bad ka return krega apne ko id
  const addMovieDetails = useSelector((store) => store.app.addMovieDetails);
  // (" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyDiwBOwgJEEJUBJO9jIiuMUcaIbVj0HzP0");
  // const vidDetails = useSelector((store) => store.app.addMovieDetails);console.log
  const [isDescriptionOpen, setIsDescriptionOpen] = useState();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [newlikeCount, SetNewlikeCount] = useState(37544);

  const [like, Setlike] = useState(false);

  if (!addMovieDetails) return null;

  const { snippet, statistics } = addMovieDetails;
  const { channelTitle, description, title } = snippet;
  const { viewCount, commentCount } = statistics;
  const { likeCount } = statistics;

  return (
    <div className="flex">
      <div className="m-5 mt-10 ">
        <div className="bg-black rounded-lg  ">
          <iframe
            width="800"
            height="380"
            className="rounded-xl"
            src={"https://www.youtube.com/embed/" + paramId}
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <div className="m-2 font-bold text-xl"> {title}</div>

          <div className="flex">
            <div className="m-3 mt-4 font-bold p-3 bg-slate-500 rounded-sm">
              {" "}
              {channelTitle}
            </div>
            <button className=" font-bold text-white mt-1 ml-3 bg-black rounded-2xl px-2">
              Subscribe
            </button>

            <div className=" border-2 border-gray-900  flex font-bold text-black mt-1 ml-[10rem] bg-gray-400 rounded-l-full p-2">
              <img
                onClick={() => {
                  Setlike(true);
                  if (like == true) {
                    SetNewlikeCount(newlikeCount + 1);
                    Setlike(false);
                  } else if (like == false) {
                    SetNewlikeCount(newlikeCount - 1);
                  }
                }}
                className="h-8 mr-1"
                src="https://w7.pngwing.com/pngs/302/973/png-transparent-computer-icons-thumb-signal-like-button-thumbs-up-miscellaneous-angle-rectangle-thumbnail.png"
              />
              {newlikeCount}
            </div>
            <div className=" flex font-bold text-black mt-1 border-2 border-gray-900 rounded-r-full p-2">
              <img
                onClick={() => {}}
                className="ml-3 mt-1 h-6 mr-1"
                src="https://i0.wp.com/www.mtctutorials.com/wp-content/uploads/2019/04/dislike-button-png-by-mtc-tutorials.png?fit=437%2C407&ssl=1"
              />
            </div>
            {/* <button className=" font-bold text-black mt-1 ml-[10rem] bg-gray-300 rounded-2xl px-2">
              Share
            </button> */}
          </div>
          <div className="rounded-xl overflow-hidden bg-yellow-500 bg-opacity-85 h-16 mt-5 w-[98%]">
            <div className="m-3  font-bold"> {viewCount} views</div>
            {/* <div className="m-3 font-bold"> {description}</div> */}
          </div>
        </div>
        <div className="-ml-5 rounded-md">
          <CommentsContainer />
        </div>
      </div>

      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
