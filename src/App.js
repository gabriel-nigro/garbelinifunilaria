import Features from "./Features/index.js";
import Navbar from "./Header/index.js";
import Home from "./Home/index.js";
import Clients from "./Clients/index.js";
import CarRepair from "./CarRepair/index.js";
import Footer from "./Footer/index.js";
import Services from "./Services/index.js";
import FloatingActionButton from "./components/FloatingActionButton.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <Home />
      </div>
      <div className="py-10 bg-primary-color">
        <CarRepair />
      </div>
      <div className="py-10">
        <Services />
      </div>
      <div className="py-10 bg-white-smoke">
        <Clients />
      </div>
      <div className="py-10">
        <Features />
      </div>
      <div className="py-10 bg-black">
        <Footer />
      </div>
      <FloatingActionButton />
    </div>
  );
}

export default App;
