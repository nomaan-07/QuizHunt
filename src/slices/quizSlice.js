import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  status: "ready",
  maxNumQuestions: 20,
  minNumQuestions: 10,
  numQuestions: 10,
  correctAnswersCount: 0,
  quizType: "html",
  remainingSeconds: null,
  totalPoints: 0,
  points: 0,
  highScore: 0,
  answer: null,
  index: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz(state, action) {
      state.answer = null;
      state.points = 0;
      state.questions = action.payload.questions;
      state.status = "active";
      state.remainingSeconds = action.payload.remainingSeconds;
      state.totalPoints = action.payload.questions.reduce(
        (acc, cur) => acc + cur.points,
        0,
      );
    },

    changeQuizType(state, action) {
      state.quizType = action.payload;
    },

    changeNumQuestions(state, action) {
      state.numQuestions = action.payload;
    },

    decreaseTime(state) {
      if (state.remainingSeconds <= 0) {
        state.status = "finished";
        return;
      }
      state.remainingSeconds--;
    },

    answerQuestion(state, action) {
      state.answer = action.payload.answer;
      state.points += action.payload.points;
      state.correctAnswersCount = action.payload.isCorrect
        ? state.correctAnswersCount + 1
        : state.correctAnswersCount;
    },

    nextQuestion(state) {
      state.answer = null;
      state.index++;
    },

    finishQuiz(state) {
      state.status === "finished";
      state.remainingSeconds = null;
      state.index = 0;
      state.highScore =
        state.points > state.highScore ? state.points : state.highScore;
    },

    restartQuiz(state) {
      return { ...initialState, highScore: state.highScore };
    },
  },
});

export const {
  startQuiz,
  changeQuizType,
  changeNumQuestions,
  decreaseTime,
  answerQuestion,
  nextQuestion,
  finishQuiz,
  restartQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
