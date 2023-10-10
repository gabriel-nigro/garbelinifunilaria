import "./Footer.css";
import SimpleMap from "./map.js";

const Footer = () => {
  return (
    <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-3 footer-card px-1 d-flex flex-column align-items-start">
                <p className="fs-2 mb-4">CarRepair</p>
                <p className="footer-subtitle mb-2">Copyright © 2021 Luthfirzkyy</p>
                <p className="footer-subtitle">All rights reserved</p>
            </div>
            <div className="col-3 footer-card px-1 d-flex flex-column align-items-start">
                <p className="fs-2 mb-4">Quick Links</p>
                <a href="http" className="footer-link mb-2">About us</a>
                <a href="http" className="footer-link mb-2">Our services</a>
                <a href="http" className="footer-link mb-2">Booking</a>
                <a href="http" className="footer-link mb-2">News</a>
                <a href="http" className="footer-link mb-2">Contact us</a>
            </div>
            <div className="col-3 footer-card px-1 d-flex flex-column align-items-start">
                <p className="fs-2 mb-4">Maps</p>
                <SimpleMap />
            </div>
            <div className="col-3 footer-card px-1 d-flex flex-column align-items-start">
                <p className="fs-2 mb-4">Reach us</p>
                <div className="mb-4 d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.9393 3C18.2803 3 19.5703 3.53 20.5193 4.481C21.4693 5.43 22.0003 6.71 22.0003 8.05V15.95C22.0003 18.74 19.7303 21 16.9393 21H7.06031C4.26931 21 2.00031 18.74 2.00031 15.95V8.05C2.00031 5.26 4.25931 3 7.06031 3H16.9393ZM18.0703 8.2C17.8603 8.189 17.6603 8.26 17.5093 8.4L13.0003 12C12.4203 12.481 11.5893 12.481 11.0003 12L6.50031 8.4C6.18931 8.17 5.75931 8.2 5.50031 8.47C5.23031 8.74 5.2003 9.17 5.42931 9.47L5.56031 9.6L10.1103 13.15C10.6703 13.59 11.3493 13.83 12.0603 13.83C12.7693 13.83 13.4603 13.59 14.0193 13.15L18.5303 9.54L18.6103 9.46C18.8493 9.17 18.8493 8.75 18.5993 8.46C18.4603 8.311 18.2693 8.22 18.0703 8.2Z" fill="#1E69B8"/>
                    </svg>
                    <p className="footer-link ms-2">Carepair@luthfi.id</p>
                </div>
                <div className="mb-4 d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" fill="#1E69B8"/>
                    </svg>
                    <p className="footer-link ms-2">+55 11 20212289</p>
                </div>
                <div className="mb-4 d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.9993 1.5C9.81203 1.5026 7.71512 2.37262 6.1685 3.91924C4.62189 5.46585 3.75186 7.56276 3.74927 9.75C3.74927 16.8091 11.2493 22.1411 11.5686 22.3645C11.6949 22.4527 11.8452 22.5 11.9993 22.5C12.1533 22.5 12.3036 22.4527 12.4299 22.3645C12.7493 22.1411 20.2493 16.8091 20.2493 9.75C20.2467 7.56276 19.3766 5.46585 17.83 3.91924C16.2834 2.37262 14.1865 1.50259 11.9993 1.5ZM11.9998 6.75027C12.5932 6.75027 13.1732 6.92622 13.6665 7.25586C14.1599 7.58551 14.5444 8.05404 14.7715 8.60222C14.9985 9.1504 15.0579 9.7536 14.9422 10.3355C14.8264 10.9175 14.5407 11.452 14.1211 11.8716C13.7016 12.2912 13.167 12.5769 12.5851 12.6926C12.0031 12.8084 11.3999 12.749 10.8518 12.5219C10.3036 12.2948 9.83505 11.9103 9.50541 11.417C9.17576 10.9236 8.99982 10.3436 8.99982 9.75027C8.99981 9.3563 9.07739 8.96619 9.22816 8.60221C9.37892 8.23823 9.59989 7.9075 9.87847 7.62893C10.157 7.35035 10.4878 7.12937 10.8518 6.97861C11.2157 6.82785 11.6058 6.75026 11.9998 6.75027Z" fill="#1E69B8"/>
                    </svg>
                    <p className="footer-link ms-2">Rua José Zappi, 524 - Vila Prudente</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;