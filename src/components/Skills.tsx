import {
  Code,
  Database,
  Wrench,
  Shield,
  FileText,
  Layers,
  Server,
  ShoppingCart,
  Palette,
  Zap,
  Network,
  Layout,
} from "lucide-react";

// Custom Flag Components
const SpanishFlag = () => (
  <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
    <div className="h-2 bg-red-500"></div>
    <div className="h-2 bg-yellow-400"></div>
    <div className="h-2 bg-red-500"></div>
  </div>
);

const UKFlag = () => (
  <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300 bg-blue-700 relative">
    {/* White diagonal crosses */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-white transform rotate-12 origin-center scale-x-[3] scale-y-[0.2]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white transform -rotate-12 origin-center scale-x-[3] scale-y-[0.2]"></div>
    </div>
    {/* Red diagonal crosses */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-red-600 transform rotate-12 origin-center scale-x-[3] scale-y-[0.1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-red-600 transform -rotate-12 origin-center scale-x-[3] scale-y-[0.1]"></div>
    </div>
    {/* White cross */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-1 bg-white absolute"></div>
      <div className="w-1 h-full bg-white absolute"></div>
    </div>
    {/* Red cross */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-0.5 bg-red-600 absolute"></div>
      <div className="w-0.5 h-full bg-red-600 absolute"></div>
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python"],
    },
    {
      icon: Layers,
      title: "Frontend Frameworks & Libraries",
      skills: ["React", "Vue.js", "Angular", "Bootstrap"],
    },
    {
      icon: Server,
      title: "Backend Technologies",
      skills: ["Node.js", "PHP", "Django", "Spring"],
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      skills: ["UX/UI Principles", "Responsive Design", "Figma", "Sketch"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "SQLite"],
    },
    {
      icon: Wrench,
      title: "Tools & Practices",
      skills: ["Git", "Linux/Unix", "Agile", "TDD", "SDLC", "Unit Tests"],
    },
    {
      icon: Network,
      title: "APIs & Integration",
      skills: ["REST APIs", "SOAP"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      skills: ["Shopify"],
    },
    {
      icon: FileText,
      title: "Content Management Systems",
      skills: ["WordPress"],
    },
    {
      icon: FileText,
      title: "Productivity Software",
      skills: ["Microsoft Office", "Google Workspace", "Trello"],
    },
  ];

  const languages = [
    { name: "Spanish", level: "Native", flag: SpanishFlag },
    { name: "English", level: "Fluent", flag: UKFlag },
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
            {languages.map((lang) => {
              const FlagComponent = lang.flag;
              return (
                <div
                  key={lang.name}
                  className="bg-card p-4 rounded-xl shadow-soft text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <FlagComponent />
                    <p className="font-semibold text-foreground">{lang.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              );
            })}
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
                <div className="grid md:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/80">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
