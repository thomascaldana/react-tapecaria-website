import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem;
  background: #373f49;
  padding: 1rem 0.1rem;
  border-radius: 0.5rem;

  h3 {
    font-size: 1.2rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    h3 {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1025px) {
    h3 {
      margin-top: 1.5rem;
      font-size: 1.5rem;
    }
  }
`;
