
import { Pen } from "lucide-react";

export function CalligraphyHero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <Pen className="h-5 w-5 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">
            The Art of <span className="text-primary">Beautiful</span> Writing
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Discover the timeless art of calligraphy - a perfect blend of discipline, 
            creativity, and expression that has evolved across centuries and cultures.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <img 
              src="/lovable-uploads/a8d13d4a-d865-41bf-8660-8940c2f53b3b.png" 
              alt="Gothic Calligraphy" 
              className="h-20 md:h-32 rounded-lg shadow-md transition-transform hover:scale-105"
            />
            <img 
              src="/lovable-uploads/c3c83477-ec08-4bc6-929a-cc511dd120ed.png" 
              alt="Modern Calligraphy" 
              className="h-20 md:h-32 rounded-lg shadow-md transition-transform hover:scale-105"
            />
            <img 
              src="/lovable-uploads/38fbae8b-961a-49ad-9e9d-3cf5ef4a6efb.png" 
              alt="Colored Calligraphy" 
              className="h-20 md:h-32 rounded-lg shadow-md transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
