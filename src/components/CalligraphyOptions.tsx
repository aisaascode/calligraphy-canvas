
import { Pen, BookOpen, Palette, ShoppingBag } from "lucide-react";

export function CalligraphyOptions() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Our Calligraphy Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a variety of calligraphy services to meet your needs, from custom artwork to workshops.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
              <Pen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">Custom Calligraphy</h3>
            <p className="text-muted-foreground text-sm">
              Personalized calligraphy pieces for special occasions, gifts, or home decor.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Starting at ₹1,500
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                7-10 days turnaround
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">Workshops</h3>
            <p className="text-muted-foreground text-sm">
              Learn the art of calligraphy through our hands-on workshops for all skill levels.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Group sessions: ₹2,000 per person
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Private lessons: ₹3,500
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">Digital Design</h3>
            <p className="text-muted-foreground text-sm">
              Digital calligraphy for logos, branding, websites, and social media.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Logo design: ₹5,000+
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Digital artwork: ₹2,500+
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
              <ShoppingBag className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">Bulk Orders</h3>
            <p className="text-muted-foreground text-sm">
              Calligraphy services for weddings, events, and corporate gifts.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Wedding invites: ₹150+ per piece
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                Corporate: Custom quotes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
