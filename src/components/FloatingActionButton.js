import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./FloatingActionButton.css";

const FloatingActionButton = () => {
  const component = {
    position: {
      bottom: 0,
      right: 0,
    },
  };

  const handleOnClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Fab
      style={component.position}
      event="hover"
      icon={<FontAwesomeIcon icon={faMessage} />}
      alwaysShowTitle={true}
    >
      <Action
        onClick={() =>
          handleOnClick(
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
          handleOnClick("https://www.facebook.com/garbelinifunilaria")
        }
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="fab-background fab-facebook"
        />
      </Action>
      <Action
        onClick={() =>
          handleOnClick("https://www.instagram.com/garbelinifunilaria/")
        }
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="fab-background fab-black"
        />
      </Action>
      <Action onClick={() => handleOnClick("tel:+551120212289")}>
        <FontAwesomeIcon icon={faPhone} className="fab-background fab-black" />
      </Action>
    </Fab>
  );
};

export default FloatingActionButton;
