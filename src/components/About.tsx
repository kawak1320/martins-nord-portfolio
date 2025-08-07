import { User, Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "8+" },
    { icon: Award, label: "Projects Completed", value: "150+" },
    { icon: User, label: "Happy Clients", value: "50+" },
    { icon: GraduationCap, label: "Certifications", value: "12" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-muted-foreground mb-4 border border-border/50">
              <User className="w-4 h-4" />
              About Martín
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Where <span className="text-gradient-arctic">creativity</span> meets{" "}
              <span className="text-gradient-aurora">technology</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              I bridge the gap between beautiful design and robust infrastructure, 
              creating digital experiences that are both visually stunning and technically sound.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="text-base sm:text-lg leading-relaxed">
                With over 8 years of experience, I've evolved from a graphic designer 
                fascinated by pixels to a multi-disciplinary professional who understands 
                that great products require both <span className="text-gradient-arctic font-medium">aesthetic excellence</span> and{" "}
                <span className="text-gradient-aurora font-medium">technical reliability</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey has taken me through the worlds of visual communication, 
                where I learned the power of good design, to the realm of DevOps and 
                build engineering, where I discovered the art of seamless automation 
                and infrastructure management.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, I help teams and organizations create products that not only 
                look exceptional but also perform flawlessly at scale. Whether it's 
                designing a brand identity or architecting a CI/CD pipeline, I bring 
                the same attention to detail and passion for excellence.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Leadership", "Problem Solving", "Creative Direction", "Technical Architecture"].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-frost-3/10 text-frost-3 rounded-full text-sm border border-frost-3/20"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-card p-4 sm:p-6 rounded-xl shadow-soft border border-border hover:shadow-arctic transition-arctic group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-frost-3/10 rounded-lg group-hover:bg-frost-3/20 transition-arctic">
                        <IconComponent className="w-5 h-5 text-frost-3" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gradient-arctic mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;