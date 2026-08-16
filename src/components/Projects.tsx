import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Database, Code2, Users, Smartphone, Layers, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { projectsData, Project } from "@/data/portfolioData";

const categoryIcons = {
  "Full-Stack": Database,
  "AI & Lead": Users,
  "UI/UX": Smartphone,
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projectList: Project[] = Object.values(projectsData);

  const categories = ["All", "Full-Stack", "AI & Lead", "UI/UX"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-secondary/15">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
              Engineering Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Featured Projects & Case Studies
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-2">
              Real-world software products, enterprise portals, and mobile UI systems engineered for stability and performance.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
          </AnimatedSection>

          {/* Category Filter Tabs */}
          <AnimatedSection className="flex flex-wrap items-center justify-center gap-2 mb-12" delay={0.1}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const IconComponent = categoryIcons[project.category] || Layers;

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-mono font-medium text-muted-foreground uppercase">
                              {project.company}
                            </span>
                          </div>

                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary border border-border text-foreground font-mono">
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium text-primary mb-4 font-mono">
                          Role: {project.role} · {project.period}
                        </p>

                        {/* Summary */}
                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Problem & Solution Quick Highlight */}
                        <div className="space-y-2.5 mb-6 p-3.5 rounded-xl bg-secondary/40 border border-border/50">
                          <div>
                            <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground tracking-wider block">
                              Problem
                            </span>
                            <p className="text-xs text-foreground/90 mt-0.5 line-clamp-2">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase font-bold text-primary tracking-wider block">
                              Solution
                            </span>
                            <p className="text-xs text-foreground/90 mt-0.5 line-clamp-2">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono px-2 py-0.5 bg-secondary/80 text-foreground/80 rounded border border-border/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs font-semibold px-0 text-primary hover:bg-transparent hover:underline"
                          asChild
                        >
                          <Link to={`/project/${project.slug}`}>
                            View Detailed Case Study
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                          </Link>
                        </Button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/20 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live Site
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
