// Styles
import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="btn button-primary py-3 px-4-5"
      onClick={onClick}
      data-testid="button"
    >
      {text}
    </button>
  );
};

export default Button;
