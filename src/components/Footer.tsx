import { Mountain, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Work",
      links: ["Portfolio", "Case Studies", "Process", "Testimonials"]
    },
    {
      title: "Services",
      links: ["Graphic Design", "DevOps", "Build Engineering", "Consulting"]
    },
    {
      title: "Connect",
      links: ["LinkedIn", "GitHub", "Dribbble", "Email"]
    },
    {
      title: "Resources",
      links: ["Blog", "Downloads", "Templates", "Tools"]
    }
  ];

  return (
    <footer className="bg-polar-night-0 text-snow-storm-2 py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="h-6 w-6 text-frost-1 animate-mountain-glow" />
                <span className="text-xl font-semibold">Martín Pavesio</span>
              </div>
              <p className="text-snow-storm-0 leading-relaxed mb-6">
                Creating digital experiences that blend beautiful design with 
                robust technical architecture. Based in Buenos Aires, working globally.
              </p>
              <div className="flex items-center gap-2 text-sm text-snow-storm-0">
                <span>Crafted with</span>
                <Heart className="w-4 h-4 text-aurora-red" />
                <span>and lots of coffee</span>
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4 text-snow-storm-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-snow-storm-0 hover:text-frost-1 transition-arctic text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-polar-night-2 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-snow-storm-0">
                © {currentYear} Martín Pavesio. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-snow-storm-0 hover:text-frost-1 transition-arctic">
                  Privacy Policy
                </a>
                <a href="#" className="text-snow-storm-0 hover:text-frost-1 transition-arctic">
                  Terms of Service
                </a>
                <a href="#" className="text-snow-storm-0 hover:text-frost-1 transition-arctic">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;