import Budget from "../Budget";
import Header from "../Header";
import Heart from "../Heart";
import Location from "../Location";
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
      <Budget />
      <Location />
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </Container>
  );
}

export default Home;
