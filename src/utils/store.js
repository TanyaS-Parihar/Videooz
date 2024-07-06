import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./commentSlice";
// import searchSlice from "./searchSlice";
import queryReducer from "./querySlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    comment: commentSlice,
    query: queryReducer,
  },
});
export default store;
