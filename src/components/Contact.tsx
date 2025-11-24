import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my repositories",
      link: "https://github.com/nerebae",
      color: "hover:text-purple-600 dark:hover:text-purple-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      link: "http://www.linkedin.com/in/nerea-valdivieso-arevalo",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-xl mb-6">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you. Feel free to reach out through email or
            connect with me on social platforms.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Email Call-to-Action */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mb-8">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Ready to Start a Conversation?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether it's about a project, job opportunity, or just to
                connect, I'm always excited to hear from fellow developers and
                potential collaborators.
              </p>

              <Button
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={() =>
                  (window.location.href = "mailto:eliovaldivieso1975@gmail.com")
                }
              >
                <Mail className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                Send Email
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                eliovaldivieso1975@gmail.com
              </p>
            </CardContent>
          </Card>

          {/* Social Links Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted hover:border-primary/30"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent
                        className={`w-8 h-8 ${social.color} transition-colors`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {social.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {social.description}
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group/btn"
                      onClick={() => window.open(social.link, "_blank")}
                    >
                      Visit {social.title}
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Response Promise */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 text-muted-foreground bg-muted/50 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
