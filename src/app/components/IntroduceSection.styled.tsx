import styled from "styled-components";

export const IntroSection = styled.section`
  width: 100%;
  padding: 5rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }

  .intro-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 35rem;
    justify-content: flex-start;
    height: calc(100vh - 8rem);
    gap: 1remdhQ;

    @media (max-width: 768px) {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
  }

  h1 {
    font-family: "DungGeunMo";
    color: var(--secondary-color);
    padding: 0 2rem;

    span {
      color: var(--skyblue-color);
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }

  p {
    color: var(--blue-color);
    width: 35rem;
    text-align: center;

    @media (min-width: 768px) {
      text-align: end;
      font-size: var(--font-size-xl);
    }
  }

  p:nth-last-child(1) {
    font-size: var(--font-size-xl);
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }

  span {
    font-size: var(--font-size-xl);
    color: var(--secondary-color);
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem 0 5rem 0;

  div {
    color: var(--orange-color);
    width: 30rem;
    text-align: end;
  }

  span {
    color: var(--purple-color);
    font-weight: 700;
    font-size: var(--font-size-lg);
    background-color: var(--hover-color);
    padding: 0.3rem;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  order: -1;

  img {
    width: 400px;
    max-width: 400px;
    height: fit-content;

    @media (max-width: 768px) {
      max-width: 300px;
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    order: 0;
    padding-top: 0;
  }
`;

export const MoreButton = styled.button`
  width: 10rem;
  height: 3rem;
  padding: 1rem;
  align-self: center;
  justify-self: center;
  border-radius: 30px;
  font-family: "DungGeunMo";
  background-color: var(--yellow-color);
  cursor: pointer;

  &:hover {
    background-color: #e8bd69;
  }

  @media (max-width: 768px) {
    align-self: flex-end;
    order: 1;
  }
`;
