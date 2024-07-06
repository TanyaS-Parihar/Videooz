import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    addQueryResults: null,
  },
  reducers: {
    addQueryResults: (state, action) => {
      state.addQueryResults = action.payload;
    },
  },
});
export const { addQueryResults } = querySlice.actions;
export default querySlice.reducer;
