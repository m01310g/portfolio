import styled from "styled-components";

export const ImageModalContainer = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .caption {
    color: var(--white-color);
    text-align: center;
  }

  .screenshot {
    max-width: 100%;
    max-height: 80vh;
    min-width: 15rem;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .arrow-left {
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: -2rem;
    cursor: pointer;
  }

  .arrow-right {
    background-color: transparent;
    position: absolute;
    top: 50%;
    right: -2rem;
    cursor: pointer;
  }
`;
