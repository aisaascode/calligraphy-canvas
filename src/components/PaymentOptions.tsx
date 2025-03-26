
import { useState } from "react";
import { CreditCard, Phone, Pen, Brush, ChevronDown, ChevronUp } from "lucide-react";

export function PaymentOptions() {
  const [showAllStyles, setShowAllStyles] = useState(false);
  
  const calligraphyStyles = [
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
      title: "Brush Calligraphy",
      description: "Dynamic Brush Lettering"
    },
    {
      icon: <Pen className="h-5 w-5 text-primary mr-3" />,
      title: "Copperplate",
      description: "Elegant Classical Script"
    },
    {
      icon: <Brush className="h-5 w-5 text-primary mr-3" />,
      title: "Flourished Script",
      description: "Decorative Embellishments"
    },
    {
      icon: <Pen className="h-5 w-5 text-primary mr-3" />,
      title: "Uncial Style",
      description: "Historic Medieval Script"
    }
  ];

  // Display only first 4 styles unless showAllStyles is true
  const displayedStyles = showAllStyles 
    ? calligraphyStyles 
    : calligraphyStyles.slice(0, 4);

  return (
    <div className="mt-8 p-6 bg-card rounded-lg border border-border">
      <h4 className="font-serif text-lg mb-4">AK Calligraphy</h4>
      
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-4 border border-border rounded-md flex items-center">
            <CreditCard className="h-5 w-5 text-primary mr-3" />
            <div>
              <h5 className="font-medium text-sm">Credit/Debit Cards</h5>
              <p className="text-xs text-muted-foreground">Visa, Mastercard, RuPay</p>
            </div>
          </div>
          <div className="p-4 border border-border rounded-md flex items-center">
            <Phone className="h-5 w-5 text-primary mr-3" />
            <div>
              <h5 className="font-medium text-sm">UPI Payments</h5>
              <p className="text-xs text-muted-foreground">GPay, PhonePe, Paytm</p>
            </div>
          </div>
        </div>
      </div>
      
      <h4 className="font-serif text-lg mt-6 mb-4">Calligraphy Styles</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedStyles.map((style, index) => (
          <div key={index} className="p-4 border border-border rounded-md flex items-center">
            {style.icon}
            <div>
              <h5 className="font-medium text-sm">{style.title}</h5>
              <p className="text-xs text-muted-foreground">{style.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {calligraphyStyles.length > 4 && (
        <button 
          onClick={() => setShowAllStyles(!showAllStyles)}
          className="mt-4 text-sm flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          {showAllStyles ? (
            <>
              Show Less <ChevronUp className="h-4 w-4 ml-1" />
            </>
          ) : (
            <>
              Show More Styles <ChevronDown className="h-4 w-4 ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
