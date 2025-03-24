
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Showcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showcaseItems = [
    {
      image: "https://images.unsplash.com/photo-1589561253831-b8421dd58261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      title: "Wedding Collections",
      description: "Elegant wedding invitations and stationery designed with precision and care.",
    },
    {
      image: "https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      title: "Custom Artworks",
      description: "Personalized calligraphy pieces that transform words into visual poetry.",
    },
    {
      image: "https://images.unsplash.com/photo-1595954379706-25645e0bb621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      title: "Lettering Workshops",
      description: "Learn the art of calligraphy through our expert-led workshops.",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === showcaseItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? showcaseItems.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    // Auto slide
    slideTimeoutRef.current = setTimeout(nextSlide, 6000);
    
    return () => {
      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }
    };
  }, [currentSlide]);

  const resetSlideTimeout = () => {
    if (slideTimeoutRef.current) {
      clearTimeout(slideTimeoutRef.current);
      slideTimeoutRef.current = setTimeout(nextSlide, 6000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
            Showcase Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our collection of handcrafted calligraphy works created for clients around the world.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Showcase Slider */}
          <div className="relative h-[500px] overflow-hidden rounded-xl">
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left">
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 flex space-x-4 z-30">
            <button
              onClick={() => {
                prevSlide();
                resetSlideTimeout();
              }}
              className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 text-foreground transition-all duration-300"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                resetSlideTimeout();
              }}
              className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 text-foreground transition-all duration-300"
              aria-label="Next slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  resetSlideTimeout();
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-primary w-6"
                    : "bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
