
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalligraphyHero } from "@/components/CalligraphyHero";
import { Contact } from "@/components/Contact";

const AboutCalligraphy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CalligraphyHero />
        
        <section className="section">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Calligraphy: The Art of Beautiful Writing</h2>
              <p className="text-muted-foreground mb-4">
                Calligraphy, often referred to as "the art of beautiful writing," is a timeless artistic expression that has flourished across different cultures and historical periods. It blends the beauty of design with the structure of written language, creating a form of artistic communication that transcends simple handwriting.
              </p>
              <p className="text-muted-foreground">
                From the elegant Arabic scripts to the refined Chinese brush strokes and the flowing Western cursive, calligraphy has left a lasting mark on human civilization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src="/lovable-uploads/a8d13d4a-d865-41bf-8660-8940c2f53b3b.png" alt="Calligraphy Sample" className="w-full h-auto rounded-lg mb-4" />
                <h3 className="text-xl font-serif mb-2">Blackletter Style</h3>
                <p className="text-sm text-muted-foreground">Traditional gothic script showing the complete alphabet with uppercase and lowercase letters.</p>
              </div>
              <div>
                <img src="/lovable-uploads/6d3889c2-e6cb-41bd-b073-9845e455aff0.png" alt="Calligraphy Word" className="w-full h-auto rounded-lg mb-4" />
                <h3 className="text-xl font-serif mb-2">3D Effect Technique</h3>
                <p className="text-sm text-muted-foreground">The word "Calligraphy" written in gothic style with yellow shadow creating a beautiful 3D effect.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-4">The History of Calligraphy</h2>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Ancient Origins</h3>
              <p className="text-muted-foreground mb-4">
                The roots of calligraphy can be traced back to ancient civilizations where writing was not just a means of communication but also an art form. Early writing systems like Egyptian hieroglyphs, Mesopotamian cuneiform, and Chinese pictographs had artistic elements that evolved into distinct calligraphic styles.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Chinese Calligraphy:</strong> The Chinese were among the first to formalize calligraphy as an art form, dating back to around 2000 BCE. Chinese calligraphy, known as "shūfǎ" (书法), is deeply tied to philosophy, aesthetic principles, and spiritual discipline.</li>
                <li><strong>Islamic Calligraphy:</strong> Islamic culture prohibited the depiction of human figures in religious art, leading to the development of intricate Arabic calligraphy. Calligraphy in the Islamic world is often found in mosque decorations, Quran manuscripts, and architectural elements.</li>
                <li><strong>Greek and Roman Influence:</strong> The Greeks and Romans developed elegant scripts, including the well-known Roman capitals and uncial scripts, which later influenced medieval European calligraphy.</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div>
                  <img src="/lovable-uploads/c3c83477-ec08-4bc6-929a-cc511dd120ed.png" alt="Gothic Calligraphy" className="w-full h-auto rounded-lg mb-4" />
                  <h3 className="text-xl font-serif mb-2">Gothic Script</h3>
                  <p className="text-sm text-muted-foreground">Example of traditional Blackletter calligraphy style.</p>
                </div>
                <div>
                  <img src="/lovable-uploads/fee8a687-c2c8-441c-bbd3-1935a0c850fc.png" alt="Modern Calligraphy" className="w-full h-auto rounded-lg mb-4" />
                  <h3 className="text-xl font-serif mb-2">Modern Flourishing</h3>
                  <p className="text-sm text-muted-foreground">Contemporary calligraphy with decorative flourishes.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Medieval and Renaissance Calligraphy</h3>
              <p className="text-muted-foreground mb-4">
                During the Middle Ages, European monks meticulously copied religious texts, producing stunning illuminated manuscripts. Gothic script became popular during this period, characterized by its angular, dense letterforms. The Renaissance era brought about more refined and humanistic scripts, like italic and Roman scripts, emphasizing clarity and elegance.
              </p>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Calligraphy in the Modern Age</h3>
              <p className="text-muted-foreground">
                With the invention of the printing press in the 15th century, handwritten calligraphy saw a decline in daily use. However, it persisted as an art form, practiced by enthusiasts, scholars, and artists. Today, calligraphy enjoys a resurgence, thanks to its aesthetic appeal and modern applications in branding, design, and digital media.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-4">Styles of Calligraphy</h2>
              <p className="text-muted-foreground mb-6">
                Calligraphy varies across cultures, languages, and historical contexts. Here are some of the most notable styles:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif mb-3">Western Calligraphy</h3>
                  <p className="text-muted-foreground mb-2">
                    Western calligraphy is primarily based on Latin alphabets and includes styles such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Roman Capitals:</strong> Inspired by ancient Roman inscriptions, these letters are bold, formal, and highly structured.</li>
                    <li><strong>Uncial and Half-Uncial:</strong> Developed in the early Christian era, these rounded letters were commonly used in religious texts.</li>
                    <li><strong>Blackletter (Gothic Script):</strong> A highly decorative and angular script used extensively in medieval manuscripts.</li>
                    <li><strong>Italic Script:</strong> A more fluid, elegant script developed during the Renaissance, often used for personal writing and artistic projects.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif mb-3">Chinese Calligraphy</h3>
                  <p className="text-muted-foreground mb-2">
                    Chinese calligraphy is an ancient and highly revered art form. Major styles include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Seal Script (篆书, Zhuànshū):</strong> The oldest style, used in early Chinese inscriptions and seals.</li>
                    <li><strong>Clerical Script (隶书, Lìshū):</strong> A more refined, legible style developed for official documents.</li>
                    <li><strong>Regular Script (楷书, Kǎishū):</strong> A balanced and widely used calligraphic style, commonly seen in modern Chinese writing.</li>
                    <li><strong>Running Script (行书, Xíngshū):</strong> A semi-cursive style, often used for personal letters.</li>
                    <li><strong>Cursive Script (草书, Cǎoshū):</strong> A highly expressive and free-flowing style, difficult to read but beautiful to observe.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif mb-3">Arabic Calligraphy</h3>
                  <p className="text-muted-foreground mb-2">
                    Arabic calligraphy is deeply tied to Islamic art and the Quran. Common styles include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Kufic Script:</strong> A geometric and angular script often used for architectural inscriptions.</li>
                    <li><strong>Naskh Script:</strong> A simple, rounded script commonly used in printed Arabic books.</li>
                    <li><strong>Thuluth Script:</strong> A highly decorative script used in religious and artistic compositions.</li>
                    <li><strong>Diwani Script:</strong> An elegant script developed in the Ottoman Empire, known for its curves and fluidity.</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <img src="/lovable-uploads/38fbae8b-961a-49ad-9e9d-3cf5ef4a6efb.png" alt="Modern Calligraphy" className="w-full h-auto rounded-lg mb-4" />
                <h3 className="text-xl font-serif mb-2">Colored Modern Calligraphy</h3>
                <p className="text-sm text-muted-foreground">Contemporary calligraphy using blue ink with a distinct free-flowing style.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-4">Calligraphy Techniques and Tools</h2>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Basic Techniques</h3>
              <p className="text-muted-foreground mb-2">
                Mastering calligraphy requires practice, precision, and a steady hand. Some key techniques include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Proper Hand Positioning:</strong> Holding the pen or brush at the correct angle is crucial for creating consistent strokes.</li>
                <li><strong>Understanding Stroke Order:</strong> Many calligraphic traditions follow specific stroke orders to maintain balance and harmony.</li>
                <li><strong>Controlled Pressure:</strong> Varying the pressure applied to the tool can create different thicknesses in strokes, adding dynamism to the letters.</li>
              </ul>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Essential Calligraphy Tools</h3>
              <p className="text-muted-foreground mb-2">
                Different styles of calligraphy require distinct tools, but some common ones include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Brushes:</strong> Used in East Asian calligraphy, brushes allow for fluid and expressive strokes.</li>
                <li><strong>Dip Pens and Nibs:</strong> Common in Western calligraphy, these pens allow for precise and decorative letterforms.</li>
                <li><strong>Fountain Pens:</strong> A modern adaptation of dip pens, offering smoother ink flow.</li>
                <li><strong>Calligraphy Markers:</strong> Ideal for beginners, these provide easy control without requiring dipping.</li>
                <li><strong>Ink and Inkstone:</strong> Used in traditional Chinese and Japanese calligraphy, inkstones help grind and mix ink for writing.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-4">The Role of Calligraphy in Modern Society</h2>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Art and Design</h3>
              <p className="text-muted-foreground mb-2">
                Calligraphy remains a popular artistic medium, used in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Typography and Branding:</strong> Many luxury brands use calligraphic fonts to enhance elegance.</li>
                <li><strong>Graphic Design:</strong> Calligraphic elements appear in logos, posters, and book covers.</li>
                <li><strong>Wedding Invitations:</strong> Handwritten calligraphy adds sophistication to event invitations.</li>
              </ul>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Digital Calligraphy</h3>
              <p className="text-muted-foreground mb-4">
                With the rise of digital tools, calligraphy has evolved beyond pen and paper. Programs like Adobe Illustrator, Procreate, and digital brushes allow artists to create calligraphic works with greater flexibility. Calligraphy fonts are widely used in modern web design and branding.
              </p>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Calligraphy as a Hobby</h3>
              <p className="text-muted-foreground mb-4">
                Many people practice calligraphy for relaxation, mindfulness, and self-expression. It serves as a stress-relieving hobby, requiring patience and focus.
              </p>
              
              <h3 className="text-xl font-serif mt-6 mb-3">Educational and Cultural Importance</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>In Schools:</strong> Calligraphy is taught to improve handwriting and artistic skills.</li>
                <li><strong>In Religious Practices:</strong> Many sacred texts have been beautifully transcribed using calligraphy.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AboutCalligraphy;
