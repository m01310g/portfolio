import styled from "styled-components";

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

  .arrow-left {
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 1rem;
    cursor: pointer;
  }

  .arrow-right {
    background-color: transparent;
    position: absolute;
    top: 50%;
    right: 1rem;
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 16px;
  max-width: 70%;
  max-height: 90%;
  width: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  .screenshot {
    height: 100%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

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
