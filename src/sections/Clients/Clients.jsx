// Components
import { ElfsightWidget } from "react-elfsight-widget"; // Elfsight widget for Google Reviews

// Style
import "./Clients.css"

const Clients = () => {
  return (
    <div className="container" id="clients">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Clientes</p>
        <p className="fs-subtitle mb-6">Depoimentos dos nossos clientes</p>
        <ElfsightWidget widgetId="e4dc8996-3035-4064-9d85-9c2e32860882" lazy />
      </div>
    </div>
  );
};

export default Clients;
