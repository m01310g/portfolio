import styled from "styled-components";

export const CustomHeader = styled.header<{ $isScrolled: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) =>
    props.$isScrolled ? "var(--black-color)" : "var(--green-color)"};
  background-color: ${(props) =>
    props.$isScrolled ? "var(--white-color)" : "transparent"};
  transition: background-color 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 2px 10px rgba(220, 220, 220, 0.1)" : "none"};
  z-index: 100;

  @media (max-width: 1024px) {
    background-color: var(--white-color);
    color: var(--black-color);
    box-shadow: 0 2px 10px rgba(220, 220, 220, 0.1);
    padding: 1rem 1.5rem;
  }

  h1 {
    font-size: 1.3rem;
    font-family: var(--font-dunggeunmo);
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .menu-img {
    @media (max-width: 768px) {
      color: var(--black-color);
    }
  }
`;
