"use client";

import SkillList from "./SkillList";
import { SkillSection } from "./SkillsSection.styled";

const SkillsSection = () => {
  return (
    <SkillSection id="Skills">
      <h1>
        <span>&lt;</span>Skills <span>/&gt;</span>
      </h1>
      <SkillList />
    </SkillSection>
  );
};

export default SkillsSection;
