
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { CalligraphyOptions } from "@/components/CalligraphyOptions";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
                Have questions about our calligraphy services or want to commission custom work?
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        <CalligraphyOptions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
