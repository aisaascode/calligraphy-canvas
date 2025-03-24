
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pen, PenTool, Palette, BookOpen, CalendarDays, Mail, FileText, Gift } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const Services = () => {
  const servicesList = [
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
    {
      title: "Event Calligraphy",
      description: "On-site calligraphy services for corporate events, exhibitions, and special occasions adding a personalized touch.",
      icon: <CalendarDays className="h-8 w-8" />,
    },
    {
      title: "Business Services",
      description: "Corporate branding, logo design, and business stationary with elegant calligraphy to elevate your brand identity.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Personalized Gifts",
      description: "Hand-crafted gifts featuring custom calligraphy, perfect for birthdays, anniversaries, and special occasions.",
      icon: <Gift className="h-8 w-8" />,
    },
    {
      title: "Consultation",
      description: "One-on-one consultation to discuss your calligraphy needs and create a custom plan for your project.",
      icon: <Mail className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Expertise
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2 mb-4">
              Calligraphy Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover our full range of personalized calligraphy services to add an elegant, 
              artistic touch to your special moments and spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
