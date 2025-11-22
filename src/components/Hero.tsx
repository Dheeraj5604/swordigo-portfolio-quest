import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Epic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-epic-blue text-lg tracking-wider uppercase font-semibold animate-glow">
              Welcome, Traveler
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="hero-text">Dheeraj Kumar</span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Full Stack Developer & Problem Solver
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A passionate developer on an epic quest to build innovative solutions. 
            Wielding the powers of React, Node.js, Python, and AI to create digital experiences 
            that leave a lasting impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg epic-glow transition-all hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Quests
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/dheerajkumar5604" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 border border-border hover:border-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/dheeraj-kumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 border border-border hover:border-epic-blue"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:dheerusharma4321@gmail.com"
              className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 border border-border hover:border-accent"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
