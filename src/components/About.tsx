import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Cloud } from "lucide-react";

const About = () => {
  const abilities = [
    {
      icon: Code2,
      name: "Frontend Mastery",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Responsive Design"],
      color: "epic-gold",
    },
    {
      icon: Database,
      name: "Backend Expertise",
      skills: ["Node.js", "Express.js", "Django", "MongoDB", "MySQL"],
      color: "epic-blue",
    },
    {
      icon: Brain,
      name: "AI & ML Powers",
      skills: ["Python", "TensorFlow", "Qiskit", "Data Analytics"],
      color: "epic-purple",
    },
    {
      icon: Cloud,
      name: "Cloud Arsenal",
      skills: ["AWS", "Google Cloud", "Docker", "CI/CD"],
      color: "secondary",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold hero-text">
              Character Abilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A skilled warrior equipped with powerful technologies and frameworks
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">The Journey</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Currently pursuing Bachelor of Technology in Information Technology at 
                  <span className="text-primary font-semibold"> Vellore Institute of Technology</span> with a CGPA of 8.22.
                </p>
                <p>
                  Embarked on web development adventures through internships at Labmentix Edtech and 
                  Dhenu Dharma Foundation, where I honed my skills in building secure platforms and 
                  optimizing backend performance.
                </p>
                <p>
                  Conquered <span className="text-primary font-semibold">300+ LeetCode problems</span> and 
                  <span className="text-primary font-semibold"> 350+ DSA challenges</span>, strengthening 
                  problem-solving prowess and algorithmic thinking.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all">
              <h3 className="text-2xl font-bold text-secondary mb-4">Beyond Code</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  <span className="text-secondary font-semibold">Multilingual Warrior:</span> Fluent in 
                  English, Hindi, and Japanese (writing), bridging cultures through code and communication.
                </p>
                <p>
                  <span className="text-secondary font-semibold">Athletic Spirit:</span> Represented at 
                  State Level Football as a right winger, bringing teamwork and strategy to every challenge.
                </p>
                <p>
                  <span className="text-secondary font-semibold">Creative Soul:</span> When not coding, 
                  you'll find me practicing calisthenics, playing guitar, or discovering new music to fuel 
                  the creative spirit.
                </p>
              </div>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {abilities.map((ability, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 bg-${ability.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ability.icon className={`w-6 h-6 text-${ability.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{ability.name}</h4>
                  <ul className="space-y-2">
                    {ability.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
