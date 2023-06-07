import { Container, Section } from "./styles";

function Footer() {
  return (
    <Container>
      <h2>Tapeçaria Polyspuma</h2>
      <Section>
        <div>
          <h3>Contato</h3>
          <p>
            Celular: <br />
            (15) 99720-5991
          </p>

          <p>
            WhatsApp: <br />
            (15) 99720-5991
          </p>
        </div>

        <div>
          <h3>Endereço</h3>
          <p>
            R. Manoel Messías Furquim, 163 - Jardim Antonio Rodrigues,
            Votorantim - SP, 18111-420
          </p>
        </div>
      </Section>
      <span>
        © All rigths reserved. <br /> Developed by Thomás C.
      </span>
    </Container>
  );
}

export default Footer;
