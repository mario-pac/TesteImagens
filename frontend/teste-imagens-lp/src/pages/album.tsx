import React from "react";
import AlbumView from "../components/views/Album";

import { useLoaderData } from "react-router-dom";

const Album: React.FC = () => {
  const loaderData = useLoaderData();

  return <AlbumView albumId={(loaderData as { id: number }).id} />;
};

export default Album;
