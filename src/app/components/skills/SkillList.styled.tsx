import styled from "styled-components";

export const SkillBox = styled.div`
  background-color: var(--hover-color);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  gap: 1rem;

  h2 {
    color: var(--white-color);
    font-family: "DungGeunMo";
  }

  ul {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;

    li {
      background-color: var(--white-color);
      padding: 0 1rem;
      font-size: var(--font-size-base);
      border-radius: 10px;
      font-weight: 600;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
      }

      span {
        color: var(--black-color);
      }
    }
  }
`;
