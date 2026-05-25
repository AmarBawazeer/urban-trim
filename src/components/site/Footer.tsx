import { Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="bg-ink-2 border-t border-border/60">
    <div className="container-luxe py-16 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Urban Trim logo" className="h-12 w-12 object-contain shrink-0" />
          <div>
            <div className="font-display text-3xl text-cream">Urban Trim</div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold">Grooming Experts</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
          A modern grooming house in Himayatnagar — devoted to precision, ritual, and a quietly remarkable client
          experience.
        </p>
      </div>

      <div className="md:col-span-3">
        <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Visit</div>
        <p className="text-sm text-cream/80 leading-relaxed flex gap-3">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
          3-6-195/A, Malabar Gold Jewellers Lane, below Rishi Degree College, Himayatnagar — 29
        </p>
      </div>

      <div className="md:col-span-2">
        <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Hours</div>
        <p className="text-sm text-cream/80">Mon – Sun</p>
        <p className="text-sm text-cream/80">8:00 AM – 11:00 PM</p>
      </div>

      <div className="md:col-span-2">
        <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Connect</div>
        <a href="tel:6309480713" className="block text-sm text-cream/80 hover:text-gold transition-colors">
          +91 6309 480 713
        </a>
        <div className="mt-4 flex gap-3">
          <a href="#" className="p-2 border border-border rounded-full hover:border-gold hover:text-gold transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 border border-border rounded-full hover:border-gold hover:text-gold transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
        <span>© 2026 Urban Trim. All rights reserved.</span>
        <span>Crafted in Hyderabad</span>
      </div>
    </div>
  </footer>
);
