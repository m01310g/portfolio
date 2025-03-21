"use client";

import Title from "../title/Title";
import SkillList from "./SkillList";
import { SkillSection } from "./SkillsSection.styled";

const SkillsSection = () => {
  return (
    <SkillSection id="Skills">
      <Title title="Skills" />
      <SkillList />
    </SkillSection>
  );
};

export default SkillsSection;
