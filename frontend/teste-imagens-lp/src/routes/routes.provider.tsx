import { createBrowserRouter } from "react-router-dom";

import Init from "../pages/init";
import Main from "../pages/main";
import Album from "../pages/album";
import Image from "../pages/image";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Init />,
  },
  {
    path: "main",
    element: <Main />,
  },
  {
    path: "album/:id",
    element: <Album />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "image/:id",
    element: <Image />,
    loader: ({ params }) => {
      return params;
    },
  },
]);
