import Button from "../components/Button";
import "./Home.css";
import upperImage from "../assets/upperImage.png";
import middleImage from "../assets/middleImage.png";
import bottomImage from "../assets/bottomImage.png";

const Home = () => {
  function onClick() {
    window.open(
      process.env.WHATSAPP_API_REDIRECT,
      "_blank",
      "noopener,noreferrer",
    );
  }

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
              <div>
                <img
                  className="upperImage image"
                  src={upperImage}
                  alt="changing oil"
                />
              </div>
              <div>
                <img
                  className="middleImage image"
                  src={middleImage}
                  alt="changing tires"
                />
              </div>
              <div>
                <img
                  className="bottomImage image"
                  src={bottomImage}
                  alt="changing break"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
