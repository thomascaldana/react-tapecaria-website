import styled from "styled-components";

export const Container = styled.header`
  background: #373f49;
  top: 0;
  padding: 10px 20px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: calc(5rem + 5%);
  }

  @media screen and (min-width: 520px) {
    padding: 10px calc(3rem + 2vw) 10px calc(3rem + 2vw);
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: space-between;
  gap: calc(0.9rem + 3vw);
`;

export const Li = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
  position: relative;

  &::after {
    content: "";
    height: 4px;
    width: ${(props) => (props["is-active"] === "true" ? "100%" : "0%")};
    background-color: #566981;
    position: absolute;
    bottom: -10px;
    transition: width 0.5s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`;
