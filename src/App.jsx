import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Results from "./pages/Results";
import Quiz from "./pages/Quiz";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="settings" />} />
            <Route path="settings" element={<Settings />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="results" element={<Results />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
