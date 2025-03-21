import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import languageReducer from "./slices/languageSlice";
import quizReducer from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    language: languageReducer,
    quiz: quizReducer,
  },
});

export default store;
