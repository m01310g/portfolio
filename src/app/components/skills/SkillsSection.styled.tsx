import styled from "styled-components";

export const SkillSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;

  h1 {
    font-family: "DungGeunMo";
    color: var(--secondary-color);
  }

  span {
    color: var(--skyblue-color);
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;
