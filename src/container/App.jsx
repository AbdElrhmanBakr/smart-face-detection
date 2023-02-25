import ReactParticles from "../utils/ReactParticles/ReactParticles";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <Intro /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      <Home />
      <ReactParticles />
    </>
  );
}

export default App;
