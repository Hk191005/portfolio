import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border/80">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <Link to="/" className="font-bold text-lg text-foreground font-sans">
              Harikanth <span className="text-foreground font-bold">S S</span>
            </Link>
            <p className="text-xs text-muted-foreground font-mono">
              © {currentYear} Harikanth S S. Built with Next-gen Web Technologies & Integrity.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
            <a href="/#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="/#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="/#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="/#skills" className="hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="/#achievements" className="hover:text-foreground transition-colors">
              Achievements
            </a>
            <a href="/#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg border border-border/60 hover:bg-secondary/60"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg border border-border/60 hover:bg-secondary/60"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg border border-border/60 hover:bg-secondary/60"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border/60 hover:bg-secondary/60 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
