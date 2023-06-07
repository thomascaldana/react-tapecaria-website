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

  @media screen and (min-width: 520px) {
  }
`;
