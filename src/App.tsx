import About from "./components/About";
import HeaderStart from "./components/HeaderStart";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import VideoModal from "./components/VideoModal";

function App() {
  return (
    <>
      <VideoModal />
      <HeaderStart />
      <About />
      <Qualification />
      <Skills />
    </>
  );
}

export default App;
