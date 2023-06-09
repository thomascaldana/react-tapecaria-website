import { Container, Menu, Li, A } from "./styles";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Menu>
        <Li>
          <A href="#">Home</A>
        </Li>
        <Li>
          <A href="#Budget">Contato</A>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
