const Contact = ({ src, alt, href, text }) => {
  return (
    <div className="mb-4 d-flex m-auto">
      <img className="icon" src={src} alt={alt} />
      <a href={href} className="footer-link ms-2">
        {text}
      </a>
    </div>
  );
};

export default Contact;
