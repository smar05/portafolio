import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />

      <a href="#" className="btn btn-outline-dark px-0 back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default App;
