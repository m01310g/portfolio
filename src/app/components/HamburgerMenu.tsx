import { Button } from "./HamburgerMenu.styled";

const HamburgerMenu = () => {
  return (
    <>
      <Button>
        <svg
          className="menu-img"
          width="30"
          height="30"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </>
  );
};

export default HamburgerMenu;
