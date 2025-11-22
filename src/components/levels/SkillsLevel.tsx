import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsLevel = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C/C++", "HTML", "CSS", "JavaScript", "Python"],
      color: "primary",
    },
    {
      category: "Frameworks",
      skills: ["React", "Express.js", "Django"],
      color: "secondary",
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "MongoDB"],
      color: "accent",
    },
    {
      category: "Data Analytics",
      skills: ["Pandas", "NumPy", "Data Visualization", "Data Cleaning", "Excel"],
      color: "epic-blue",
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Google Cloud"],
      color: "epic-purple",
    },
    {
      category: "Technical Skills",
      skills: ["Data Structures & Algorithms", "AI concepts", "Docker", "CI/CD"],
      color: "primary",
    },
    {
      category: "CS Fundamentals",
      skills: ["Object Oriented Programming", "Operating System", "Computer Networks", "Probability & Statistics"],
      color: "secondary",
    },
  ];

  const achievements = [
    {
      title: "Problem Solver",
      description: "300+ LeetCode problems solved",
      xp: "300 XP",
      color: "primary",
    },
    {
      title: "DSA Master",
      description: "350+ Data Structure problems conquered",
      xp: "350 XP",
      color: "secondary",
    },
    {
      title: "Top Performer",
      description: "S grade in all NPTEL courses",
      xp: "150 XP",
      color: "accent",
    },
    {
      title: "Team Player",
      description: "State Level Football representation",
      xp: "100 XP",
      color: "epic-blue",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-12">
        {/* Skills Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 hero-text">Mastered Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-lg font-bold text-${category.color}`}>
                      {category.category}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {category.skills.length}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-muted/50 text-foreground border border-border text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 hero-text">Achievements Unlocked</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 animate-slide-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className={`w-16 h-16 mx-auto bg-${achievement.color}/20 rounded-full flex items-center justify-center text-3xl`}>
                    🏆
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                  <Badge variant="outline" className={`text-${achievement.color} border-${achievement.color}/50`}>
                    {achievement.xp}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur border-border">
            <h4 className="text-xl font-bold text-foreground mb-4">Languages Known</h4>
            <div className="flex gap-3">
              <Badge variant="secondary" className="text-sm">English</Badge>
              <Badge variant="secondary" className="text-sm">Hindi</Badge>
              <Badge variant="secondary" className="text-sm">Japanese (Writing)</Badge>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border">
            <h4 className="text-xl font-bold text-foreground mb-4">Personal Interests</h4>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm">Calisthenics</Badge>
              <Badge variant="secondary" className="text-sm">Football</Badge>
              <Badge variant="secondary" className="text-sm">Music</Badge>
              <Badge variant="secondary" className="text-sm">Guitar</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsLevel;
