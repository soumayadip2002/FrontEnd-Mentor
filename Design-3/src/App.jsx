import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Details from "./components/details/Details";
function App() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Navbar />
        <Intro />
      </div>

      <div className='w-[100%] m-auto sm:w-[100%]'>
        <Details />
      </div>
    </>
  );
}

export default App;
