import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, TrendingUp, Users } from "lucide-react";

const ProjectsLevel = () => {
  const quests = [
    {
      icon: Brain,
      title: "Quantum-Assisted Pathfinding Simulator",
      description: "A mystical fusion of quantum and classical computing. Developed a full-stack Flask app to visually compare pathfinding algorithms, implementing Grover's search algorithm with Qiskit.",
      tech: ["Python", "Qiskit", "Flask", "Matplotlib", "JavaScript"],
      achievements: [
        "Implemented Grover's search algorithm in quantum circuits",
        "Transpiled custom Oracle and Diffuser gates for simulator execution",
        "Dynamic visualization of classical vs quantum paths with real-time circuit diagrams",
      ],
      color: "epic-purple",
      difficulty: "Legendary",
    },
    {
      icon: TrendingUp,
      title: "Satoshi's Gaze (Bitcoin Price Predictor)",
      description: "Peer into the future of cryptocurrency. Built a sophisticated ML model using Bi-LSTM to predict Bitcoin prices with dual-mode forecasting capabilities.",
      tech: ["Python", "TensorFlow", "Flask", "Pandas", "Chart.js"],
      achievements: [
        "Trained 6-feature Bi-LSTM model on 60-day sequences for next-day prediction",
        "Dual-mode REST API for future forecasts and historical back-testing",
        "Interactive JavaScript dashboard with Chart.js visualization and MAE validation",
      ],
      color: "primary",
      difficulty: "Epic",
    },
    {
      icon: Users,
      title: "Freelancer Marketplace",
      description: "A thriving hub where developers and clients unite. Created a full-stack platform connecting freelancers with opportunities through seamless gig management.",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB", "CSS"],
      achievements: [
        "Built complete freelancer marketplace with gig creation and order workflows",
        "Implemented interactive user dashboards for both clients and freelancers",
        "Added analytics to monitor gig trends and generate insights",
      ],
      color: "secondary",
      difficulty: "Epic",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-8">
        {quests.map((quest, index) => {
          const Icon = quest.icon;
          return (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-${quest.color}/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 text-${quest.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{quest.title}</h3>
                      <Badge variant="outline" className={`border-${quest.color}/50 text-${quest.color}`}>
                        {quest.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed text-lg">
                  {quest.description}
                </p>

                <div className="space-y-2">
                  {quest.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {quest.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted/50 text-foreground border border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            More quests and adventures await on GitHub
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 gap-2 group"
            onClick={() => window.open('https://github.com/dheerajkumar5604', '_blank')}
          >
            <span>Explore All Quests</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLevel;
