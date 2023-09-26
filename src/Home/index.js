import Button from "../components/Button";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <p>Best Choice For Car Maintenance</p>
          <p>
            CarRepair provides the best service to you with experienced
            mechanics. The best choice to service regularly and keep your
            vehicle in good condition.
          </p>
          <Button />
        </div>
        <div className="col-5">
          <p>images</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
