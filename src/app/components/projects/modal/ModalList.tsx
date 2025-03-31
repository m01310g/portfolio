import ReactMarkdown from "react-markdown";
import { ModalListWrapper } from "./ModalList.styled";

interface ModalListProps {
  title: string;
  items: string[];
}

const ModalList = ({ title, items }: ModalListProps) => {
  return (
    <ModalListWrapper>
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </ModalListWrapper>
  );
};

export default ModalList;
