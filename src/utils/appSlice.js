import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addMovieDetails: (state, action) => {
      state.addMovieDetails = action.payload;
    },
  },
});
export const { toggleMenu, closeMenu, addMovieDetails } = appSlice.actions;
export default appSlice.reducer;
