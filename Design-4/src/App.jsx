import Nav from "./components/Navbar/Nav";
import Intro from "./components/Intro/Intro";
import { useEffect, useState } from "react";
import About from "./components/About/About";
import Creation from "./components/Creation/Creation";
import Footer from "./components/Footer/Footer";
function App() {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 500);
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });
  return (
    <>
      <div
        className={`text-white ${
          !isMobile
            ? "bg-[url('/desktop/image-hero.png')]"
            : "bg-[url('/mobile/image-hero.jpg')]"
        }
      bg-norepeat bg-cover bg-center
      `}
      >
        <Nav />
        <Intro />
      </div>
      <div>
        <About />
        <Creation />
        <Footer />
      </div>
    </>
  );
}

export default App;
