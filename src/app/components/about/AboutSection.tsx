import Title from "../title/Title";
import { AboutMeSection } from "./AboutSection.styled";
import CertificationList from "./CertificationList";
import ContactList from "./ContactList";
import DescriptionList from "./DescriptionList";

const AboutSection = () => {
  return (
    <AboutMeSection id="About_Me">
      <Title title="About_Me" />
      <DescriptionList />
      <CertificationList />
      <ContactList />
    </AboutMeSection>
  );
};

export default AboutSection;
