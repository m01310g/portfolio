"use client";

import { useEffect, useState } from "react";
import { CustomHeader } from "./Header.styled";
import HamburgerMenu from "../menu/HamburgerMenu";
import MenuButton from "../menu/MenuButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Introduce");

  useEffect(() => {
    const menuIds = ["Introduce", "Skills", "Projects", "About_Me"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const viewportCenter = window.innerHeight / 2;

      const sectionDistances = menuIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, distance: Infinity };

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        return { id, distance };
      });

      const closestSection = sectionDistances.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      setSelectedMenu(closestSection.id);
    };

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
      <HamburgerMenu
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
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
