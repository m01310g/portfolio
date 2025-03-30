import styled from "styled-components";

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
