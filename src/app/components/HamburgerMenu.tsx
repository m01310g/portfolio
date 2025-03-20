import { useState } from "react";
import { Button, Menu, MenuItem } from "./HamburgerMenu.styled";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (targetId: string) => {
    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Button onClick={toggleMenu}>
        {isMenuOpen ? (
          // 닫기 버튼
          <svg
            className="menu-img"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // 햄버거 메뉴 버튼
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
        )}
      </Button>
      {
        <Menu $isMenuOpen={isMenuOpen}>
          <ul>
            <MenuItem>
              <a onClick={() => handleMenuClick("Introduce")}>
                <span>&lt;</span>Introduce <span>/&gt;</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a onClick={() => handleMenuClick("Skills")}>
                <span>&lt;</span>Skills <span>/&gt;</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a onClick={() => handleMenuClick("Projects")}>
                <span>&lt;</span>Projects <span>/&gt;</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a onClick={() => handleMenuClick("About")}>
                <span>&lt;</span>About_Me <span>/&gt;</span>
              </a>
            </MenuItem>
          </ul>
        </Menu>
      }
    </>
  );
};

export default HamburgerMenu;
