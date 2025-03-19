import { BrowserRouter, Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Results from "./pages/Results";
import Quiz from "./pages/Quiz";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
