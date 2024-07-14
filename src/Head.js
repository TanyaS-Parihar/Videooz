import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useRef } from "react";
import { SUGGESTIONS_API } from "./utils/constants";
// import { cacheResults } from "./utils/searchSlice";
import { addQueryResults } from "./utils/querySlice";
import Videooz from "./images/Videooz.png";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const [inputValue, setInputValue] = useState();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const handleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
      // }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SUGGESTIONS_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
  };
  //--------------------------------------------To show suggestions------
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setInputValue(e.target.innerText);
    const searchQueryResults = e.target.innerText;

    console.log("setkrme ke bad inpur value", inputValue);

    const getSearchResults = async () => {
      const data = await fetch(
        ` https://youtube.googleapis.com/youtube/v3/search?type=video&chart=mostPopular&maxResults=5&regionCode=IN&q=${searchQueryResults}&key=AIzaSyAPy2lV1HoWtFaVAVcKGpUzaaaFkSSw-qQ`
      );
      const json = await data.json();
      console.log("json.items", json.items);

      const JsonArray = json.items;

      dispatch(addQueryResults(JsonArray));
    };
    navigate(`/search/${searchQueryResults}`);
    getSearchResults();
  };

  // const handleSubmit = (e) => {
  //   setInputValue(e.target.value);
  //   const searchInputQueryResults = e.target.value;
  //   console.log("searchInputQueryResults", searchInputQueryResults);
  //   const getSearchResults = async () => {
  //     const data = await fetch(
  //       ` https://youtube.googleapis.com/youtube/v3/search?type=video&chart=mostPopular&maxResults=20&regionCode=IN&q=${searchInputQueryResults}&key=AIzaSyAQEQKVZeXKZ0tSzpHlIrOhVVUOtwFGsjM`
  //     );
  //     const json = await data.json();
  //     console.log("me submit hu chl rha hu", json.items);

  //     const JsonArray = json.items;

  //     dispatch(addQueryResults(JsonArray));
  //   };
  //   getSearchResults();
  // };

  return (
    <div className="cursor-pointer z-10 p-2 flex  bg-sky-100 rounded-md">
      <div>
        <img
          onClick={handleHamburgerMenu}
          className="w-8 relative left-15 top-20"
          id="hamburger-menu"
          alt="hamburger-menu"
          src="https://t3.ftcdn.net/jpg/08/07/60/08/240_F_807600892_lqVJQSAtNrGfSJCkTGmNZHZ0cqNnbOwy.jpg"
        />
      </div>
      <Link to="/">
        <div>
          <img
            className="w-60 -mt-4 relative top-0 -left-10 "
            alt="logo"
            src={Videooz}
          />
        </div>
      </Link>
      <Link to={inputValue !== undefined && `search/${inputValue}`}>
        <div>
          <form>
            <input
              value={inputValue}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSearchQuery(e.target.value);
              }}
              className=" ml-[8rem] w-[250px] border-gray-800 border-2 px-4 py-2  rounded-l-full"
              type="text"
            />
            <button
              type="submit"
              // onSubmit={handleSubmit}
              className=" absolute w-[64px] font-medium bg-red-600 border-2 border-red-900 py-[8px] rounded-r-3xl mr-10"
            >
              Search
            </button>
            {showSuggestions && (
              <div className=" absolute left-96 p-2 w-[245px] bg-slate-50 rounded-md top-14 shadow-lg z-10">
                <ul>
                  {suggestions?.map((suggestion) => (
                    <li
                      key={suggestion}
                      className="shadow-xs hover:bg-gray-400"
                      onMouseDown={handleClick}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}{" "}
          </form>{" "}
        </div>
      </Link>
      <div className="ml-96 w-[2rem]">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
      </div>
    </div>
  );
};
export default Head;
