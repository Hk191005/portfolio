import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, Github, Terminal, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { personalInfo } from "@/data/portfolioData";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <img
                src={profilePhoto}
                alt="Harikanth S S"
                className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-border shadow-xl"
              />
              <div className="absolute bottom-1 right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-background shadow-md">
                <span className="w-2.5 h-2.5 bg-white rounded-full block animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-border/70 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-medium">Available for Opportunities</span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                Coimbatore, India
              </span>
            </div>
          </motion.div>

          {/* Name & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground font-sans"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-sans">
              Full-Stack Developer
            </span>
            <span className="text-muted-foreground text-lg hidden sm:inline">•</span>
            <span className="text-base sm:text-xl text-muted-foreground font-mono flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-primary" />
              React · Spring Boot · AI/ML
            </span>
          </motion.div>

          {/* Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-normal"
          >
            Building scalable web products, RESTful backend services, and AI-driven platforms across frontend, backend, and database architectures.
          </motion.p>

          {/* Key Metric Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-10 text-left"
          >
            <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60">
              <span className="block text-xs font-mono uppercase text-muted-foreground tracking-wider mb-1">
                Experience
              </span>
              <span className="text-sm font-semibold text-foreground">
                6-Month AI/ML Lead
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60">
              <span className="block text-xs font-mono uppercase text-muted-foreground tracking-wider mb-1">
                Projects
              </span>
              <span className="text-sm font-semibold text-foreground">
                6 Full-Stack & UI Systems
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60 col-span-2 sm:col-span-1">
              <span className="block text-xs font-mono uppercase text-muted-foreground tracking-wider mb-1">
                Education
              </span>
              <span className="text-sm font-semibold text-foreground">
                B.Tech IT '27 (CGPA 7.64)
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto px-7 h-12 text-sm font-semibold rounded-full shadow-lg shadow-primary/20"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-7 h-12 text-sm font-semibold rounded-full border-border hover:border-primary/50"
              asChild
            >
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-2 w-4 h-4 text-primary" />
                Download Resume
              </a>
            </Button>

            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              <Button
                variant="ghost"
                size="icon"
                className="w-11 h-11 rounded-full border border-border/60 hover:border-primary/50 hover:bg-secondary/60"
                asChild
              >
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-11 h-11 rounded-full border border-border/60 hover:border-primary/50 hover:bg-secondary/60"
                asChild
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
