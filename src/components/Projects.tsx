import { MessageSquare, Gamepad2, ShoppingCart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      icon: MessageSquare,
      title: "School FAQ Chatbot",
      description: "An intelligent Python-based chatbot designed to answer frequently asked questions about school services, schedules, and policies. Features natural language processing and conversational AI.",
      tech: ["Python", "NLP"],
      color: "bg-accent/20",
    },
    {
      icon: Gamepad2,
      title: "Java Snake Game",
      description: "Classic Snake game built with Java, featuring smooth gameplay mechanics, score tracking, and increasing difficulty levels. Implements object-oriented programming principles.",
      tech: ["Java", "OOP"],
      color: "bg-primary/20",
    },
    {
      icon: ShoppingCart,
      title: "Grocery Price Comparison",
      description: "React Native mobile app that helps users compare grocery prices across different stores, find the best deals, and save money on their shopping.",
      tech: ["React Native", "JavaScript"],
      color: "bg-accent/20",
    },
    {
      icon: Sparkles,
      title: "React UI Projects",
      description: "Collection of modern, responsive frontend projects built with React. Focus on clean design, smooth animations, and excellent user experience.",
      tech: ["React", "CSS", "HTML"],
      color: "bg-primary/20",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          A showcase of my development work
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border"
              >
                <div className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
