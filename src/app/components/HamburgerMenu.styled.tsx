import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  .menu-img {
    color: var(--black-color);

    @media (min-width: 768px) {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }
`;
