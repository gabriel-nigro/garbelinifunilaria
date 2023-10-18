import { ElfsightWidget } from "react-elfsight-widget";

const Review = () => {
  return (
    <div className="container" id="reviews">
      <div className="text-center text-break">
        <p className="fs-title fw-bold">Our Happy Client</p>
        <p className="fs-subtitle secondary-text mb-6">
          We promise you to give best repair services
        </p>
        <ElfsightWidget widgetId="e4dc8996-3035-4064-9d85-9c2e32860882" lazy />
      </div>
    </div>
  );
};

export default Review;
