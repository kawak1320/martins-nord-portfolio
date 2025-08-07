import { Palette, Server, Cog, Code, Users, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating visual identities and compelling user experiences",
      skills: ["Brand Identity", "UI/UX Design", "Typography", "Color Theory", "Adobe Creative Suite", "Figma"],
      color: "aurora-red"
    },
    {
      icon: Server,
      title: "DevOps Engineering",
      description: "Building scalable infrastructure and deployment pipelines",
      skills: ["AWS/Azure/GCP", "Docker & Kubernetes", "Terraform", "Monitoring & Logging", "CI/CD Pipelines", "Infrastructure as Code"],
      color: "frost-3"
    },
    {
      icon: Cog,
      title: "Build Engineering",
      description: "Optimizing development workflows and automation systems",
      skills: ["Jenkins", "GitHub Actions", "Build Optimization", "Dependency Management", "Release Automation", "Performance Tuning"],
      color: "aurora-green"
    }
  ];

  const additionalSkills = [
    { icon: Code, name: "Full-Stack Development", level: 85 },
    { icon: Users, name: "Team Leadership", level: 90 },
    { icon: Zap, name: "Problem Solving", level: 95 },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full text-sm text-muted-foreground mb-4">
              <Zap className="w-4 h-4" />
              Core Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Versatile <span className="text-gradient-arctic">skill set</span> for{" "}
              <span className="text-gradient-aurora">modern challenges</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining creative vision with technical expertise to deliver comprehensive solutions
            </p>
          </div>

          {/* Main Skill Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-background p-8 rounded-2xl shadow-soft border border-border hover:shadow-arctic transition-arctic group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-arctic mb-4`}>
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-arctic"
                        style={{ animationDelay: `${index * 0.2 + skillIndex * 0.1}s` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-${category.color}`} />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills with Progress */}
          <div className="bg-background p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {additionalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="text-center group">
                    <div className="inline-flex p-3 rounded-xl bg-frost-3/10 group-hover:bg-frost-3/20 transition-arctic mb-4">
                      <IconComponent className="w-6 h-6 text-frost-3" />
                    </div>
                    <h4 className="font-medium mb-3">{skill.name}</h4>
                    <div className="relative">
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className="bg-gradient-arctic h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.3}s`
                          }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 block">
                        {skill.level}%
                      </span>
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

export default Skills;