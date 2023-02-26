import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import ImageRecognition from "../ImageRecognition/ImageRecognition";
import "./MainContent.css";

const MainContent = () => {
  const [imageURL, setImageURL] = useState("");

  return (
    <section>
      <div className="home-section">
        <div className="typewriter">
          <h1>Paste image link in the box, please.</h1>
        </div>
        <InputBox setImageURL={setImageURL} />
        <ImageRecognition imageURL={imageURL} />
      </div>
    </section>
  );
};

export default MainContent;
