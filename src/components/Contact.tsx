import { Mail, MapPin, Phone, Send, Calendar, Coffee } from "lucide-react";
import { ArcticButton } from "./ui/arctic-button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "martin@pavesio.dev",
      href: "mailto:martin@pavesio.dev"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Buenos Aires, Argentina",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full text-sm text-muted-foreground mb-4">
              <Coffee className="w-4 h-4" />
              Let's Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient-arctic">collaborate</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need stunning visuals, robust infrastructure, or seamless automation, 
              let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new projects and opportunities. 
                  Whether you're a startup looking to establish your brand or an 
                  enterprise needing infrastructure optimization, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-soft transition-arctic group"
                    >
                      <div className="p-3 bg-frost-3/10 rounded-lg group-hover:bg-frost-3/20 transition-arctic">
                        <IconComponent className="w-5 h-5 text-frost-3" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="pt-6 space-y-4">
                <ArcticButton variant="outline" size="sm" className="w-full group">
                  <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Schedule a Call
                </ArcticButton>
                <ArcticButton variant="ghost" size="sm" className="w-full">
                  Download Portfolio PDF
                </ArcticButton>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background p-8 rounded-2xl shadow-soft border border-border">
              <h3 className="text-xl font-semibold mb-6">Send a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Project discussion" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    rows={6}
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  />
                </div>

                <ArcticButton variant="frost" size="lg" className="w-full group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </ArcticButton>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-background rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-2">
              Prefer a different way to connect?
            </h3>
            <p className="text-muted-foreground mb-6">
              Find me on professional networks or check out my latest work
            </p>
            <div className="flex justify-center gap-4">
              {["LinkedIn", "GitHub", "Dribbble", "Behance"].map((platform) => (
                <ArcticButton key={platform} variant="ghost" size="sm">
                  {platform}
                </ArcticButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;