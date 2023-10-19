import "./CarRepair.css";
import carRepair from "../assets/carRepair.png";

const CarRepair = () => {
  return (
    <div className="container" id="about-us">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <img
            className="rounded img-fluid img-car-repair"
            src={carRepair}
            alt="car repair"
          />
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

export default CarRepair;
