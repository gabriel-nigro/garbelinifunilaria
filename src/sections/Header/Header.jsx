import "./Header.css";
import Item from "../../components/Item/Item.jsx";
import logo from "../../assets/logo.png"; // Tell webpack this JS file uses this image

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <a className="navbar-brand navbar-gap" href="http">
            <img
              src={logo}
              alt="Logo"
              width="200"
              height="65"
              className="d-inline-block align-text-top"
            />
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
