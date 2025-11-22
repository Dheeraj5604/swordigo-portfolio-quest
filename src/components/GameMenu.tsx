import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sword, User, Briefcase, BookOpen, Mail, Trophy } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface GameMenuProps {
  onSelectLevel: (level: string) => void;
}

const GameMenu = ({ onSelectLevel }: GameMenuProps) => {
  const quests = [
    {
      id: "about",
      title: "Character Profile",
      description: "Learn about the hero's abilities and background",
      icon: User,
      difficulty: "Beginner",
      color: "primary",
      xp: 100,
    },
    {
      id: "experience",
      title: "Adventure Log",
      description: "Review past quests and gained experience",
      icon: Briefcase,
      difficulty: "Easy",
      color: "secondary",
      xp: 150,
    },
    {
      id: "projects",
      title: "Legendary Quests",
      description: "Epic projects and legendary achievements",
      icon: Trophy,
      difficulty: "Hard",
      color: "epic-purple",
      xp: 300,
    },
    {
      id: "skills",
      title: "Skill Tree",
      description: "View mastered abilities and powers",
      icon: BookOpen,
      difficulty: "Medium",
      color: "epic-blue",
      xp: 200,
    },
    {
      id: "contact",
      title: "Join the Quest",
      description: "Connect and start a new adventure",
      icon: Mail,
      difficulty: "Easy",
      color: "accent",
      xp: 100,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Epic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Menu */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sword className="w-12 h-12 text-primary animate-glow" />
              <h1 className="text-5xl md:text-7xl font-bold hero-text">
                Dheeraj Kumar
              </h1>
              <Sword className="w-12 h-12 text-primary animate-glow" />
            </div>
            <p className="text-xl md:text-2xl text-foreground/80">
              Full Stack Developer & Digital Warrior
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="px-4 py-2 text-lg border-primary/50">
                Level 22 Developer
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-lg border-secondary/50">
                350+ Challenges Completed
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-lg border-accent/50">
                3 Epic Quests
              </Badge>
            </div>
          </div>

          {/* Quest Selection */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Select Your Quest
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quests.map((quest, index) => (
                <Card
                  key={quest.id}
                  className="p-6 bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => onSelectLevel(quest.id)}
                >
                  <div className="space-y-4">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 bg-${quest.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <quest.icon className={`w-6 h-6 text-${quest.color}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {quest.difficulty}
                      </Badge>
                    </div>

                    {/* Quest Info */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {quest.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {quest.description}
                      </p>
                    </div>

                    {/* XP Reward */}
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">Reward</span>
                      <span className="text-sm font-bold text-primary">+{quest.xp} XP</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <Card className="p-6 bg-card/40 backdrop-blur border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">8.22</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">2</p>
                <p className="text-xs text-muted-foreground">Internships</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">300+</p>
                <p className="text-xs text-muted-foreground">Problems Solved</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-epic-purple">10+</p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
