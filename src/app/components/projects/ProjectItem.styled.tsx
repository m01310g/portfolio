import styled from "styled-components";
import { getTagColor } from "../../../../utils/getTagColor";
import { isLightColor } from "../../../../utils/isLightColor";

export const ItemContainer = styled.div`
  background-color: var(--hover-color);
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  .project-image {
    object-fit: contain;
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
  gap: 0.6rem;

  .title {
    color: var(--white-color);
    line-height: 1;
  }

  .period {
    color: var(--period-color);
    font-size: var(--font-size-sm);
    font-weight: 500;
    line-height: 1;
  }

  .description {
    color: var(--white-color);
    font-size: var(--font-size-sm);
    line-height: 1;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Tag = styled.span<{ $type: string }>`
  background-color: ${({ $type }) => getTagColor($type)};
  color: ${({ $type }) =>
    isLightColor(getTagColor($type))
      ? "var(--black-color)"
      : "var(--white-color)"};
  padding: 0 0.6rem;
  border-radius: 10px;
  font-size: var(--font-size-sm);
  font-weight: 600;
`;
