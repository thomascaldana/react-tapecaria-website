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
    font-size: 1rem;
    padding: 0 1rem;
    text-align: justify;
    color: #b3b7bd;
    margin-bottom: 0.7rem;
  }

  img {
    max-width: 80vw;
    box-shadow: 0 0 10px rgba(50, 50, 50, 0.2);
  }
`;
