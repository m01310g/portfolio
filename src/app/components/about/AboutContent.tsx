import { ReactNode } from "react";
import { ContentContainer } from "./AboutContent.styled";

const AboutContent = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <ContentContainer>
      <h2>{title}</h2>
      {children}
    </ContentContainer>
  );
};

export default AboutContent;
