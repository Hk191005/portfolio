import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/data/portfolioData";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" },
  ];

  const isHome = location.pathname === "/";

  const getHref = (href: string) => {
    if (isHome) {
      return href.replace("/", "");
    }
    return href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/80 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Identity Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
          >
            <img
              src={profilePhoto}
              alt="Harikanth S S"
              className="w-9 h-9 rounded-full object-cover object-[50%_18%] border border-primary/40 shadow-sm group-hover:scale-105 transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="leading-none text-base font-bold font-sans tracking-tight text-foreground">
                Harikanth <span className="text-foreground font-bold">S S</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-mono font-medium tracking-wider uppercase mt-0.5">
                Full-Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-secondary/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-background/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 rounded-full border border-border/60 hover:border-primary/50 hover:bg-secondary/60"
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

            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3.5 text-xs font-medium rounded-full border-border/70 hover:border-primary/50 transition-all"
              asChild
            >
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FileText className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Resume
              </a>
            </Button>
            <Button
              size="sm"
              className="h-9 px-4 text-xs font-semibold rounded-full shadow-sm"
              asChild
            >
              <a href={getHref("/#contact")}>
                Get in Touch
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground rounded-lg border border-border/60 hover:bg-secondary/60 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center text-xs"
                asChild
              >
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="w-4 h-4 mr-2 text-primary" />
                  Download Resume (PDF)
                </a>
              </Button>
              <Button
                size="sm"
                className="w-full justify-center text-xs"
                asChild
              >
                <a href={getHref("/#contact")} onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
