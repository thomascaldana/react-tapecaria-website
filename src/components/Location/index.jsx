import Button from "../Button/index";
import { Container } from "./styles";

function Location() {
  return (
    <Container>
      <h3>Localização</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.032582514816!2d-47.44084736436464!3d-23.534149521424315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf61dd3503a9f9%3A0x557e2150ed46002f!2sR.%20Manoel%20Mess%C3%ADas%20Furquim%2C%20163%20-%20Jardim%20Antonio%20Rodrigues%20e%20Rodrigues%2C%20Votorantim%20-%20SP%2C%2018111-420!5e0!3m2!1sen!2sbr!4v1686098413852!5m2!1sen!2sbr"
        allowfullscreen
      ></iframe>
    </Container>
  );
}

export default Location;
