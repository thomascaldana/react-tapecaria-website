import { Link, BlueButton } from "./styles";
import WhatsAppLogo from "../../assets/logo-whatsapp.png";

function Button() {
  return (
    <Link
      href="https://wa.me/5515997205991?text=Estava%20no%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento..."
      target="_blank"
    >
      <BlueButton>
        <span>Entre em contato</span>
        <img src={WhatsAppLogo} alt="" />
      </BlueButton>
    </Link>
  );
}

export default Button;
