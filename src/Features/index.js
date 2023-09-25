//import React from 'react'
import UserGear from "../assets/UserGear.svg";
import ClockClockwise from "../assets/ClockClockwise.svg";
import Nut from "../assets/Nut.svg";
import Feature from "./Feature";
import "./Features.css";

const Features = () => {
  return (
    <div className="container">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Why Choose Us?</p>
        <p className="fs-subtitle secondary-text">
          Entrust your vehicle problems to us
        </p>
        <div className="row mt-6">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Feature
              icon={UserGear}
              title="Professional Mechanics"
              description="All of our mechanics are well trained and skilled in solve problems in your car"
              color="green-icon"
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Feature
              icon={Nut}
              title="Modern Equipments"
              description="The tools used by our mechanics are specialist tools with the latest technology"
              color="orange-icon"
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Feature
              icon={ClockClockwise}
              title="24 Hour Service"
              description="All of our mechanics are well trained and skilled in solve problems in your car"
              color="gray-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
