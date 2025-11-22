import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const adventures = [
    {
      title: "Web Development Intern",
      company: "Labmentix Edtech Pvt.Ltd.",
      period: "June 2025 - August 2025",
      achievements: [
        "Developed a secure freelancer marketplace and document-signature platform leveraging data-driven approaches",
        "Engineered a document signature app supporting PDF viewing, custom themes, and multiple signature options",
        "Optimized backend workflows and SQL queries, improving performance by 30% and enabling actionable business insights",
      ],
      color: "primary",
    },
    {
      title: "Web Development Intern",
      company: "Dhenu Dharma Foundation",
      period: "1 May 25 - 30 May 25",
      achievements: [
        "Designed and implemented dynamic features using JavaScript for frontend interactivity and SQL for database management",
        "Collaborated with cross-functional teams to analyze and optimize database workflows ensuring seamless data flow",
        "Collaborated with the team to debug issues, optimize queries, and deploy new modules under tight deadlines",
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold hero-text">
              Adventure Log
            </h2>
            <p className="text-lg text-muted-foreground">
              Chronicles of experience gained on the journey
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {adventures.map((adventure, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${adventure.color}/20 rounded-lg flex items-center justify-center`}>
                          <Briefcase className={`w-5 h-5 text-${adventure.color}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{adventure.title}</h3>
                          <p className="text-lg text-primary font-semibold">{adventure.company}</p>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="flex items-center gap-2 px-4 py-2 text-sm border-primary/30"
                    >
                      <Calendar className="w-4 h-4" />
                      {adventure.period}
                    </Badge>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 pl-0 sm:pl-13">
                    {adventure.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 text-foreground/80">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
