import AboutContent from "./AboutContent";
import { CertificationItem } from "./CertificationList.styled";

const CertificationList = () => {
  return (
    <AboutContent title="🏅 Certifications">
      <CertificationItem>
        <h3>정보처리기사</h3>
        <p>한국산업인력공단, 2024년 9월 취득</p>
      </CertificationItem>
    </AboutContent>
  );
};

export default CertificationList;
