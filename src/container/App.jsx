import { Routes, Route } from "react-router-dom";

import ReactParticles from "../utils/ReactParticles/ReactParticles";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import MainContent from "../components/MainContent/MainContent";
import "./App.css";

function App() {
  // Testing Server by Fetching all users data.
  // useEffect(() => {
  //   fetch("http://localhost:3000/")
  //     .then((response) => response.json())
  //     .then(console.log);
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Intro />} />
          <Route path="home" element={<MainContent />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
      {/* <ReactParticles /> */}
    </>
  );
}

export default App;
