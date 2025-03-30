import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: var(--hover-color);
  border-radius: 16px;
  padding: 1rem;
  gap: 0.5rem;
  max-width: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: 500;

  .email {
    cursor: pointer;
  }

  a:hover,
  .email:hover {
    text-decoration: underline;
  }
`;
