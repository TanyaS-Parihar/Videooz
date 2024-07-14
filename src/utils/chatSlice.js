import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "./constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > 25) {
        state.messages.splice(24, 23);
      }
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
