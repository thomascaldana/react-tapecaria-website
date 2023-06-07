import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem;

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 1rem 1rem;
  }

  @media screen and (min-width: 1025px) {
  }
`;

export const BlueButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  background: #4176cc;
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Verdana;
  font-weight: 700;
  color: #efeffb;
  cursor: pointer;

  img {
    width: 36px;
    background-size: cover;
    animation: zoomEffect 2s infinite;
  }

  @keyframes zoomEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    gap: 1.5rem;
    padding: 0.5rem 1.5rem;
    margin: 1rem 1rem;
    font-size: 1.2rem;

    img {
      width: 2.8rem;
    }
  }

  @media screen and (min-width: 1025px) {
    gap: 1.8rem;
    padding: 0.7rem 1.8rem;
    margin: 1.2rem 1.2rem;
    font-size: 1.3rem;

    img {
      width: 3rem;
    }

    &:hover {
      box-shadow: 0px 0px 5px 8px rgb(65 118 204 / 15%);
      color: white;
      opacity: 0.85;
    }
  }
`;
