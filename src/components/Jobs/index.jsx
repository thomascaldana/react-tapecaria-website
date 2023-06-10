import { Container, Images } from "../Jobs/styles";
import {} from "./styles";
import trabalho1 from "../../assets/trabalho1.jpg";
import trabalho2 from "../../assets/trabalho2.jpg";
import trabalho3 from "../../assets/trabalho3.jpg";
import trabalho4 from "../../assets/trabalho4.jpg";
import trabalho5 from "../../assets/trabalho5.jpg";
import trabalho6 from "../../assets/trabalho6.jpg";
import trabalho7 from "../../assets/trabalho7.jpg";
import trabalho8 from "../../assets/trabalho8.jpg";
import trabalho9 from "../../assets/trabalho9.jpg";
import trabalho10 from "../../assets/trabalho10.jpg";

function Jobs() {
  return (
    <Container>
      <h2>Nossos Trabalhos</h2>
      <Images>
        <img src={trabalho1} alt="movel reformado" />
        <img src={trabalho2} alt="movel reformado" />
        <img src={trabalho3} alt="movel reformado" />
        <img src={trabalho4} alt="movel reformado" />
        <img src={trabalho5} alt="movel reformado" />
        <img src={trabalho6} alt="movel reformado" />
        <img src={trabalho7} alt="movel reformado" />
        <img src={trabalho8} alt="movel reformado" />
        <img src={trabalho9} alt="movel reformado" />
        <img src={trabalho10} alt="movel reformado" />
      </Images>
    </Container>
  );
}

export default Jobs;
