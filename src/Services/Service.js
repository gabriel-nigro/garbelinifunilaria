const Service = ({title, icon}) => {
    return (
        <div className="px-5 py-5 col-12">
            <div>
                <img src={icon} alt="Service Icon" />
            </div>
            <div className="row">
                <p className="fs-3 fw-bold text-break">{title}</p>
            </div>
        </div>
    );
};

export default Service