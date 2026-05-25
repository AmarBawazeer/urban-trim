import { Phone, Star } from "lucide-react";

export const TopBar = () => (
  <div className="hidden md:block bg-ink-2 border-b border-border/60 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
    <div className="container-luxe flex items-center justify-between h-9">
      <div className="flex items-center gap-3">
        <Star className="w-3 h-3 text-gold fill-gold" />
        <span>Premium Men's Salon · Himayatnagar, Hyderabad</span>
      </div>
      <a href="tel:6309480713" className="flex items-center gap-2 hover:text-cream transition-colors">
        <Phone className="w-3 h-3" /> +91 6309 480 713
      </a>
    </div>
  </div>
);
