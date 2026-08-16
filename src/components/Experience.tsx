import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
              Professional Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto mt-2">
              Hands-on engineering roles in full-stack development, AI/ML product leadership, and database optimization.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
          </AnimatedSection>

          {/* Experience Timeline */}
          <div className="relative border-l-2 border-border/80 pl-6 sm:pl-10 ml-2 sm:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.role + exp.company} delay={index * 0.15}>
                <div className="relative group">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-border/60">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-bold text-foreground font-sans">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                            {exp.company}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium flex items-center gap-2 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                          {exp.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border/60 self-start md:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="mb-5 p-3.5 rounded-xl bg-secondary/50 border border-border/50 flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-foreground">
                        {exp.highlight}
                      </p>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span className="text-foreground/90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/60 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
