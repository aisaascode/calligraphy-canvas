
import { useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Emily & James",
      role: "Wedding Clients",
      content: "The wedding invitations exceeded our expectations. Every detail was beautifully crafted, and our guests were amazed by the elegant calligraphy. Truly a work of art that set the perfect tone for our special day.",
      image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      name: "Michael Thompson",
      role: "Corporate Client",
      content: "The custom lettering created for our company logo and branding materials has given us a distinctive identity in the market. The attention to detail and understanding of our vision was impressive.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      name: "Sophia Chen",
      role: "Workshop Participant",
      content: "I attended the beginner's calligraphy workshop and left with skills I didn't think I could develop in just one session. The instructor was patient, knowledgeable, and made the learning process both enjoyable and accessible.",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  return (
    <section className="section">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Read about the experiences of those who have collaborated with us on their calligraphy projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Testimonial Display */}
        <div className="relative bg-card rounded-2xl p-8 shadow-sm border border-border">
          <Quote className="absolute text-primary/10 h-24 w-24 -top-4 -left-4 opacity-50" />
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "transition-opacity duration-500",
                  activeIndex === index ? "block" : "hidden"
                )}
              >
                <p className="text-lg mb-8 font-serif italic text-foreground/90 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-primary w-6"
                  : "bg-foreground/20 hover:bg-foreground/40"
              )}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
