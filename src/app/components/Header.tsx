"use client";

import { useEffect, useState } from "react";
import { CustomHeader } from "./Header.styled";

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
    </CustomHeader>
  );
};

export default Header;
