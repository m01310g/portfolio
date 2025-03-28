import { PROJECTS } from "../../../../constants/PROJECTS";
import Title from "../title/Title";
import ProjectItem from "./ProjectItem";
import { ProjectGrid, ProjectSection } from "./ProjectsSection.styled";

const ProjectsSection = () => {
  return (
    <ProjectSection id="Projects">
      <Title title="Projects" />
      <ProjectGrid>
        {PROJECTS.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </ProjectGrid>
    </ProjectSection>
  );
};

export default ProjectsSection;
