import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Results from "./pages/Results";
import Quiz from "./pages/Quiz";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Settings from "./pages/Settings";

function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
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
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
