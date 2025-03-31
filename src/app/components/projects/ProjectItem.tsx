import { useState } from "react";
import {
  ContentBox,
  ImageWrapper,
  ItemContainer,
  Tag,
  TagList,
} from "./ProjectItem.styled";
import Image from "next/image";
import { Project } from "./types/project";
import ProjectModal from "./modal/ProjectModal";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { period, title, tag, description, thumbnail } = project;

  return (
    <>
      <ItemContainer onClick={() => setIsOpen(true)}>
        <ImageWrapper>
          <Image
            className="project-image"
            src={thumbnail}
            alt={`${title} 이미지`}
            width={500}
            height={500}
          />
        </ImageWrapper>
        <ContentBox>
          <h3 className="title">{title}</h3>
          <p className="period">{period}</p>
          <p className="description">{description}</p>
          <TagList>
            {tag.map((t, idx) => (
              <Tag key={idx} $type={t}>
                {t}
              </Tag>
            ))}
          </TagList>
        </ContentBox>
      </ItemContainer>

      {isOpen && (
        <ProjectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          project={project}
        />
      )}
    </>
  );
};

export default ProjectItem;
