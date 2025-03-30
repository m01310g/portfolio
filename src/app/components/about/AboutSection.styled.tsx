import styled from "styled-components";

export const AboutMeSection = styled.section`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
  width: 100%;
  align-self: center;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    max-width: 40rem;
  }
`;
