import Title from "../title/Title";
import ProjectItem from "./ProjectItem";
import { ProjectGrid, ProjectSection } from "./ProjectsSection.styled";

const ProjectsSection = () => {
  return (
    <ProjectSection>
      <Title title="Projects" />
      <ProjectGrid>
        <ProjectItem
          title="어쩌구 저쩌구"
          img="/intro.png"
          tag={["React"]}
          period="2020-2025"
        />
        <ProjectItem
          title="어쩌구 저쩌구"
          img="/intro.png"
          tag={["React"]}
          period="2020-2025"
        />
      </ProjectGrid>
    </ProjectSection>
  );
};

export default ProjectsSection;
