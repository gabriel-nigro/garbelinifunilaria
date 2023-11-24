// Assets
import funilariaPng from "../../assets/funilaria.png";
import funilariaWebp from "../../assets/funilaria.webp";
import martelinhoPng from "../../assets/martelinho.png";
import martelinhoWebp from "../../assets/martelinho.webp";
import pinturaPng from "../../assets/pintura.png";
import pinturaWebp from "../../assets/pintura.webp"
import polimentoPng from "../../assets/polimento.png";
import polimentoWebp from "../../assets/polimento.webp";

// Components
import Service from "../../components/Service/Service.jsx";

const Services = () => {
  return (
    <div className="container" id="services">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Nossos Serviços</p>

        <div className="row mb-3 justify-content-around">
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Funilaria" icon={funilariaWebp} iconFallback={funilariaPng} />
          </div>
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Martelinho de Ouro" icon={martelinhoWebp} iconFallback={martelinhoPng} />
          </div>
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Polimento" icon={polimentoWebp} iconFallback={polimentoPng} />
          </div>
          <div className="card col-8 col-sm-7 col-lg-5 me-3-5 mb-3-5">
            <Service title="Pintura" icon={pinturaWebp} iconFallback={pinturaPng} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
