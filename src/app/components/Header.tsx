"use client";

import { useEffect, useState } from "react";
import { CustomHeader } from "./Header.styled";
import HamburgerMenu from "./HamburgerMenu";
import MenuButton from "./MenuButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CustomHeader $isScrolled={isScrolled}>
      <h1>MinKyoung_Portfolio.tsx</h1>
      <HamburgerMenu />
      <MenuButton content="Introduce" />
      <MenuButton content="Skills" />
      <MenuButton content="Projects" />
      <MenuButton content="About_Me" />
    </CustomHeader>
  );
};

export default Header;
