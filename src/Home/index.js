import Button from "../components/Button";
import "./Home.css"
import upperImage from "../assets/upperImage.png";
import middleImage from "../assets/middleImage.png";
import bottomImage from "../assets/bottomImage.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <p className="fs-0 fw-bold zindex">Best Choice For Car Maintenance</p>
          <p className="fs-6 customPadding zindex">
            CarRepair provides the best service to you with experienced
            mechanics. The best choice to service regularly and keep your
            vehicle in good condition.
          </p>
          <Button />
        </div>
        <div className="col-5">
          <div className="graphContent">
            <div className="customElipse">
              <div><img className="upperImage image" src={upperImage} alt="changing oil"/></div>
              <div><img className="middleImage image" src={middleImage} alt="changing tires" /></div>
              <div><img className="bottomImage image" src={bottomImage} alt="changing break" /></div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Home;
