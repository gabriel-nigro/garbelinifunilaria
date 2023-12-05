// Assets
import carRepairLargeWebp from "../../assets/carRepairLarge.webp"
import carRepairMediumWebp from "../../assets/carRepairMedium.webp"
import carRepairSmallWebp from "../../assets/carRepairSmall.webp"
import carRepairExtraSmallWebp from "../../assets/carRepairExtraSmall.webp"
import carRepairSmallPng from "../../assets/carRepairSmall.png";

// Styles
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container" id="about-us">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <picture>
            <source media="(max-width:460px)" width="325" height="235" srcSet={carRepairExtraSmallWebp} />
            <source media="(max-width:750px)" width="450" height="325" srcSet={carRepairSmallWebp} />
            <source media="(max-width:991px)" width="625" height="452" srcSet={carRepairLargeWebp} />
            <source media="(max-width:1200px)" width="450" height="325" srcSet={carRepairSmallWebp} />
            <source media="(max-width:1399px)" width="525" height="379" srcSet={carRepairMediumWebp} type='image/webp' />
            <source media="(min-width:1400px)" width="625" height="452" srcSet={carRepairLargeWebp} type='image/webp' />
            <img src={carRepairSmallPng} alt="car-repair" className="rounded img-car-repair" />
          </picture>
        </div>
        <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
          <p className="fs-4">Sobre nós</p>
          <p className="carRepair-title fw-bold">Excelência Desde 1991</p>
          <p className="fs-6-car-repair"> Há três décadas, a Funilaria Garbelini tem sido sinônimo de qualidade na Vila Prudente. Fundada e gerida pelos irmãos Antônio e Alberto, nossa equipe é composta por profissionais altamente capacitados e dedicados que dominam a arte da funilaria e pintura.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
