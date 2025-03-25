
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { PaymentOptions } from "./PaymentOptions";

export function Contact() {
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
          <ContactForm />
          
          {/* Contact Information and Payment Options */}
          <div className="flex flex-col justify-between">
            <ContactInfo />
            <PaymentOptions />
          </div>
        </div>
      </div>
    </section>
  );
}
