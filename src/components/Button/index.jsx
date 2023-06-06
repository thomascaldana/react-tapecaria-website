import { Link, BlueButton } from "./styles";
import WhatsAppLogo from "../../assets/logo-whatsapp.png";

function Button() {
  return (
    <Link>
      <BlueButton>
        <p>Entre em contato</p>
        <img src={WhatsAppLogo} alt="" style={{ width: "50px" }} />
      </BlueButton>
    </Link>
  );
}

export default Button;
