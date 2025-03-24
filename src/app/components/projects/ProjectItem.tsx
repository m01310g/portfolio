import { useState } from "react";
import { ItemContainer, Tag, TagList } from "./ProjectItem.styled";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface ProjectItemProps {
  title: string;
  img: string;
  period: string;
  tag: string[];
}

const ProjectItem = ({ title, img, period, tag }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ItemContainer onClick={() => setIsOpen(true)}>
        <Image src={img} alt={`${title} 이미지`} width={100} height={100} />
        <h3 className="title">{title}</h3>
        <span className="period">{period}</span>
        <TagList>
          {tag.map((t, idx) => (
            <Tag key={idx}>{t}</Tag>
          ))}
        </TagList>
      </ItemContainer>

      {isOpen && (
        <ProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          ddd
        </ProjectModal>
      )}
    </>
  );
};

export default ProjectItem;
