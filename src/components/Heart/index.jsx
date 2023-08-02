import { Container } from "./styles";
import MainImg1 from "../../assets/antes-e-depois-main.png";
import MainImg2 from "../../assets/antes-e-depois-main2.png";
import Button from "../Button";

function Heart() {
  return (
    <Container>
      <h1>Tapeçaria Polyspuma</h1>
      <p>
        A Tapeçaria Polyspuma está há mais de 30 anos no mercado reformando
        sofás, cadeiras, poltronas, além de fabricar seu sofá personalizado sob
        medida, trazendo muita qualidade, bom gosto e sofisticação aos nossos
        clientes. Damos uma nova vida ao seu móvel.
      </p>
      <Button />
      <div>
        <img src={MainImg1} alt="foto de antes" />
        <img src={MainImg2} alt="foto de depois" />
      </div>
    </Container>
  );
}

export default Heart;
