import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    color: #aecff9;
    font-weight: 300;
    text-align: center;
    font-family: "Lilita One", cursive;
    margin: 1.5rem 0;
  }

  p {
    font-size: calc(0.65rem + 2vw);
    padding: 0 1rem;
    text-align: justify;
    color: #b3b7bd;
    margin-bottom: 0.7rem;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    h2 {
      font-size: 2rem;
      margin-bottom: calc(0.3rem + 3vw);
      margin-top: calc(1.8rem + 3vw);
    }

    p {
      width: calc(100% - 10vw);
      font-size: 1.3rem;
      margin-bottom: 0.7rem;
      line-height: 2rem;
    }
  }

  @media screen and (min-width: 1025px) {
    h2 {
      font-size: calc(1.3rem + 1vw + 1vh);
      margin-bottom: 2vw;
      margin-top: calc(1.8rem + 3vw);
    }

    p {
      width: calc(80% - 15vw);
      font-size: calc(0.8rem + 1vw);
      margin-bottom: 1.2rem;
      line-height: calc(0.8rem + 2vw + 1vh);
    }
  }
`;
