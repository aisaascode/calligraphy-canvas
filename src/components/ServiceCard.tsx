
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ServiceCard({ title, description, icon, className, style }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group relative bg-card p-6 rounded-xl border border-border transition-all duration-500 hover:shadow-md hover:border-primary/20 card-hover",
        className
      )}
      style={style}
    >
      <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-pretty">
        {description}
      </p>
      
      <div className="absolute bottom-0 left-0 h-1 bg-primary/40 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
    </div>
  );
}
