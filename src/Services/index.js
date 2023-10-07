import "./services.css"
import Service from "./Service.js"
import funilaria from "../assets/funilaria.png"
import martelinho from "../assets/martelinho.png"
import pintura from "../assets/pintura.png"
import polimento from "../assets/polimento.png"

const Services = () => {
    return (
        <div className="container" id="services">
            <div className="text-center text-break col-12">
                <p className="fs-title fw-bold">Our Services</p>
            
                <div className="d-flex flex-row mb-3 justify-content-around">
                    <div className="d-flex card">
                        <Service
                        title="Funilaria"
                        icon={funilaria}
                        />
                    </div>
                    <div className="d-flex card">
                        <Service
                            title="Martelinho de Ouro"
                            icon={martelinho}
                        />
                    </div>
                    <div className="d-flex card card">
                        <Service
                            title="Polimento"
                            icon={polimento}
                        />
                    </div>
                    <div className="d-flex card">
                        <Service
                            title="Pintura"
                            icon={pintura}
                        />
                    </div>
                </div>
            </div> 
        </div>
    )
};

export default Services;