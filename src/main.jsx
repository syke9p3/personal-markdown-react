import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import NotePage from "./pages/NotePage.jsx";

let user = null;

user = {
  username: "syke9p3",
  id: 1,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notes/:noteId",
    element: <NotePage />,
  },
]);

export const AuthContext = createContext({}); // paramter: initial value

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext.Provider value={user}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>
);
