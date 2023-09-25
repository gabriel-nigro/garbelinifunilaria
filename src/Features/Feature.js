const Feature = ({ title, icon, description, color }) => {
  return (
    <div>
      <div className={`d-inline-flex rounded-icon ${color}`}>
        <img className="icon m-auto" src={icon} alt="logo" />
      </div>
      <div className="row">
        <p className="fs-1 fw-bold">{title}</p>
        <p className="fs-7 fs-subtitle">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
