import Button from "../Button";
import Header from "../Header";
import Heart from "../Heart";
import { Container } from "../Home/styles";

function Home() {
  return (
    <Container>
      <Header />
      <Heart />
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </Container>
  );
}

export default Home;
