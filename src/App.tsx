import About from "./components/About";
import Contact from "./components/Contact";
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
      <Contact />
    </>
  );
}

export default App;
