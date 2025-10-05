import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/Books/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("data.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/BookDetails/:id",
        Component: BookDetails,
      },
    ],
  },
]);
