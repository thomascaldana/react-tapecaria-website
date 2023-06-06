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

  @media screen and (min-width: 520px) {
  }
`;

export const Images = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem;
  gap: 1rem;
  img {
    width: 17rem;
    max-width: 100%;
  }
  @media screen and (min-width: 520px) {
  }
`;
