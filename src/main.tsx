import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./componenets/Home";
import ErrorPage from "./componenets/ErrorPage";
import AboutPage from "./componenets/AboutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <AboutPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
