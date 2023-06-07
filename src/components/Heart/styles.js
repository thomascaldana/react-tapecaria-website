import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    color: #aecff9;
    font-weight: 300;
    text-align: center;
    font-family: "Lilita One", cursive;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: calc(0.65rem + 2vw);
    padding: 0 1rem;
    text-align: justify;
    color: #b3b7bd;
    margin-bottom: 0.7rem;
  }

  div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    img {
      width: 80vw;
      max-width: 20rem;
    }

    @media screen and (min-width: 769px) {
      flex-flow: row nowrap;

      img {
        width: 40vw;
        max-width: 25rem;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    h1 {
      font-size: 3rem;
      margin-bottom: calc(1.7rem + 3vw);
    }

    p {
      width: calc(100% - 10vw);
      font-size: 1.3rem;
      margin-bottom: 0.7rem;
      line-height: 2rem;
    }
  }

  @media screen and (min-width: 1025px) {
    h1 {
      font-size: calc(2.9rem + 1vw + 1vh);
      margin-bottom: calc(1.7rem + 3vw);
    }

    p {
      width: calc(80% - 15vw);
      font-size: calc(0.8rem + 1vw);
      margin-bottom: 1.2rem;
      line-height: calc(0.8rem + 2vw + 1vh);
    }
  }
`;
