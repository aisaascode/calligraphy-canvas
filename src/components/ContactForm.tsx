
import { useState } from "react";
import { Send, CreditCard, Pen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [bookingType, setBookingType] = useState<"workshop" | "custom" | "digital">("workshop");
  
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

        <div>
          <label className="block text-sm font-medium mb-2">
            Calligraphy Services
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button
              type="button"
              variant={bookingType === "workshop" ? "default" : "outline"}
              className="flex items-center justify-center gap-2"
              onClick={() => setBookingType("workshop")}
            >
              <Pen className="h-4 w-4" />
              <span>Workshop</span>
            </Button>
            <Button
              type="button"
              variant={bookingType === "custom" ? "default" : "outline"}
              className="flex items-center justify-center gap-2"
              onClick={() => setBookingType("custom")}
            >
              <CreditCard className="h-4 w-4" />
              <span>Custom Order</span>
            </Button>
            <Button
              type="button"
              variant={bookingType === "digital" ? "default" : "outline"}
              className="flex items-center justify-center gap-2"
              onClick={() => setBookingType("digital")}
            >
              <Mail className="h-4 w-4" />
              <span>Digital Work</span>
            </Button>
          </div>
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
  );
}
