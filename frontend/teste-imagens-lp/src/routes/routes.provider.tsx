import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main";
import Album from "../pages/album";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "album/:id",
    element: <Album />,
    loader: ({ params }) => {
      return params;
    },
  },
]);
