import styled from "styled-components";

export const ProjectSection = styled.section`
  padding: 0 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
