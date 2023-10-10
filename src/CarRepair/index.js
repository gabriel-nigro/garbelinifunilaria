import "./CarRepair.css";
import carRepair from "../assets/carRepair.png";

const CarRepair = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-lg-6"><img className="rounded img-fluid img-car-repair" src={carRepair} alt="car repair"/></div>
            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                <p className="fs-4">About CarRepair</p>
                <p className="carRepair-title fw-bold">We Make Your Car Comfortable</p>
                <p className="fs-6-car-repair">CarRepair is one of the workshops that can serve home service calls. All mechanics at CarRepair already have a long experience, so high quality mechanics to solve all your car problems.</p>
            </div>
        </div>
    </div>
  );
};

export default CarRepair;