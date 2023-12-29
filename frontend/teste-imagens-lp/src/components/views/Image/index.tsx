import React, { useEffect, useState } from "react";
import axios from "axios";

import { Image } from "../../../definitions/image";
import { backendUrl } from "../../../utils/utils";

interface Props {
  imageId: number;
}

const ImageView: React.FC<Props> = ({ imageId }) => {
  const fetchData = async () => {
    try {
      const response = await axios.get(backendUrl + `/images/byId/${imageId}`);
      setImage(response.data);
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const [image, setImage] = useState<Image>();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {image && (
        <>
          <img src={image.url} style={{ width: "45vw", marginLeft: "28%" }} />
          <h1 style={{ width: "98vw", textAlign: "center" }}>{image.title}</h1>
        </>
      )}
    </>
  );
};

export default ImageView;
