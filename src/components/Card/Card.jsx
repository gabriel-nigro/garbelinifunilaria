import "./Card.css"

const Card = ({ title, icon, description, color }) => {
  return (
    <div className="px-4-5 py-3">
      <div className={`d-inline-flex rounded-icon ${color}`}>
        <img className="icon m-auto" src={icon} alt="logo" />
      </div>
      <div className="row">
        <p className="fs-1 fw-bold">{title}</p>
        <p className="fs-subtitle">{description}</p>
      </div>
    </div>
  );
};

export default Card;
