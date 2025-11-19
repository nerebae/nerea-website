import { Heart, Globe, Smile } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Hi! I'm a bilingual (Spanish/English) junior developer with a genuine passion for technology 
            and creating meaningful user experiences. I believe in the power of technology to improve 
            lives and help others achieve their goals.
          </p>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            When I'm not coding, I'm focused on wellbeing and staying active. I enjoy hitting the gym, 
            playing guitar and piano, and staying competitive through badminton and football.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <Globe className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-center mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground text-center">
                Spanish, English, Quechua, French, Italian
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <Heart className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-center mb-2">Passions</h3>
              <p className="text-sm text-muted-foreground text-center">
                UX Design, Wellbeing, Helping Others
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <Smile className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-center mb-2">Hobbies</h3>
              <p className="text-sm text-muted-foreground text-center">
                Gym, Guitar, Piano, Badminton, Football
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
