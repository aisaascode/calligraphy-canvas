
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ShoppingBag, Download, Bookmark, BookOpen } from "lucide-react";

const Shop = () => {
  const products = [
    {
      title: "Digital Calligraphy Templates",
      description: "Downloadable templates for wedding invitations, place cards, and more. Perfect for DIY projects.",
      icon: <Download className="h-8 w-8" />,
    },
    {
      title: "Calligraphy Starter Kit",
      description: "Everything you need to start your calligraphy journey - pens, nibs, ink, and an instructional guide.",
      icon: <ShoppingBag className="h-8 w-8" />,
    },
    {
      title: "Custom Artwork Prints",
      description: "High-quality prints of original calligraphy artworks, perfect for home or office decoration.",
      icon: <Bookmark className="h-8 w-8" />,
    },
    {
      title: "Online Course Access",
      description: "Access to our comprehensive online calligraphy courses with step-by-step video tutorials.",
      icon: <BookOpen className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Shop Our Collection
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2 mb-4">
              Calligraphy Products
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Browse our carefully curated collection of calligraphy products, templates, 
              and educational resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ServiceCard
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              Coming Soon: New Product Lines
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              We're constantly expanding our product offerings. Sign up for our newsletter to 
              be the first to know about new releases and special promotions.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-input rounded-lg bg-background flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
