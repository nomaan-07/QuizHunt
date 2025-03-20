import { createSlice } from "@reduxjs/toolkit";

const language =
  localStorage.getItem("language") === "fa"
    ? "fa"
    : navigator.language || navigator.userLanguage || "en";

const initialState = {
  language,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage(state) {
      state.language =
        state.language === "fa-IR" || state.language === "fa" ? "en" : "fa";
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
