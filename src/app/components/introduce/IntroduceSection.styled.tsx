import styled from "styled-components";

export const IntroSection = styled.section`
  width: 100%;
  padding: 5rem 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;

  h1 {
    font-family: "DungGeunMo";
    color: var(--secondary-color);

    span {
      color: var(--skyblue-color);
    }
  }

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }

  .content {
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      text-align: center;
      gap: 1rem;
      p {
        text-align: center;
      }
    }
  }

  .intro-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1024px) {
    align-items: center;
  }

  p {
    color: var(--blue-color);
    width: 35rem;
    text-align: center;

    span {
      color: var(--secondary-color);
      font-size: var(--font-size-xxl);
      font-weight: 700;
    }

    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
      font-size: var(--font-size-xl);
    }

    @media (min-width: 768px) {
      text-align: end;
      font-size: var(--font-size-xl);
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

    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem 0;
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
  height: calc(100vh - 7.7rem);

  img {
    width: 400px;
    max-width: 400px;
    height: fit-content;

    @media (max-width: 1024px) {
      width: 350px;
    }

    @media (max-width: 768px) {
      max-width: 300px;
      width: 300px;
    }
  }

  @media (max-width: 1024px) {
    order: 0;
    height: auto;
  }

  @media (max-width: 768px) {
    order: 0;
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

  :hover {
    background-color: #e8bd69;
  }
`;
