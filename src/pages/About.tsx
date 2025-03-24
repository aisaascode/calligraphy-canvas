
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2 mb-4">
                About Calligraphy Canvas
              </h1>
              <p className="text-muted-foreground text-balance">
                The passion and craftsmanship behind our calligraphy services.
              </p>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Founded in 2015, Calligraphy Canvas began as a small passion project by our founder, 
                Sarah Chen, who discovered her love for calligraphy while studying fine arts. What 
                started as a hobby quickly blossomed into a thriving business dedicated to preserving 
                and celebrating the timeless art of beautiful handwriting.
              </p>
              
              <p>
                Our team of skilled calligraphers combines traditional techniques with modern 
                aesthetics to create stunning, personalized pieces that capture the essence of 
                your message. Whether it's a wedding invitation that sets the tone for your 
                special day or a custom piece of art that transforms your space, we approach 
                each project with meticulous attention to detail and artistic integrity.
              </p>
              
              <h2 className="text-2xl font-serif mt-8 mb-4">Our Mission</h2>
              
              <p>
                At Calligraphy Canvas, we believe in the power of the written word and the 
                unique beauty of handcrafted lettering. In an increasingly digital world, 
                we're committed to preserving the art of calligraphy while making it accessible 
                and relevant for modern needs.
              </p>
              
              <p>
                We strive to create meaningful connections through our work, whether it's 
                helping couples celebrate their love story or enabling businesses to express 
                their brand identity with distinction and elegance.
              </p>
              
              <h2 className="text-2xl font-serif mt-8 mb-4">Our Values</h2>
              
              <ul>
                <li><strong>Craftsmanship:</strong> We believe in the value of handcrafted work and the beauty that comes from human touch and imperfection.</li>
                <li><strong>Personalization:</strong> Each piece we create is unique and tailored to reflect the individual personality or brand it represents.</li>
                <li><strong>Education:</strong> We're passionate about sharing our knowledge and skills with others through workshops and courses.</li>
                <li><strong>Sustainability:</strong> We use eco-friendly materials whenever possible and minimize waste in our creative process.</li>
              </ul>
              
              <h2 className="text-2xl font-serif mt-8 mb-4">Meet Our Team</h2>
              
              <p>
                Our diverse team brings together calligraphers, designers, and artists with 
                various specialties and backgrounds. United by our love for lettering, we 
                collaborate to deliver exceptional work that exceeds our clients' expectations.
              </p>
              
              <p>
                We'd love to connect with you and discuss how we can bring your vision to life 
                through the art of calligraphy. Contact us today to start the conversation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
