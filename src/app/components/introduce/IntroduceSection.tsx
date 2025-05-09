"use client";

import Title from "../title/Title";
import {
  ContentWrapper,
  DetailWrapper,
  ImageWrapper,
  IntroSection,
  MoreButton,
} from "./IntroduceSection.styled";
import Image from "next/image";

const IntroduceSection = () => {
  const handleMoreButtonClick = () => {
    document.querySelector("#Skills ")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IntroSection id="Introduce">
      <Title title="Introduce" />
      <div className="intro-container">
        <div className="content">
          <ContentWrapper>
            <p>
              매일 끊임 없이 <span>도전</span>하고 <span>성장</span>하며
            </p>
            <p>
              더 나은 <span>사용자 경험</span>을 만드는 프론트엔드 개발자
            </p>
            <p>김민경입니다.</p>
          </ContentWrapper>
          <DetailWrapper>
            <div>
              개발자의 가치는 <span>소통 능력</span>에서 나온다고 생각합니다. 더
              좋은 서비스를 만들기 위해 동료와&nbsp;
              <span>적극적으로 소통하고 협업</span>하며 고민합니다. 새로운
              기술이 끊임 없이 발전하는 환경에서도 <span>꾸준한 학습</span>과
              <br />
              <span>깊이 있게 탐구하는 자세</span>를 통해 더 나은 서비스를
              만들겠습니다.
              <br />
            </div>
          </DetailWrapper>
          <MoreButton onClick={handleMoreButtonClick}>더 알아보기</MoreButton>
        </div>
        <ImageWrapper>
          <Image
            src={"/intro.webp"}
            width={400}
            height={400}
            alt="인사하는 이모지"
            priority
          />
        </ImageWrapper>
      </div>
    </IntroSection>
  );
};

export default IntroduceSection;
