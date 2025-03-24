
import { Pen, PenTool, Palette, BookOpen } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  const services = [
    {
      title: "Wedding Calligraphy",
      description: "Elegant hand-lettered invitations, place cards, and vow books that add a personal touch to your special day.",
      icon: <Pen className="h-8 w-8" />,
    },
    {
      title: "Custom Lettering",
      description: "Personalized calligraphy pieces, quotes, and artworks designed to your specifications for gifts or personal display.",
      icon: <PenTool className="h-8 w-8" />,
    },
    {
      title: "Digital Design",
      description: "Digital calligraphy and lettering services for logos, branding, and online content with the same artisanal quality.",
      icon: <Palette className="h-8 w-8" />,
    },
    {
      title: "Workshops & Classes",
      description: "Learn the art of calligraphy through our in-person and virtual workshops, suitable for beginners and advanced students.",
      icon: <BookOpen className="h-8 w-8" />,
    },
  ];

  return (
    <section className="section relative" id="services">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
          Our Calligraphy Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Discover our range of personalized calligraphy services to add an elegant, artistic touch to your special moments and spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className={`animate-fade-in`}
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </section>
  );
}
