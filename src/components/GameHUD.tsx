import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

interface GameHUDProps {
  currentLevel: string;
  onBack: () => void;
}

const GameHUD = ({ currentLevel, onBack }: GameHUDProps) => {
  const levelNames: Record<string, string> = {
    about: "Character Profile",
    experience: "Adventure Log",
    projects: "Legendary Quests",
    skills: "Skill Tree",
    contact: "Join the Quest",
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="gap-2 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Menu</span>
            <Home className="w-4 h-4 sm:hidden" />
          </Button>

          {/* Current Level */}
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold hero-text">
              {levelNames[currentLevel]}
            </h2>
          </div>

          {/* Player Stats */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-xs text-muted-foreground">Progress</p>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "75%" }} />
                </div>
                <span className="text-xs font-bold text-primary">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHUD;
