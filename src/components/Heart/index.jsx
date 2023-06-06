import { Container } from "./styles";
import MainImg from "../../assets/antes-e-depois-main.png";

function Heart() {
  return (
    <Container>
      <h1>Tapeçaria Polyspuma</h1>
      <p>
        A Tapeçaria Polyspuma está a mais de 10 anos no mercado reformando
        sofás, cadeiras, poltronas, etc... trazendo muita qualidade, bom gosto e
        sofisticação aos nossos clientes. Damos uma nova vida ao seu móvel.
      </p>
      <img src={MainImg} alt="" />
    </Container>
  );
}

export default Heart;
