
import { CreditCard, Phone, Pen } from "lucide-react";

export function PaymentOptions() {
  return (
    <div className="mt-8 p-6 bg-card rounded-lg border border-border">
      <h4 className="font-serif text-lg mb-4">AK Calligraphy</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="p-4 border border-border rounded-md flex items-center">
          <Pen className="h-5 w-5 text-primary mr-3" />
          <div>
            <h5 className="font-medium text-sm">Gothic Style</h5>
            <p className="text-xs text-muted-foreground">Traditional Blackletter Calligraphy</p>
          </div>
        </div>
        <div className="p-4 border border-border rounded-md flex items-center">
          <Pen className="h-5 w-5 text-primary mr-3" />
          <div>
            <h5 className="font-medium text-sm">Modern Script</h5>
            <p className="text-xs text-muted-foreground">Contemporary Flowing Style</p>
          </div>
        </div>
      </div>
    </div>
  );
}
