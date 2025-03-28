"use client";

import AboutSection from "./components/about/AboutSection";
import Header from "./components/header/Header";
import IntroduceSection from "./components/introduce/IntroduceSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import { Main } from "./page.styled";

const Page = () => {
  return (
    <>
      <Header />
      <Main>
        <IntroduceSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </Main>
    </>
  );
};

export default Page;
