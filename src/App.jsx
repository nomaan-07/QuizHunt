import { createHashRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import store from "./store";
import ErrorPage from "./pages/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
    index: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "app",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Settings /> },
      { path: "settings", element: <Settings /> },
      { path: "quiz", element: <Quiz /> },
      { path: "result", element: <Result /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
