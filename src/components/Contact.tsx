import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin, Github, Send, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import ContactFormModal from "./ContactFormModal";
import { personalInfo } from "@/data/portfolioData";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: "Email Direct",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      primary: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/harikanthss",
      href: personalInfo.linkedIn,
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "github.com/SSHK03",
      href: personalInfo.github,
    },
  ];

  return (
    <>
      <section id="contact" className="py-24 relative bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <AnimatedSection className="mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Have a product idea or a problem worth solving?
              </h2>
              <p className="text-lg md:text-xl text-primary font-semibold font-sans max-w-xl mx-auto">
                Let's build something useful.
              </p>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
            </AnimatedSection>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {contactItems.map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 0.08}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="bg-card border border-border rounded-2xl p-5 block h-full hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md group text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-muted-foreground uppercase block mb-1">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors break-all">
                      {item.value}
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Action Buttons */}
            <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 h-12 text-sm font-semibold rounded-full shadow-lg shadow-primary/20"
                onClick={() => setIsModalOpen(true)}
              >
                <Send className="mr-2 w-4 h-4" />
                Send a Message
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 h-12 text-sm font-semibold rounded-full border-border hover:border-primary/50"
                asChild
              >
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <FileText className="mr-2 w-4 h-4 text-primary" />
                  Download Resume (PDF)
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Contact;
