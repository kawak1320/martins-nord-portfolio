import { ExternalLink, Github, Eye } from "lucide-react";
import { ArcticButton } from "./ui/arctic-button";

const Portfolio = () => {
  const projects = [
    {
      category: "Graphic Design",
      title: "Arctic Spirits Brand Identity",
      description: "Complete brand redesign for a premium vodka company, featuring arctic-inspired visual language and sustainable packaging design.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop&crop=center",
      tags: ["Brand Design", "Packaging", "Print"],
      color: "aurora-red"
    },
    {
      category: "DevOps",
      title: "Multi-Cloud Infrastructure",
      description: "Kubernetes-based microservices platform across AWS, Azure, and GCP with automated scaling and disaster recovery.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
      tags: ["Kubernetes", "Multi-Cloud", "Terraform"],
      color: "frost-3"
    },
    {
      category: "Build Engineering",
      title: "Zero-Downtime Deployment Pipeline",
      description: "Advanced CI/CD system with blue-green deployments, automated testing, and rollback capabilities for e-commerce platform.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center",
      tags: ["CI/CD", "Automation", "Jenkins"],
      color: "aurora-green"
    },
    {
      category: "UI/UX Design",
      title: "Nordic Finance Dashboard",
      description: "Clean, minimal dashboard for fintech startup featuring real-time data visualization and intuitive user flows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tags: ["Dashboard", "Fintech", "React"],
      color: "aurora-purple"
    },
    {
      category: "Infrastructure",
      title: "Serverless Monitoring Stack",
      description: "Cost-effective monitoring solution using AWS Lambda, CloudWatch, and custom alerting for startup ecosystem.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
      tags: ["Serverless", "Monitoring", "AWS"],
      color: "frost-1"
    },
    {
      category: "Brand Design",
      title: "Tech Conference Visual Identity",
      description: "Complete visual system for international developer conference, including signage, digital assets, and merchandise.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      tags: ["Event Design", "Signage", "Digital"],
      color: "aurora-orange"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-muted-foreground mb-4 border border-border/50">
              <Eye className="w-4 h-4" />
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Projects that <span className="text-gradient-arctic">define</span> my{" "}
              <span className="text-gradient-aurora">journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A curated selection of work spanning design, infrastructure, and engineering
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-arctic transition-arctic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-arctic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-polar-night-0/60 to-transparent opacity-0 group-hover:opacity-100 transition-arctic" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-arctic">
                    <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-arctic">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-arctic">
                      <Github className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 bg-${project.color}/10 text-${project.color} rounded text-xs font-medium`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-arctic transition-arctic">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-border/50 text-muted-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ArcticButton variant="ghost" size="sm" className="w-full group/btn">
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </ArcticButton>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <ArcticButton variant="outline" size="lg">
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </ArcticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;