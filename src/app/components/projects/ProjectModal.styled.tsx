import styled from "styled-components";
import { getTagColor } from "../../../../utils/getTagColor";
import { isLightColor } from "../../../../utils/isLightColor";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 16px;
  max-width: 90%;
  max-height: 90%;
  width: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .screenshot {
    height: 100%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  header {
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
  }

  main {
    background-color: var(--white-color);
    padding: 1rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .thumbnail {
      border-radius: 10px;
      border: none;
      aspect-ratio: 16/9;
      object-fit: contain;
    }
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

export const Outline = styled.p`
  font-weight: 500;
  text-align: center;
  line-height: 1.6;
  font-size: var(--font-size-sm);
  white-space: pre-line;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 2.5rem;
    height: 1px;
    background-color: var(--primary-color);
    margin: 1rem auto;
  }

  &::before {
    margin-bottom: 1rem;
  }

  &::after {
    margin-top: 1rem;
  }
`;

export const FeatureList = styled.div`
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

export const ContributionList = styled.div`
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

export const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
    object-fit: cover;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const ImageModalContainer = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;

  .screenshot {
    max-width: 100%;
    max-height: 80vh;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const ScreenshotList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  p {
    font-size: var(--font-size-sm);
    font-weight: 400;
  }
`;
