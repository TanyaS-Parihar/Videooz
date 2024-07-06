import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import WatchPage from "./WatchPage";
import { YOUTUBE_API } from "./utils/constants";
import QueryPage from "./QueryPage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MainContainer = () => {
  const queryResults = useSelector((store) => store?.query?.AddQueryResults);

  return (
    <div className="absolute flex top-[15%] left-[14%]">
      <div className="absolute -left-[8rem] -z-[10] top-6">
        <div className="my-8 ">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrGYsZo1efhWW41GgRtV4TfJSZ6sy8Ck8GQDWNZLxoC5obZMUwMX1ZiEUuX1J0dweNDY&usqp=CAU"
            alt="icon"
          />
          <h3>Home</h3>
        </div>
        <div className="my-8 ">
          <img
            className="h-6"
            src="https://cdn-icons-png.freepik.com/512/2989/2989835.png"
            alt="icon"
          />
          <h3>Subcription</h3>
        </div>
        <div className="my-8 ">
          <img
            className="h-6"
            src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
            alt="icon"
          />
          <h3>You</h3>
        </div>
      </div>
      <div>
        <ButtonList />
        <VideoContainer />

        {/* <QueryPage /> */}
      </div>
    </div>
  );
};

export default MainContainer;
