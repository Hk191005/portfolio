import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight, Layers, Cpu, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { projectsData } from "@/data/portfolioData";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  const projectKeys = Object.keys(projectsData);
  const currentIndex = slug ? projectKeys.indexOf(slug) : -1;
  const prevSlug = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextSlug = currentIndex >= 0 && currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3 text-foreground">Project Not Found</h1>
          <p className="text-sm text-muted-foreground mb-6">
            The project case study you are looking for does not exist or has been relocated.
          </p>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1 pt-28 pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <AnimatedSection delay={0}>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects Showcase
              </Link>
            </AnimatedSection>

            {/* Case Study Header */}
            <AnimatedSection delay={0.1}>
              <div className="mb-8 pb-8 border-b border-border/80">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary border border-border">
                    {project.company}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground font-medium mb-4">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-2">
                  <div>
                    <span className="text-foreground font-semibold">Role:</span> {project.role}
                  </div>
                  <div>•</div>
                  <div>
                    <span className="text-foreground font-semibold">Period:</span> {project.period}
                  </div>
                  {project.liveUrl && (
                    <>
                      <div>•</div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Problem & Solution Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <AnimatedSection delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    The Problem
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-card border border-primary/30 rounded-2xl p-6 h-full space-y-3 bg-primary/5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                    The Solution
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Key Features */}
            <AnimatedSection delay={0.4} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Key Features & Capabilities
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-card border border-border/70 flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Engineering Decisions */}
            <AnimatedSection delay={0.5} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Engineering Decisions & Architecture
              </h2>
              <div className="space-y-3">
                {project.engineeringDecisions.map((decision, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-secondary/40 border border-border/60 text-sm text-foreground/90"
                  >
                    <span className="font-mono text-xs text-primary font-bold block mb-1">
                      DECISION 0{i + 1}
                    </span>
                    {decision}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Tech Stack */}
            <AnimatedSection delay={0.6} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Technologies & Tools Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 text-xs font-mono font-semibold bg-secondary text-foreground rounded-lg border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Outcomes */}
            <AnimatedSection delay={0.7} className="mb-12">
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Results & Impact
                </h2>
                <div className="space-y-3">
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Next / Previous Project Nav */}
            <AnimatedSection delay={0.8} className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevSlug ? (
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <Link to={`/project/${prevSlug}`}>
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Previous Project
                  </Link>
                </Button>
              ) : (
                <div />
              )}

              <Button variant="hero" size="sm" asChild className="w-full sm:w-auto">
                <Link to="/#projects">
                  <Layers className="mr-2 w-4 h-4" />
                  All Projects
                </Link>
              </Button>

              {nextSlug ? (
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <Link to={`/project/${nextSlug}`}>
                    Next Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <div />
              )}
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
