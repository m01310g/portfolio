import { Button } from "./MenuButton.styled";

const MenuButton = ({ content }: { content: string }) => {
  return (
    <>
      <Button>
        <span>&lt;</span>
        {content} <span>/&gt;</span>
      </Button>
    </>
  );
};

export default MenuButton;
