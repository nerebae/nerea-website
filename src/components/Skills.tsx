import { Code, Database, Wrench, Shield, FileText } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "Java", "JavaScript", "React", "CSS", "HTML"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL", "MySQL", "SQLite"],
    },
    {
      icon: Wrench,
      title: "Tools & Practices",
      skills: ["Git", "Linux/Unix", "Agile", "TDD", "Node.js"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: ["Networking Protocols", "Firewalls", "Secure Communication"],
    },
    {
      icon: FileText,
      title: "Software",
      skills: ["Microsoft Office", "Google Workspace"],
    },
  ];

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Fluent" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          A snapshot of my technical abilities and tools
        </p>

        {/* Languages */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Languages</h3>
          <div className="grid grid-cols-2 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-card p-4 rounded-xl shadow-soft text-center"
              >
                <p className="font-semibold text-foreground">{lang.name}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
