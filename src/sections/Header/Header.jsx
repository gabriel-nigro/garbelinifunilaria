// Assets
import logoPng from "../../assets/logoSmall.png";
import logoWebp from "../../assets/logoSmall.webp"

// Components
import Item from "../../components/Item/Item.jsx";
import Picture from "../../components/Picture/Picture.jsx";

// Styles
import "./Header.css";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4" data-testid="header">
        <div className="container">
          <a className="navbar-brand navbar-gap" href="/">
            <Picture src={logoWebp} fallback={logoPng} alt="logo" className="d-inline-block align-text-top logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-display="static"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse custom-dropdown"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <Item title="Home" anchor="#home" type="secondary" />
              <Item title="Sobre Nós" anchor="#about-us" type="secondary" />
              <Item
                title="Nossos Serviços"
                anchor="#services"
                type="secondary"
              />
              <Item title="Clientes" anchor="#clients" type="secondary" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
