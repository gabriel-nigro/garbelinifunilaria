// Components
import Navbar from "./sections/Header/Header.jsx";
import Home from "./sections/Home/Home.jsx";
import Clients from "./sections/Clients/Clients.jsx";
import AboutUs from "./sections/AboutUs/AboutUs.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import Services from "./sections/Services/Services.jsx";
import FloatingActionButton from "./components/FloatinActionButton/FloatingActionButton.jsx";
import Features from "./sections/Features/Features.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <Home />
      </div>
      <div className="py-10 bg-primary-color">
        <AboutUs />
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
