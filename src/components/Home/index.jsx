import Header from "../Header";
import Heart from "../Heart";
import { Container } from "../Home/styles";
import Jobs from "../Jobs";
import Services from "../Services";

function Home() {
  return (
    <Container>
      <Header />
      <Heart />
      <Services />
      <Jobs />
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </Container>
  );
}

export default Home;
