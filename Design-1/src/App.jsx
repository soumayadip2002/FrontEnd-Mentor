import First from "./components/First";
import Second from "./components/Second";
function App() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center sm:mt-[-2.7rem]">
        <div className="w-auto flex shadow-2xl gap-0 rounded-3xl md:grid xs:grid sm:grid sm:w-[100%] sm:m-auto">
          <First />
          <Second />
        </div>
      </div>
      <p className="text-center mt-[-2rem]">created by <small className="text-base text-red-600">© soumayadip saha</small></p>
    </>
  );
}

export default App;
