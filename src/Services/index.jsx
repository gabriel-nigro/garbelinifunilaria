import Service from "./Service.jsx";
import funilaria from "../assets/funilaria.png";
import martelinho from "../assets/martelinho.png";
import pintura from "../assets/pintura.png";
import polimento from "../assets/polimento.png";

const Services = () => {
  return (
    <div className="container" id="services">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Nossos Serviços</p>

        <div className="row mb-3 justify-content-around">
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Funilaria" icon={funilaria} />
          </div>
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Martelinho de Ouro" icon={martelinho} />
          </div>
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Polimento" icon={polimento} />
          </div>
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Pintura" icon={pintura} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
