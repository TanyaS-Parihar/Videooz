// import { createSlice } from "@reduxjs/toolkit";

// // //this is for preventing browser from making API call again unnecessarily
// // //agr input likha h aur agr erase kr rhe hain toh ip pe dobara call krne ki zrurat nhhi hy. we will cache it and save it so that redux store se hi call ho jaye

// const searchSlice = createSlice({
//   name: "search",
//   initialState: {
//     searchResults: true,
//   },
//   reducers: {
//     // cacheResults: (state, action) => {
//     //   state = Object.assign(state, action.payload);
//     // },
//     addSearchResults: (state, action) => {
//       state.searchResults = action.payload;
//     },
//   },
// });

// export const { addSearchResult } = searchSlice.actions;
// export default searchSlice.reducer;
