// Assets
import { 
  faPhone, 
  faMessage 
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

// Components
import { Fab, Action } from "react-tiny-fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { onClick } from "./FloatingActionButton.utils";

// Styles
import "./FloatingActionButton.css";
import "react-tiny-fab/dist/styles.css";

const FloatingActionButton = () => {
  const component = {
    position: {
      bottom: 0,
      right: 0,
    },
  };


  return (
    <Fab
      style={component.position}
      event="click"
      icon={<FontAwesomeIcon icon={faMessage} />}
      alwaysShowTitle={true}
    >
      <Action
        onClick={() =>
          onClick(
            "https://api.whatsapp.com/send?phone=551120212289&text=Ol%C3%A1!%0AGostaria%20de%20realizar%20um%20or%C3%A7amento%20:)",
          )
        }
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="fab-background fab-whatsapp"
        />
      </Action>
      <Action
        onClick={() =>
          onClick("https://www.facebook.com/garbelinifunilaria")
        }
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="fab-background fab-facebook"
        />
      </Action>
      <Action
        onClick={() =>
          onClick("https://www.instagram.com/garbelinifunilaria/")
        }
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="fab-background fab-black"
        />
      </Action>
      <Action onClick={() => onClick("tel:+551120212289")}>
        <FontAwesomeIcon icon={faPhone} className="fab-background fab-black" />
      </Action>
    </Fab>
  );
};

export default FloatingActionButton;
