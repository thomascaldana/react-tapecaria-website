import { Link, BlueButton } from "./styles";
import WhatsAppLogo from "../../assets/logo-whatsapp.png";

function Button() {
  return (
    <Link>
      <BlueButton>
        <span>Entre em contato</span>
        <img src={WhatsAppLogo} alt="" />
      </BlueButton>
    </Link>
  );
}

export default Button;
