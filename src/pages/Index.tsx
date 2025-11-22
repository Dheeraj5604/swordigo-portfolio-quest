import { useState } from "react";
import GameMenu from "@/components/GameMenu";
import GameHUD from "@/components/GameHUD";
import AboutLevel from "@/components/levels/AboutLevel";
import ExperienceLevel from "@/components/levels/ExperienceLevel";
import ProjectsLevel from "@/components/levels/ProjectsLevel";
import SkillsLevel from "@/components/levels/SkillsLevel";
import ContactLevel from "@/components/levels/ContactLevel";

const Index = () => {
  const [currentLevel, setCurrentLevel] = useState<string | null>(null);

  const handleSelectLevel = (level: string) => {
    setCurrentLevel(level);
  };

  const handleBackToMenu = () => {
    setCurrentLevel(null);
  };

  const renderLevel = () => {
    switch (currentLevel) {
      case "about":
        return <AboutLevel />;
      case "experience":
        return <ExperienceLevel />;
      case "projects":
        return <ProjectsLevel />;
      case "skills":
        return <SkillsLevel />;
      case "contact":
        return <ContactLevel />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {currentLevel ? (
        <>
          <GameHUD currentLevel={currentLevel} onBack={handleBackToMenu} />
          <div className="pt-20 pb-12 animate-fade-in">
            {renderLevel()}
          </div>
        </>
      ) : (
        <GameMenu onSelectLevel={handleSelectLevel} />
      )}
    </div>
  );
};

export default Index;
