// Assets
import carRepairWebp from "../../assets/carRepair.webp"
import carRepairPng from "../../assets/carRepair.png";

// Components
import Picture from "../../components/Picture/Picture.jsx";

// Styles
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container" id="about-us">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Picture src={carRepairWebp} fallback={carRepairPng} alt="car-repair" className="rounded img-fluid img-car-repair" />
        </div>
        <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
          <p className="fs-4">Sobre nós</p>
          <p className="carRepair-title fw-bold">Excelência Desde 1991</p>
          <p className="fs-6-car-repair">
            Há três décadas, a Funilaria Garbelini tem sido sinônimo de
            qualidade na Vila Prudente. Fundada e gerida pelos irmãos Antônio e
            Alberto, nossa equipe é composta por profissionais altamente
            capacitados e dedicados que dominam a arte da funilaria e pintura.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
