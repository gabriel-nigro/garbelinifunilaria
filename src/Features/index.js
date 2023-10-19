//import React from 'react'
import UserGear from "../assets/UserGear.svg";
import ClockClockwise from "../assets/ClockClockwise.svg";
import Nut from "../assets/Nut.svg";
import Card from "./Card";
import "./Features.css";

const Features = () => {
  return (
    <div className="container" id="features">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Por Que Nos Escolher?</p>
        <p className="fs-subtitle">
          Entregue seu veículo aos nossos cuidados profissionais.
        </p>
        <div className="row mt-6">
          <div className="col-md-12 col-lg-4 px-3">
            <Card
              icon={UserGear}
              title="Equipe Qualificada"
              description="Nossa equipe de especialistas é o segredo por trás do nosso sucesso."
              color="green-icon"
            />
          </div>
          <div className="col-md-12 col-lg-4 px-3">
            <Card
              icon={Nut}
              title="Peças de Qualidade"
              description="Garantimos durabilidade com peças e materiais de alto padrão."
              color="orange-icon"
            />
          </div>
          <div className="col-md-12 col-lg-4 px-3">
            <Card
              icon={ClockClockwise}
              title="Funilaria Express"
              description="Realizamos pequenos reparos com eficiência, garantindo a entrega no próprio dia."
              color="gray-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
