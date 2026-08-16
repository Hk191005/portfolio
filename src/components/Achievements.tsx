import { Award, Trophy, Sparkles, BookOpen, Users, LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { achievementsList } from "@/data/portfolioData";

const tagIcons: Record<string, LucideIcon> = {
  Hackathon: Trophy,
  Award: Award,
  Leadership: Users,
  Certification: BookOpen,
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative bg-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
              Recognition & Activities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Certifications & Achievements
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto mt-2">
              National hackathon participation, leadership roles, and technical course certifications.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsList.map((item, index) => {
              const IconComp = tagIcons[item.tag] || Sparkles;

              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/40 transition-all duration-300 shadow-sm flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-lg text-foreground">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-secondary border border-border text-primary shrink-0">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-xs font-medium font-mono text-muted-foreground mb-2">
                        {item.subtitle}
                      </p>

                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {item.detail}
                      </p>
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

export default Achievements;
