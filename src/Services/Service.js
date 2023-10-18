const Service = ({ title, icon }) => {
  return (
    <div className="px-4-5 py-3">
      <img src={icon} alt="Service Icon" />
      <p className="fs-4 fw-bold primary-text">{title}</p>
    </div>
  );
};

export default Service;
