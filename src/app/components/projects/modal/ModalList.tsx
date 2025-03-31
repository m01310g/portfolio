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
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </ModalListWrapper>
  );
};

export default ModalList;
