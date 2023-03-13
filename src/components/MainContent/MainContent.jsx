import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import InputBox from "../InputBox/InputBox";
import ImageRecognition from "../ImageRecognition/ImageRecognition";
import { userContext } from "../../context/UserContext";
import "./MainContent.css";

const MainContent = () => {
  const navigateTo = useNavigate();
  const { currentUser } = useContext(userContext);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (!currentUser.id) {
      navigateTo("/");
    }
  }, [currentUser]);

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
