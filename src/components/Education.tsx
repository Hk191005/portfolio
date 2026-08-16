import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { educationInfo } from "@/data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Education
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
          </AnimatedSection>

          {/* Education Card */}
          <AnimatedSection delay={0.1}>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {educationInfo.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {educationInfo.institution}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1 font-mono">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {educationInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                  <span className="text-xs font-mono px-3 py-1 bg-secondary rounded-full border border-border text-foreground font-medium flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-primary" />
                    {educationInfo.graduation}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-primary" />
                    CGPA: {educationInfo.cgpa}
                  </span>
                </div>
              </div>

              <div className="pt-6 grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                  <span className="text-[11px] font-mono uppercase text-muted-foreground block mb-1">
                    Major Field
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    Information Technology
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                  <span className="text-[11px] font-mono uppercase text-muted-foreground block mb-1">
                    Institution Type
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    Autonomous Institution
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                  <span className="text-[11px] font-mono uppercase text-muted-foreground block mb-1">
                    Status
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Final Phase (Grad 2027)
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Education;
