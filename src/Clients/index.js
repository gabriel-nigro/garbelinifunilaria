import { ElfsightWidget } from "react-elfsight-widget";

const Clients = () => {
  return (
    <div className="container" id="clients">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Clientes</p>
        <p className="fs-subtitle mb-6">Depoimentos dos nossos clientes</p>
        <ElfsightWidget widgetId={process.env.WIDGET_ID} lazy />
      </div>
    </div>
  );
};

export default Clients;
