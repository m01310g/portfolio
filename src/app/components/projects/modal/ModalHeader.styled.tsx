import styled from "styled-components";
import { getTagColor } from "../../../../../utils/getTagColor";
import { isLightColor } from "../../../../../utils/isLightColor";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--white-color);
  align-items: center;
  background-color: var(--hover-color);
  padding: 1.5rem 2rem;

  .period {
    color: var(--period-color);
    line-height: 1;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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
`;

export const UrlList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;

  .deploy-url {
    background-color: var(--black-color);
    padding: 0 0.8rem;
    border-radius: 32px;
    font-size: var(--font-size-sm);
    font-weight: 400;
  }
`;
