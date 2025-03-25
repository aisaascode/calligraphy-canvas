
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      
      // Reset form after submission
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="section relative" id="contact">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
          Contact Us
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Have questions about our services or want to collaborate? Reach out to us and we'll get back to you soon.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="text-xl font-serif mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="form-input"
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={cn(
                  "btn-primary w-full",
                  formStatus === "submitting" && "opacity-70 cursor-not-allowed"
                )}
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>
              
              {formStatus === "success" && (
                <div className="text-sm p-3 rounded-md bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="text-sm p-3 rounded-md bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      Heera Nagar Gali No. 1<br />
                      Near by Gautam and Company<br />
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:ankushkumar090809@gmail.com" className="ink-stroke">
                        ankushkumar090809@gmail.com
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-1">
                      <a href="mailto:cubemaster476@gmail.com" className="ink-stroke">
                        cubemaster476@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+919625654137" className="ink-stroke">
                        +91 9625654137
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 9am - 5pm IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed (Placeholder) */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden border border-border">
              <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
