
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Gallery = () => {
  // Sample gallery items - in a real app, these would come from a database
  const galleryItems = [
    { id: 1, title: "Wedding Invitation Suite", category: "Wedding" },
    { id: 2, title: "Custom Quote Artwork", category: "Artwork" },
    { id: 3, title: "Business Cards Design", category: "Business" },
    { id: 4, title: "Event Place Cards", category: "Event" },
    { id: 5, title: "Holiday Card Collection", category: "Seasonal" },
    { id: 6, title: "Custom Envelope Addressing", category: "Wedding" },
    { id: 7, title: "Logo Design Process", category: "Business" },
    { id: 8, title: "Framed Anniversary Gift", category: "Gift" },
    { id: 9, title: "Workshop Materials", category: "Education" },
  ];

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

          {/* Gallery filter - simplified version */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground">
              All
            </button>
            <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
              Wedding
            </button>
            <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
              Business
            </button>
            <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
              Artwork
            </button>
            <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
              Events
            </button>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-card aspect-square rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg"
              >
                {/* Placeholder for an actual image */}
                <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Gallery Item Image</p>
                </div>
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-primary/90">{item.category}</span>
                  <h3 className="text-xl font-serif text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-outline">
              Load More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
