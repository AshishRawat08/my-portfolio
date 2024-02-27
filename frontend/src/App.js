import About from "./components/About";
import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <div className="absolute w-screen">
          <Navbar />
        </div>
        <div className="min-h-screen">
          <div className="absolute">
            <MainHeader />
          </div>
          <div className="relative">
            <About />
          </div>
          <div className="flex flex-col relative bg-white">
            <Overview />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
