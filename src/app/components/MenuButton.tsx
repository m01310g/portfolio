import { Button } from "./MenuButton.styled";

interface MenuButtonProps {
  content: string;
  isActive: boolean;
  isScrolled: boolean;
  onClick: () => void;
}

const MenuButton = ({
  content,
  isActive,
  isScrolled,
  onClick,
}: MenuButtonProps) => {
  return (
    <>
      <Button onClick={onClick} $isScrolled={isScrolled} $isActive={isActive}>
        <span>&lt;</span>
        {content} <span>/&gt;</span>
      </Button>
    </>
  );
};

export default MenuButton;
