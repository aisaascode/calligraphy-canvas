
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-screen pt-24 hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center py-16 md:py-24">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium inline-block mb-6 animate-fade-in">
            Elegance in Every Stroke
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-6 animate-slide-in">
            The Art of <span className="text-primary">Beautiful</span> Writing
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl mb-8 leading-relaxed animate-fade-in delay-150 text-balance">
            Discover the timeless elegance of hand-crafted calligraphy for weddings, 
            special occasions, and personalized art pieces that capture the essence of your message.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link to="/services" className="btn-primary">
              Explore Services
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/shop" className="btn-outline">
              Browse Shop
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 md:mt-24 max-w-6xl w-full mx-auto relative">
          <div className="w-full aspect-[16/9] bg-accent/5 rounded-lg shadow-sm overflow-hidden glass animate-scale-in">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-90"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
