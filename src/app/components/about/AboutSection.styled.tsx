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
  }
`;

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

export const CertificationItem = styled.div`
  background-color: var(--hover-color);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 35rem;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;

  h3 {
    color: var(--white-color);
    line-height: 1;
  }

  p {
    color: var(--period-color);
    line-height: 1;
    font-weight: 500;
    font-size: var(--font-size-sm);
    align-self: center;
  }
`;
