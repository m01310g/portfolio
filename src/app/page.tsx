import AboutSection from "./components/AboutSection";
import Header from "./components/header/Header";
import IntroduceSection from "./components/introduce/IntroduceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <IntroduceSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Page;
