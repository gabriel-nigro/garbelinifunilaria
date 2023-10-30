// Styles
import "./Contact.css"

const Contact = ({ src, alt, href, text }) => {
  return (
    <div className="mb-4 d-flex m-auto">
      <img className="contact-icon" src={src} alt={alt} />
      <a href={href} className="contact-item ms-2">
        {text}
      </a>
    </div>
  );
};

export default Contact;
