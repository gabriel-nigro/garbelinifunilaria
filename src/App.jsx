
import Navbar from "./Header/index.jsx";
import Home from "./Home/index.jsx";
import Clients from "./Clients/index.jsx";
import CarRepair from "./CarRepair/index.jsx";
import Footer from "./Footer/index.jsx";
import Services from "./Services/index.jsx";
import FloatingActionButton from "./components/FloatingActionButton.jsx";
import Features from "./Features/index.jsx";

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
