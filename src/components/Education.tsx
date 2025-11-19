import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight pb-2">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Academic background and qualifications
        </p>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Placeholder for degree */}
          <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-xl">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">BSc Computer Science (Artificial Intelligence)</h3>
                <p className="text-muted-foreground mb-4">Royal Holloway, University of London    •  2025</p>
                <p className="text-foreground/80">
                  First Class Honours
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder for modules */}
          <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-xl">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">Key Modules</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Software Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">User-Centred Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Deep Learning </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Databases  </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">IT Project Management  </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Object Oriented Programming </span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Software Design </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
