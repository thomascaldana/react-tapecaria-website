import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem;

  h2 {
    font-size: 1.5rem;
    color: #aecff9;
    font-weight: 300;
    text-align: center;
    font-family: "Lilita One", cursive;
    margin: 0.9rem 0;
  }
  @media screen and (min-width: 481px) and (max-width: 1024px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1025px) {
    h2 {
      font-size: 2.65rem;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 0.3rem;
  gap: 1rem;

  img {
    width: 17rem;
    max-width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    img {
      width: calc(20rem + 20vw);
      max-width: 100%;
    }
  }

  @media screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 0.7fr 0.7fr;

    img {
      width: 44rem;
      height: 19rem;
      max-width: 100%;
    }
  }
`;
