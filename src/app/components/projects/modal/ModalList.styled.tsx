import styled from "styled-components";

export const ModalListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  ul {
    padding-left: 2rem;
    list-style-type: disc;
    font-weight: 500;
    font-size: var(--font-size-sm);
  }
`;
