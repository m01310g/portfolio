"use client";

import { useEffect, useState } from "react";
import { CustomHeader } from "./Header.styled";
import HamburgerMenu from "../menu/HamburgerMenu";
import MenuButton from "../menu/MenuButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Introduce");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    console.log(menu);
    document.querySelector(`#${menu}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CustomHeader $isScrolled={isScrolled}>
      <h1>MinKyoung_Portfolio.tsx</h1>
      <HamburgerMenu />
      <MenuButton
        content="Introduce"
        isScrolled={isScrolled}
        isActive={selectedMenu === "Introduce"}
        onClick={() => handleMenuClick("Introduce")}
      />
      <MenuButton
        content="Skills"
        isScrolled={isScrolled}
        isActive={selectedMenu === "Skills"}
        onClick={() => handleMenuClick("Skills")}
      />
      <MenuButton
        content="Projects"
        isScrolled={isScrolled}
        isActive={selectedMenu === "Projects"}
        onClick={() => handleMenuClick("Projects")}
      />
      <MenuButton
        content="About_Me"
        isScrolled={isScrolled}
        isActive={selectedMenu === "About_Me"}
        onClick={() => handleMenuClick("About_Me")}
      />
    </CustomHeader>
  );
};

export default Header;
