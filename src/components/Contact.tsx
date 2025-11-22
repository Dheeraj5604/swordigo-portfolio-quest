import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold hero-text">
              Join the Quest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to embark on an adventure together? Let's create something legendary.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:dheerusharma4321@gmail.com"
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">dheerusharma4321@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+917982045453"
                  className="flex items-center gap-4 text-foreground/80 hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 7982045453</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Rewari, Haryana, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/dheerajkumar5604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/50 hover:bg-muted rounded-lg transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/dheeraj-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/50 hover:bg-muted rounded-lg transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur border-primary/30 flex flex-col justify-center">
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-glow">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Let's Build Together
                  </h3>
                  <p className="text-foreground/70">
                    Whether it's a new project, collaboration, or just a chat about tech, 
                    I'm always excited to connect with fellow adventurers.
                  </p>
                </div>
                <div className="space-y-3">
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold epic-glow"
                    onClick={() => window.location.href = 'mailto:dheerusharma4321@gmail.com'}
                  >
                    Send a Message
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => window.open('https://linkedin.com/in/dheeraj-kumar', '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Fun Fact */}
          <Card className="p-6 bg-card/30 backdrop-blur border-border text-center">
            <p className="text-muted-foreground italic">
              "Every great adventure begins with a single message. Let's start ours today! 🚀"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
