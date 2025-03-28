import { useState } from "react";
import {
  ContentBox,
  ImageBox,
  ItemContainer,
  Tag,
  TagList,
} from "./ProjectItem.styled";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { Project } from "./types/project";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { period, title, tag, description, thumbnail } = project;

  return (
    <>
      <ItemContainer onClick={() => setIsOpen(true)}>
        <ImageBox>
          <Image
            className="project-image"
            src={thumbnail}
            alt={`${title} 이미지`}
            width={100}
            height={100}
          />
        </ImageBox>
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
