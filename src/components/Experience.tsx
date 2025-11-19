import { ChefHat, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Kitchen Assistant",
      icon: ChefHat,
      skills: [
        "Time management in fast-paced environments",
        "Problem-solving under pressure",
        "Organization and prioritization",
        "Team collaboration",
      ],
    },
    {
      role: "Cleaner",
      icon: Sparkles,
      skills: [
        "Attention to detail",
        "Reliability and consistency",
        "Customer service excellence",
        "Independent work ethic",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight pb-2">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional roles and transferable skills
        </p>

        <div className="max-w-6xl mx-auto space-y-6">
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.role}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">{exp.role}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.skills.map((skill) => (
                      <div key={skill} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
