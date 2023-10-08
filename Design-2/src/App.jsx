import Navbar from "./components/Navbar";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
function App() {
  return (
    <div className="w-[77%] m-auto sm:w-[90%] md:w-[90%]" >
      <Navbar />
      <div className="grid mt-[2rem] gap-x-5 grid-cols-[45rem,auto] md:grid-cols-[65%,35%] sm:grid-cols-1" >
        <First />
        <Second />
      </div>
      <Third />
    </div>
  );
}

export default App;
