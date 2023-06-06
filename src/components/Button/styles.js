import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem;

  @media screen and (min-width: 520px) {
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

  @media screen and (min-width: 520px) {
  }
`;
