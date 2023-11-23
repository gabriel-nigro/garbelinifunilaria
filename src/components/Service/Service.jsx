// Components
import Picture from "../Picture/Picture.jsx";

// Style
import "./Service.css"


const Service = ({ title, icon, iconFallback }) => {
  return (
    <div className="px-4-5 py-3">
      <Picture src={icon} fallback={iconFallback} alt={title} className="service-icon" />
      <p className="fs-4 fw-bold">{title}</p>
    </div>
  );
};

export default Service;
