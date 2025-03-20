import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import languageReducer from "./slices/languageSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    language: languageReducer,
  },
});

export default store;
