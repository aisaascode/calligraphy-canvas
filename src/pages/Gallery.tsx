import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Categories for filtering
const categories = ["All", "Gothic", "Modern", "Blackletter", "Colored", "Wedding", "Business", "Alphabets", "Sketches"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Gallery items with real uploaded images including the newly uploaded ones
  const galleryItems = [
    { 
      id: 1, 
      title: "Gothic Calligraphy", 
      category: "Gothic", 
      image: "/lovable-uploads/076c459b-6092-4763-b49e-c6393fc1894e.png",
      description: "Classic Gothic script with bold strokes and elegant letterforms"
    },
    { 
      id: 2, 
      title: "Ankush - Gradient Lettering", 
      category: "Colored", 
      image: "/lovable-uploads/21c2dc92-8c28-4c7f-81c3-e019808f9451.png",
      description: "Modern gradient lettering with vibrant yellow and red colors"
    },
    { 
      id: 3, 
      title: "Blackletter Alphabet", 
      category: "Blackletter", 
      image: "/lovable-uploads/7dd894c8-1c2d-457a-aa60-da04d703971f.png",
      description: "Complete blackletter alphabet with structured grid format"
    },
    { 
      id: 4, 
      title: "Gothic Uppercase Alphabet", 
      category: "Gothic", 
      image: "/lovable-uploads/9ad81bb0-8b22-41ec-89d0-28b715bc373d.png",
      description: "Full uppercase gothic alphabet with decorative lines and serifs"
    },
    { 
      id: 5, 
      title: "Happy New Year", 
      category: "Blackletter", 
      image: "/lovable-uploads/f92e8482-3407-40b9-b5d1-0cff4d5029c0.png",
      description: "Blackletter calligraphy featuring celebratory holiday text"
    },
    { 
      id: 21, 
      title: "Gothic Alphabet - Complete Set", 
      category: "Alphabets", 
      image: "/lovable-uploads/0dbf960f-7800-445c-98aa-b98aab36a919.png",
      description: "Complete uppercase and lowercase Gothic alphabet with traditional styling"
    },
    { 
      id: 22, 
      title: "Calligraphy - Yellow Shadow", 
      category: "Colored", 
      image: "/lovable-uploads/995bd84f-9982-4360-a58d-e910333105a0.png",
      description: "Blackletter calligraphy with yellow shadow effect"
    },
    { 
      id: 23, 
      title: "Vertical Gothic Script", 
      category: "Gothic", 
      image: "/lovable-uploads/24047b56-290f-40fe-8ca9-607643540c63.png",
      description: "Vertical arrangement of gothic letters with elegant styling"
    },
    { 
      id: 24, 
      title: "Blue Brush Calligraphy", 
      category: "Colored", 
      image: "/lovable-uploads/4abc5dd1-a629-46c0-9f40-9392b1d0d9eb.png",
      description: "Modern brush lettering with vibrant blue pigment"
    },
    { 
      id: 25, 
      title: "Calligraphy Art Piece", 
      category: "Modern", 
      image: "/lovable-uploads/e7038f1d-38fe-4ce7-91ea-f323513eadfa.png",
      description: "Stylized calligraphy with decorative elements and flourishes"
    },
    { 
      id: 6, 
      title: "Lined Paper Calligraphy", 
      category: "Modern", 
      image: "/lovable-uploads/ecf8f499-448c-42b8-a6bd-1e2fc00051b3.png",
      description: "Gothic script on notebook paper showing traditional lettering approach"
    },
    { 
      id: 7, 
      title: "Ankush on Pink", 
      category: "Colored", 
      image: "/lovable-uploads/a71b7db6-3cb2-4679-87c8-c3dacadee483.png",
      description: "Black ink calligraphy on vibrant pink watercolor background"
    },
    { 
      id: 8, 
      title: "Gothic Calligraphy Title", 
      category: "Gothic", 
      image: "/lovable-uploads/218c29e5-9c7f-4158-9ab5-f6751cf389be.png",
      description: "Gothic and calligraphy title text in classic black ink"
    },
    { 
      id: 9, 
      title: "Blackletter Script", 
      category: "Blackletter", 
      image: "/lovable-uploads/164f7d3b-8322-419a-9370-278dba719341.png",
      description: "Vertical blackletter lettering with elegant flourishes"
    },
    { 
      id: 10, 
      title: "Ankush Gradient", 
      category: "Colored", 
      image: "/lovable-uploads/26d105ff-8b52-42d4-8506-d63bd6a5694c.png",
      description: "Bold gradient colored lettering in yellow and red"
    },
    { 
      id: 11, 
      title: "Blackletter Practice", 
      category: "Blackletter", 
      image: "/lovable-uploads/b84bbd75-3740-46fa-8f07-255d3b9213d9.png",
      description: "Gothic blackletter alphabet practice piece with structured layout"
    },
    { 
      id: 12, 
      title: "Blackletter Alphabet Grid", 
      category: "Alphabets", 
      image: "/lovable-uploads/f279ccbe-15d4-4eab-933e-b4a02205e02a.png",
      description: "Complete gothic alphabet in grid format with precise letterforms"
    },
    { 
      id: 13, 
      title: "Gothic Alphabet Reference", 
      category: "Alphabets", 
      image: "/lovable-uploads/d9b28651-a308-435f-98cc-10f60f431a82.png",
      description: "Gothic alphabet reference sheet with multiple letter variations"
    },
    { 
      id: 14, 
      title: "Shadowed Gothic Alphabet", 
      category: "Alphabets", 
      image: "/lovable-uploads/1661967a-713c-410c-98f1-15711e6c49c1.png",
      description: "Complete gothic alphabet with shadowed effects"
    },
    { 
      id: 15, 
      title: "Happy New Year Lettering", 
      category: "Blackletter", 
      image: "/lovable-uploads/56fda0a7-1735-4ba4-91dc-50bee67a48b9.png",
      description: "Decorative blackletter calligraphy for New Year celebration"
    },
    { 
      id: 16, 
      title: "Ankush on Pink Background", 
      category: "Colored", 
      image: "/lovable-uploads/8df0c783-9f21-46dd-be68-6bb920d0beb0.png",
      description: "Black gothic lettering on vibrant pink watercolor wash"
    },
    { 
      id: 17, 
      title: "Lined Paper Practice", 
      category: "Sketches", 
      image: "/lovable-uploads/bde80346-404e-4e6c-ab55-ee88824cbd6d.png",
      description: "Gothic calligraphy practice on lined notebook paper"
    },
    { 
      id: 18, 
      title: "Preliminary Gothic Sketches", 
      category: "Sketches", 
      image: "/lovable-uploads/2b0d65eb-3c94-47cc-8155-f594c2f4bc2e.png",
      description: "Early stage calligraphy sketches showing planning process"
    },
    { 
      id: 19, 
      title: "Wedding Invitation Suite", 
      category: "Wedding", 
      image: "/placeholder.svg",
      description: "Elegant script for wedding invitations with flourishes"
    },
    { 
      id: 20, 
      title: "Business Cards Design", 
      category: "Business", 
      image: "/placeholder.svg",
      description: "Professional calligraphy for business branding"
    },
  ];

  // Filter gallery items based on active category
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Return the newest 4 images for the featured carousel
  const featuredItems = [...galleryItems]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2 mb-4">
              Calligraphy Gallery
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Browse through our portfolio of calligraphy projects, showcasing the artistry and 
              craftsmanship that goes into each piece.
            </p>
          </div>

          {/* Featured Calligraphy Carousel */}
          <div className="mb-16">
            <h2 className="text-xl font-serif mb-6 text-center">Featured Works</h2>
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredItems.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/2">
                      <div className="p-2">
                        <div 
                          className="group relative aspect-square rounded-xl overflow-hidden border border-border cursor-pointer"
                          onClick={() => openLightbox(item.image)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <span className="text-xs font-medium text-primary/90">{item.category}</span>
                            <h3 className="text-lg font-serif text-white">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </div>
              </Carousel>
            </div>
          </div>

          {/* Gallery filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-card aspect-square rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => openLightbox(item.image)}
              >
                {/* Display actual image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-primary/90">{item.category}</span>
                  <h3 className="text-xl font-serif text-white">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button 
                className="absolute top-4 right-4 text-white text-xl p-2 bg-black/50 rounded-full hover:bg-black/70"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          <div className="mt-12 text-center">
            <Button variant="outline">
              Load More
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
