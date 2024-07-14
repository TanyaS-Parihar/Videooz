import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: { reply: [], nextReply: [] },
  reducers: {
    addComment: (state, action) => {
      state.reply.unshift(action.payload);
    },
    addReply: (state, action) => {
      state.nextReply.unshift(action.payload);
    },
  },
});

export const { addComment, addReply } = commentSlice.actions;
export default commentSlice.reducer;
