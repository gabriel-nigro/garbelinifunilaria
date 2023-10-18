import Features from "./Features/index.js";
import Navbar from "./Header/index.js";
import Home from "./Home/index.js";
import CarRepair from "./CarRepair/index.js";
import Footer from "./Footer/index.js";
import "./App.css";
import Services from "./Services/index.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <Home />
      </div>
      <div className="py-10 carRepair">
        <CarRepair />
      </div>
      <div className="py-10">
        <Features />
      </div>
      <div className="py-10">
        <Services />
      </div>
      <div className="py-10 footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
