import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";

import ReactParticles from "../utils/ReactParticles/ReactParticles";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import MainContent from "../components/MainContent/MainContent";
import { userContext } from "../context/UserContext";
import "./App.css";

function App() {
  const { setCurrentUser } = useContext(userContext);

  useEffect(() => {
    const signedUser = JSON.parse(localStorage.getItem("isSignedIn"));
    setCurrentUser(signedUser);
  }, []);
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
      <ReactParticles />
    </>
  );
}

export default App;
