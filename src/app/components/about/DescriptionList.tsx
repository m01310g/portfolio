import { Description } from "./DescriptionList.styled";

const DescriptionList = () => {
  return (
    <Description>
      <ul>
        <li>
          개발 과정에서 팀원과의 원활한 <span>소통과 협업</span>을 중요하게
          생각합니다.
        </li>
        <li>
          팀원과의 <span>코드 리뷰</span>를 통해 프로젝트를&nbsp;
          <span>더 나은 방향으로 개선</span>하는 것을 중시합니다.
        </li>
        <li>
          항상 코드의 <span>가독성, 재사용성과 유지보수성</span>을 고려하여
          개발하려고 노력합니다.
        </li>
        <li>
          빠른 <span>학습력과 적응력</span>으로 새로운 기술을 익히고, 프로젝트에
          적용해보는 것을 즐깁니다.
        </li>
        <li>
          에러가 발생하거나 예상치 못한 문제 상황에서도&nbsp;
          <span>빠르게 원인을 분석하고 해결책을 찾아 적용합니다.</span>
        </li>
      </ul>
    </Description>
  );
};

export default DescriptionList;
