
import { Header } from "@/components/Header";
import { CalligraphyHero } from "@/components/CalligraphyHero";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { CalligraphyOptions } from "@/components/CalligraphyOptions";
import { FeaturedGallery } from "@/components/FeaturedGallery";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CalligraphyHero />
        <Services />
        <FeaturedGallery />
        <CalligraphyOptions />
        <Showcase />
        <Testimonials />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
