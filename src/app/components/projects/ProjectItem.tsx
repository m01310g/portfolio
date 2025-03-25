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
        <ImageBox>
          <Image
            className="project-image"
            src={img}
            alt={`${title} 이미지`}
            width={100}
            height={100}
          />
        </ImageBox>
        <ContentBox>
          <h3 className="title">{title}</h3>
          <span className="period">{period}</span>
          <TagList>
            {tag.map((t, idx) => (
              <Tag key={idx}>{t}</Tag>
            ))}
          </TagList>
        </ContentBox>
      </ItemContainer>

      {isOpen && (
        <ProjectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          period="2020-2025"
          title="어쩌구 저쩌구"
          thumbnail="/intro.png"
          tag={["React"]}
          outline="프로젝트 개요입니다 프로젝트 개요입니다 프로젝트 개요입니다 "
          features={["dddd", "eeeee"]}
          contributions={["dddd", "ttttt"]}
          screenshots={["/project1/천.png", "/project1/사.png", "/intro.png"]}
        />
      )}
    </>
  );
};

export default ProjectItem;
