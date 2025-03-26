
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-semibold tracking-tight">
              <span className="text-primary">Calligraphy</span>
              <span className="text-foreground">Canvas</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-pretty">
              Elevating the art of handwriting through timeless elegance and modern expression.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary ink-stroke">
                  Wedding Calligraphy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary ink-stroke">
                  Custom Lettering
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary ink-stroke">
                  Digital Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary ink-stroke">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary ink-stroke">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary ink-stroke">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary ink-stroke">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary ink-stroke">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new products and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="form-input rounded-lg bg-background"
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

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Calligraphy Canvas. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
