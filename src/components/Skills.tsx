import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skillsGrouped } from "@/data/portfolioData";
import { Code, Terminal, Database, Cpu, BarChart3, Wrench, ShieldCheck, Layout, LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Terminal,
  "Frontend Development": Layout,
  "Backend Development": Code,
  "Databases & Storage": Database,
  "Data & Analytics": BarChart3,
  "Machine Learning & AI": Cpu,
  "Tools & Platforms": Wrench,
  "Software Engineering & Leadership": ShieldCheck,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
              Technical Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-2">
              Categorized technologies, frameworks, databases, and software engineering practices.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
          </AnimatedSection>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsGrouped.map((group, index) => {
              const IconComp = categoryIcons[group.category] || Code;

              return (
                <AnimatedSection key={group.category} delay={index * 0.05}>
                  <div className="bg-card border border-border rounded-2xl p-5 h-full hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/60">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-sm text-foreground">
                          {group.category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-medium px-2.5 py-1 bg-secondary text-foreground/90 rounded-md border border-border/60 hover:border-primary/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
