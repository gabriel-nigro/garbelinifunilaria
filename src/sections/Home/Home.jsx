// Assets
import bottomImagePng from "../../assets/bottomImage.png";
import bottomImageWebp from "../../assets/bottomImage.webp";
import middleImagePng from "../../assets/middleImage.png";
import middleImageWebp from "../../assets/middleImage.webp";
import upperImagePng from "../../assets/upperImage.png";
import upperImageWebp from "../../assets/upperImage.webp";

// Components
import Button from "../../components/Button/Button.jsx";
import Picture from "../../components/Picture/Picture.jsx";

// Utils 
import { onClick } from "./Home.utils";

// Styles
import "./Home.css";

const Home = () => {

  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col-md-12 col-lg-7">
          <p className="fs-0 fw-bold zindex">
            Melhor escolha em Funilaria e Pintura
          </p>
          <p className="fs-5-5 pb-4-5 m-0 zindex">
            Oferecemos o melhor serviço a você, com profissionais experientes e
            competentes. Somos a opção ideal para garantir a boa condição de
            funilaria e pintura do seu veículo.
          </p>
          <Button text="Contate-nos" onClick={onClick} />
        </div>
        <div className="col-5">
          <div className="graphContent">
            <div className="customElipse">
                <Picture src={upperImageWebp} fallback={upperImagePng} alt="changing oil" className="upperImage image" />
                <Picture src={middleImageWebp} fallback={middleImagePng} alt="changing tires" className="middleImage image" />
                <Picture src={bottomImageWebp} fallback={bottomImagePng} alt="changing break" className="bottomImage image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
