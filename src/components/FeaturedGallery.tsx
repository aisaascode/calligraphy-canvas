
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function FeaturedGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const featuredImages = [
    {
      id: 1,
      src: "/lovable-uploads/076c459b-6092-4763-b49e-c6393fc1894e.png",
      title: "Gothic Calligraphy",
      category: "Gothic"
    },
    {
      id: 2,
      src: "/lovable-uploads/21c2dc92-8c28-4c7f-81c3-e019808f9451.png",
      title: "Ankush - Gradient Lettering",
      category: "Colored"
    },
    {
      id: 3,
      src: "/lovable-uploads/7dd894c8-1c2d-457a-aa60-da04d703971f.png",
      title: "Blackletter Alphabet",
      category: "Blackletter"
    },
    {
      id: 4,
      src: "/lovable-uploads/9ad81bb0-8b22-41ec-89d0-28b715bc373d.png",
      title: "Gothic Uppercase Alphabet",
      category: "Gothic"
    },
    {
      id: 5,
      src: "/lovable-uploads/f92e8482-3407-40b9-b5d1-0cff4d5029c0.png",
      title: "Happy New Year",
      category: "Blackletter"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
            Featured Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of our finest calligraphy works showcasing various styles and techniques.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {featuredImages.map((image) => (
              <CarouselItem key={image.id} className={isMobile ? "basis-full" : "basis-1/2 md:basis-1/3"}>
                <div className="relative group p-1">
                  <div className="overflow-hidden rounded-lg aspect-square bg-card border border-border">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-xs font-medium text-primary">{image.category}</span>
                      <h3 className="text-lg font-serif text-white">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-12">
          <Link to="/gallery">
            <Button variant="default" className="group">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
