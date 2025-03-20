import { createSlice } from "@reduxjs/toolkit";

const isDarkMode = localStorage.getItem("isDarkMode")
  ? JSON.parse(localStorage.getItem("isDarkMode"))
  : window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {
  isDarkMode,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
