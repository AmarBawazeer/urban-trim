import { Phone, MessageCircle } from "lucide-react";

export const CTASection = () => (
  <section id="contact" className="relative py-12 md:py-16 bg-ink overflow-hidden">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gold blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent blur-3xl" />
    </div>

    <div className="relative container-luxe text-center reveal">
      <p className="eyebrow mb-6">Reservations</p>
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-cream max-w-4xl mx-auto">
        Your chair is <em className="italic text-gold font-normal">waiting.</em>
      </h2>
      <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
        Open daily, 8:00 AM to 11:00 PM. Walk-ins welcome — appointments preferred.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="tel:6309480713"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium hover:shadow-gold transition-shadow"
        >
          <Phone className="w-4 h-4" /> Call 6309 480 713
        </a>
        <a
          href="https://wa.me/916309480713"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Message on WhatsApp
        </a>
      </div>

      <div className="mt-14 text-sm text-muted-foreground tracking-wide">
        3-6-195/A · Below Rishi Degree College · Himayatnagar, Hyderabad — 29
      </div>
    </div>
  </section>
);
