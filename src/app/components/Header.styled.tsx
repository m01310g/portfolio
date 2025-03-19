import styled from "styled-components";

export const CustomHeader = styled.header<{ $isScrolled: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  padding: 0.5rem 1rem;
  color: ${(props) =>
    props.$isScrolled ? "var(--black-color)" : "var(--green-color)"};
  background-color: ${(props) =>
    props.$isScrolled ? "var(--white-color)" : "transparent"};
  transition: background-color 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: 100;

  @media (max-width: 768px) {
    background-color: var(--white-color);
    color: var(--gray-900);
  }

  h1 {
    font-size: 1.5rem;
    font-family: "DungGeunMo";
    font-weight: 500;
  }
`;
