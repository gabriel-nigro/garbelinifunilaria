import "./Footer.css";
import Map from "./Map.jsx";
import Message from "../assets/message.svg";
import Call from "../assets/call.svg";
import MapPin from "../assets/mapPin.svg";
import Contact from "./Contact.jsx";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6 px-1">
          <p className="fs-2 mb-4 text-center text-lg-start">Contatos</p>
          <div className="d-flex d-lg-block flex-column align-items-start">
            <Contact
              src={Message}
              alt="message"
              href="mailto:garbelinifunilaria@yahoo.com.br"
              text="garbelinifunilaria@yahoo.com.br"
            />
            <Contact
              src={Call}
              alt="call"
              href="tel:+551120212289"
              text="+55 11 2021-2289"
            />
            <Contact
              src={MapPin}
              alt="mapPin"
              href="https://maps.app.goo.gl/wUsu2Cc26aS3PFny7"
              text="Rua José Zappi, 524 - Vila Prudente"
            />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 px-1">
          <p className="fs-2 mb-4 text-center text-lg-start">Localização</p>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Footer;
