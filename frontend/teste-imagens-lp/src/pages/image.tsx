import React from "react";
import ImageView from "../components/views/Image";

import { useLoaderData } from "react-router-dom";

const Image: React.FC = () => {
  const loaderData = useLoaderData();

  return <ImageView imageId={(loaderData as { id: number }).id} />;
};

export default Image;
