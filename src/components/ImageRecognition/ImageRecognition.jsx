import { useContext } from "react";

import { clarifaiContext } from "../../context/ClarifaiContext";
import "./ImageRecognition.css";

const ImageRecognition = () => {
  const { imageURL, boundingBox } = useContext(clarifaiContext);

  return (
    <div className="img-recognition">
      {imageURL && (
        <div className="image-recog">
          <img id="recognition-image" src={imageURL} alt="Image" />
          <div
            className="bound-box"
            style={{
              top: boundingBox.topRow,
              right: boundingBox.rightCol,
              left: boundingBox.leftCol,
              bottom: boundingBox.bottomRow,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ImageRecognition;
