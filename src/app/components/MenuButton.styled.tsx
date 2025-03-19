import styled from "styled-components";

export const Button = styled.button<{
  $isActive: boolean;
  $isScrolled: boolean;
}>`
  color: var(--secondary-color);
  font-family: "DungGeunMo";
  background-color: ${(props) =>
    props.$isActive
      ? props.$isScrolled
        ? "rgb(0,0,0,0.05)"
        : "var(--active-color)"
      : "transparent"};
  cursor: pointer;
  border: none;
  padding: 1rem 1rem;

  span {
    color: var(--skyblue-color);
  }

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: ${(props) =>
      props.$isActive ? "var(--font-size-lg)" : "var(--font-size-base)"};
  }
`;
