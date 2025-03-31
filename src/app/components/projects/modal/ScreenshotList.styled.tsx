import styled from "styled-components";

export const ScreenshotsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  p {
    font-size: var(--font-size-sm);
    font-weight: 400;
  }
`;

export const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  .image-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 0.3rem;

    img {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      object-fit: cover;

      &:hover {
        transform: scale(1.03);
      }
    }

    p {
      color: var(--hover-color);
      font-size: var(--font-size-sm);
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }
  }
`;
