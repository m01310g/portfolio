import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: var(--hover-color);
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  .title {
    color: var(--white-color);
  }

  .period {
    color: var(--period-color);
  }

  .project-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ImageBox = styled.div`
  aspect-ratio: 16/9;
  overflow: hidden;
  align-items: center;
`;

export const ContentBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
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
