import { useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "./HamburgerMenu.styled";

interface HamburgerMenuProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

const HamburgerMenu = ({
  selectedMenu,
  setSelectedMenu,
}: HamburgerMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (targetId: string) => {
    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setSelectedMenu(targetId);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

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

      <Menu $isMenuOpen={isMenuOpen}>
        <ul>
          {["Introduce", "Skills", "Projects", "About_Me"].map((menu) => (
            <MenuItem key={menu} $isActive={selectedMenu === menu}>
              <a onClick={() => handleMenuClick(menu)}>
                <span>&lt;</span>
                {menu} <span>/&gt;</span>
              </a>
            </MenuItem>
          ))}
        </ul>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
