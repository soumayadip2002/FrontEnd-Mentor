import Navbar from "./components/Navbar";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
function App() {
  return (
    <div className="w-[85%] m-auto overflow-hidden" >
      <Navbar />
      <div className="grid mt-[2rem] gap-x-5 grid-cols-[52rem,auto] md:grid-cols-[65%,35%] sm:grid-cols-1" >
        <First />
        <Second />
      </div>
      <Third />
    </div>
  );
}

export default App;
