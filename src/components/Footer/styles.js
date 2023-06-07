import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: #373f49;
  padding: 1rem 0.1rem;

  img {
    width: 6rem;
    margin: 0rem 0.5rem 1.2rem 0.5rem;
  }

  Section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 calc(0.2rem + 3vw);
  }

  span {
    margin-top: 5rem;
    text-align: center;
    color: #b3b7bf;
    font-size: 0.8rem;
  }
  @media screen and (min-width: 520px) {
  }
`;

export const Section = styled.section`
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    text-align: left;
    color: #b3b7bd;
    word-spacing: 3px;
    line-height: 20px;
  }
`;
