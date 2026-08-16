import { Code2, Database, Users, GraduationCap, Cpu, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { personalInfo, educationInfo } from "@/data/portfolioData";

const About = () => {
  const coreCompetencies = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications with React.js, Next.js, Spring Boot, Node.js, and RESTful APIs.",
    },
    {
      icon: Database,
      title: "Database Architectures",
      description:
        "Schema design, relational indexing, query optimization, and storage management across MySQL, MongoDB, and Supabase.",
    },
    {
      icon: Users,
      title: "Team Leadership & QA",
      description:
        "Led project teams in Agile environments, overseeing task allocation, sprint delivery, bug fixing, and release readiness.",
    },
    {
      icon: Cpu,
      title: "AI/ML Exposure",
      description:
        "Python-based data workflows with Pandas and NumPy for exploratory data analysis and model development.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
              Background & Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              About Me
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Narrative */}
            <AnimatedSection className="lg:col-span-7 space-y-6" delay={0.1}>
              <h3 className="text-2xl font-bold text-foreground leading-snug">
                Results-oriented Full-Stack Developer with hands-on enterprise & project experience.
              </h3>

              <p className="text-muted-foreground text-base leading-relaxed">
                I am a B.Tech Information Technology student at Sri Krishna College of Technology (graduating June 2027) with practical experience building production web applications, enterprise ERP/CRM systems, and AI-driven platforms.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                During my 6-month AI/ML internship at <strong className="text-foreground font-semibold">Grevya Technologies</strong>, I served as <strong className="text-foreground font-semibold">Team Lead</strong> across 2 full-scale web projects: <em>iRookee</em> (a job/internship portal) and an <em>HR Portal</em>. I coordinated task allocation, managed sprint timelines, and conducted functional QA testing and bug fixing to ensure production-ready quality.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                Prior to that, as a Full-Stack Developer Intern at <strong className="text-foreground font-semibold">AJ&VG Media</strong>, I architected a web-based Textile ERP and CRM system centralizing records for 50+ employees and buyers while optimizing SQL schemas across 5+ operational modules.
              </p>

              {/* Quick Highlights list */}
              <div className="pt-2 grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Production-oriented engineering</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Spring Boot & React integrations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Agile sprint & team coordination</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Data modeling & SQL optimization</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Academic & Overview Facts */}
            <AnimatedSection className="lg:col-span-5 space-y-6" delay={0.2}>
              {/* Education Summary Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Education & Standing</h4>
                    <p className="text-xs text-muted-foreground font-mono">Academic Credentials</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-border/60">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase block mb-1">Degree</span>
                    <span className="text-sm font-semibold text-foreground">{educationInfo.degree}</span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase block mb-1">Institution</span>
                    <span className="text-sm font-medium text-foreground">{educationInfo.institution}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <span className="text-xs font-mono text-muted-foreground uppercase block mb-1">Graduation</span>
                      <span className="text-sm font-semibold text-primary">{educationInfo.graduation}</span>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-muted-foreground uppercase block mb-1">CGPA</span>
                      <span className="text-sm font-bold text-foreground px-2 py-0.5 rounded bg-secondary inline-block">
                        {educationInfo.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="grid sm:grid-cols-2 gap-3">
                {coreCompetencies.map((comp) => (
                  <div key={comp.title} className="bg-card border border-border/70 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <comp.icon className="w-4 h-4 text-primary shrink-0" />
                      <h5 className="font-semibold text-xs text-foreground">{comp.title}</h5>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">{comp.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
