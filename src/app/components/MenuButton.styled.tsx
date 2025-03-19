import styled from "styled-components";

export const Button = styled.button`
  color: var(--secondary-color);
  font-family: "DungGeunMo";
  background-color: transparent;
  cursor: pointer;
  border: none;

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

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: var(--font-size-sm);
  }

  @media (min-width: 1024px) {
    font-size: var(--font-size-base);
  }
`;
