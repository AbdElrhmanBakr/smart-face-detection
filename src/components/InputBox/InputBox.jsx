import { useContext } from "react";

import { clarifaiContext } from "../../context/ClarifaiContext";
import { MODEL_ID, MODEL_VERSION_ID } from "../../context/ClarifaiContext";
import "./InputBox.css";

const InputBox = () => {
  const {
    setImageURL,
    inputURL,
    setInputURL,
    clarifaiOptions,
    setBoundingBox,
  } = useContext(clarifaiContext);

  const handleImage = (event) => {
    setInputURL(event.target.value);
  };

  const clarifaiBoundingBox = (result) => {
    const boundingBox =
      result.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("recognition-image");
    const imageWidth = Number(image.width);
    const imageheight = Number(image.height);
    return {
      topRow: imageheight * boundingBox.top_row,
      bottomRow: imageheight - imageheight * boundingBox.bottom_row,
      leftCol: imageWidth * boundingBox.left_col,
      rightCol: imageWidth - imageWidth * boundingBox.right_col,
    };
  };

  const handleClick = () => {
    setImageURL(inputURL);
    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      clarifaiOptions
    )
      .then((response) => response.json())
      .then((result) => setBoundingBox(clarifaiBoundingBox(result)))
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="searchbox-wrap">
      <input
        type="text"
        placeholder="Image Link Here"
        value={inputURL}
        onChange={handleImage}
      />
      <button onClick={handleClick}>
        <span>DETECT</span>
      </button>
    </div>
  );
};

export default InputBox;
