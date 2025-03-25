
import { CreditCard, Phone, Pen, Brush, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PaymentOptions() {
  const [showAllStyles, setShowAllStyles] = useState(false);
  
  const styles = [
    {
      icon: <Pen className="h-5 w-5 text-primary mr-3" />,
      title: "Gothic Style",
      description: "Traditional Blackletter Calligraphy"
    },
    {
      icon: <Pen className="h-5 w-5 text-primary mr-3" />,
      title: "Modern Script",
      description: "Contemporary Flowing Style"
    },
    {
      icon: <Brush className="h-5 w-5 text-primary mr-3" />,
      title: "Colored Calligraphy",
      description: "Vibrant multi-colored designs"
    },
    {
      icon: <Palette className="h-5 w-5 text-primary mr-3" />,
      title: "Custom Alphabets",
      description: "Full alphabet sets in any style"
    }
  ];

  const paymentMethods = [
    {
      icon: <CreditCard className="h-5 w-5 text-primary mr-3" />,
      title: "Credit/Debit Cards",
      description: "Visa, Mastercard, RuPay"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary mr-3" />,
      title: "UPI Payments",
      description: "GPay, PhonePe, Paytm"
    }
  ];

  return (
    <div className="mt-8 p-6 bg-card rounded-lg border border-border">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-serif text-lg">AK Calligraphy</h4>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowAllStyles(!showAllStyles)}
          className="text-xs"
        >
          {showAllStyles ? "Show Less" : "Show All Styles"}
        </Button>
      </div>
      
      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-medium mb-2 text-muted-foreground">Payment Methods</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="p-4 border border-border rounded-md flex items-center">
                {method.icon}
                <div>
                  <h5 className="font-medium text-sm">{method.title}</h5>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-sm font-medium mb-2 text-muted-foreground">Calligraphy Styles</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(showAllStyles ? styles : styles.slice(0, 2)).map((style, index) => (
              <div key={index} className="p-4 border border-border rounded-md flex items-center">
                {style.icon}
                <div>
                  <h5 className="font-medium text-sm">{style.title}</h5>
                  <p className="text-xs text-muted-foreground">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
