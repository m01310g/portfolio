import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  .menu-img {
    color: var(--black-color);

    @media (min-width: 1025px) {
      display: none;
    }
  }

  :hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }
`;

export const Menu = styled.div<{ $isMenuOpen: boolean }>`
  width: 100vw;
  background-color: var(--white-color);
  position: fixed;
  top: 4rem;
  left: 0;
  height: 100vh;
  display: ${(props) => (props.$isMenuOpen ? "flex" : "none")};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem;
  z-index: 99;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const MenuItem = styled.li<{ $isActive: boolean }>`
  list-style: none;
  padding: 0.5rem 1.5rem;
  border-radius: 80px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? "rgba(0, 0, 0, 0.05)" : ""};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  a {
    font-size: var(--font-size-xl);
    font-family: var(--font-dunggeunmo);
    font-weight: 400;
    color: var(--secondary-color);

    span {
      color: var(--skyblue-color);
    }
  }
`;
