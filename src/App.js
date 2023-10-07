import Features from "./Features/index.js";
import Navbar from "./Header/index.js";
import Home from "./Home/index.js";
import Services from "./Services/index.js"

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <Home />
      </div>
      <div className="py-10">
        <Features />
      </div>
      <div className="py-10">
        <Services />
      </div>
    </div>
  );
}

export default App;
