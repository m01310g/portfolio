import styled from "styled-components";

export const SkillSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "DungGeunMo";
    color: var(--secondary-color);
    padding: 2rem;
  }

  span {
    color: var(--skyblue-color);
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;
