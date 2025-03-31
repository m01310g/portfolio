import { Header, Tag, TagList } from "./ModalHeader.styled";

interface ModalHeaderProps {
  title: string;
  period: string;
  tag: string[];
}

const ModalHeader = ({ title, period, tag }: ModalHeaderProps) => {
  return (
    <Header>
      <span className="period">{period}</span>
      <h2>{title}</h2>
      <TagList>
        {tag.map((t, idx) => (
          <Tag key={idx} $type={t}>
            {t}
          </Tag>
        ))}
      </TagList>
    </Header>
  );
};

export default ModalHeader;
