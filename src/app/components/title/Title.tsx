import { StyledH1 } from "./Title.styled";

const Title = ({ title }: { title: string }) => {
  return (
    <StyledH1>
      <span>&lt;</span>
      {title}
      <span> /&gt;</span>
    </StyledH1>
  );
};

export default Title;
