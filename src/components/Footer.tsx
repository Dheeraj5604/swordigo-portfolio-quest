import { Sword, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sword className="w-4 h-4 text-primary" />
            <span>© 2025 Dheeraj Kumar. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            <span>and epic adventures</span>
          </div>

          {/* Achievement Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
            <span className="text-xs font-semibold text-primary">✨ 300+ Quests Completed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
