import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { ArcticButton } from "./ui/arctic-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import arcticMountains from "@/assets/arctic-mountains.png";
import arcticMountainsDark from "@/assets/arctic-mountains-dark.png";

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mountainImage = mounted && theme === "dark" ? arcticMountainsDark : arcticMountains;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-polar">
      {/* Background Mountain Illustration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <img
          src={mountainImage}
          alt="Arctic Mountains"
          className="w-full h-full object-cover animate-float transition-opacity duration-500"
        />
      </div>

      {/* Floating Aurora Effect */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-aurora-red/10 dark:bg-aurora-red/20 rounded-full blur-3xl animate-aurora" />
      <div className="absolute top-40 right-32 w-48 h-48 bg-frost-1/20 dark:bg-frost-1/30 rounded-full blur-3xl animate-aurora" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-aurora-yellow/10 dark:bg-aurora-yellow/20 rounded-full blur-3xl animate-aurora" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-muted-foreground mb-6 shadow-soft border border-border/50">
            <div className="w-2 h-2 bg-aurora-green rounded-full animate-pulse" />
            Available for new projects
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient-arctic">Creating</span>
            <br />
            <span className="text-foreground">Digital</span>{" "}
            <span className="text-gradient-aurora">Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Graphic Designer, DevOps Specialist & Build Engineer crafting beautiful user experiences and robust infrastructure solutions.
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {["Visual Design", "Infrastructure", "CI/CD", "Automation"].map((skill, index) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-2 bg-card/60 backdrop-blur-sm rounded-lg text-xs sm:text-sm border border-border shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ArcticButton variant="frost" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Download Resume
            </ArcticButton>
            <ArcticButton variant="outline" size="lg" className="group">
              View Portfolio
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ArcticButton>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;