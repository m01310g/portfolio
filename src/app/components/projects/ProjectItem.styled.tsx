import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: var(--hover-color);
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 1rem;
  gap: 0.5rem;
  cursor: pointer;

  .title,
  .period {
    color: var(--white-color);
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 0 0.6rem;
  border-radius: 10px;
  font-size: var(--font-size-sm);
`;
