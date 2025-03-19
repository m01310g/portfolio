import styled from "styled-components";

export const IntroSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 3rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  height: 100vh;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 35rem;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }

  p {
    color: var(--blue-color);
    width: 35rem;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: var(--font-size-xl);
    }

    @media (min-width: 768px) {
      text-align: end;
    }
  }

  p:nth-last-child(1) {
    font-size: var(--font-size-xl);
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: var(--font-size-xxl);
    }
  }

  span {
    font-size: var(--font-size-xl);
    color: var(--secondary-color);
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: var(--font-size-xxl);
    }
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;

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
  justify-content: space-between;
  flex-direction: column;
  order: -1;

  h1 {
    font-family: "DungGeunMo";
    padding-top: 5rem;
    color: var(--secondary-color);

    span {
      color: var(--skyblue-color);
    }
  }

  img {
    width: 400px;
    max-width: 400px;
    height: fit-content;

    @media (max-width: 1024px) {
      max-width: 300px;
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    order: 0;
    padding-top: 0;
  }
`;
