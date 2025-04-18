import styled from "styled-components";

export const SkillSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;
  max-width: 50rem;
  width: 100%;
  align-self: center;
  scroll-margin-top: 4.5rem;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 40rem;
  }
`;
