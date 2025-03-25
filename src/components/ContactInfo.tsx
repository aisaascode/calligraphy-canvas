
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
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
  );
}
