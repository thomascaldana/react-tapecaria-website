import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: #373f49;
  padding: 1rem 0.1rem;

  h2 {
    font-size: 1.3rem;
    color: rgb(174, 207, 249);
    font-weight: 300;
    text-align: center;
    font-family: "Lilita One", cursive;
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

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1025px) {
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.8rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;

export const Section = styled.section`
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    text-align: left;
    color: #b3b7bd;
    word-spacing: 3px;
    line-height: 20px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    h3 {
      margin-bottom: 0.7rem;
      font-size: 1.4rem;
    }

    p {
      font-size: 1.1rem;

      line-height: 1.8rem;
    }
  }

  @media screen and (min-width: 1025px) {
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;

      line-height: 1.9rem;
    }
  }
`;
