import styled from "styled-components";

export const Description = styled.div`
  color: var(--white-color);
  align-items: center;
  display: flex;
  background-color: var(--hover-color);
  padding: 1rem 2rem;
  border-radius: 16px;

  ul {
    list-style-type: disc;

    li {
      list-style-position: inside;

      span {
        color: var(--purple-color);
        font-size: var(--font-size-lg);
        font-weight: 700;
      }
    }
  }
`;
