import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import IntroduceSection from "./components/IntroduceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

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
