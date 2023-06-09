import Budget from "../Budget";
import Header from "../Header";
import Heart from "../Heart";
import Location from "../Location";
import { Container } from "../Home/styles";
import Jobs from "../Jobs";
import Services from "../Services";
import Footer from "../Footer";

function Home() {
  return (
    <Container id="">
      <Header />
      <Heart />
      <Services />
      <Jobs />
      <Budget id="Budget" />
      <Location />
      <Footer />
    </Container>
  );
}

export default Home;
