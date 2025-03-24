import Title from "../title/Title";
import ProjectItem from "./ProjectItem";
import { ProjectSection } from "./ProjectsSection.styled";

const ProjectsSection = () => {
  return (
    <ProjectSection>
      <Title title="Projects" />
      <ProjectItem
        title="어쩌구 저쩌구"
        img="/intro.png"
        tag={["React"]}
        period="2020-2025"
      />
    </ProjectSection>
  );
};

export default ProjectsSection;
