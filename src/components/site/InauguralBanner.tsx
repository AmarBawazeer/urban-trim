import { ArrowRight } from "lucide-react";

export const InauguralBanner = () => (
  <section className="relative py-16 md:py-20 bg-[#0a0a0a] border-y border-gold/20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50" />
    <div className="container-luxe relative flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="reveal">
        <p className="eyebrow mb-3">Inaugural Offer</p>
        <h2 className="font-display text-3xl md:text-5xl text-cream leading-tight">
          Up to 50% off <em className="italic text-gold font-normal">Hair & Beauty</em> Services
        </h2>
      </div>
      <div className="reveal shrink-0">
        <a
          href="tel:6309480713"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-primary-foreground font-semibold text-[15px] tracking-wide hover:shadow-gold transition-all"
        >
          Claim Offer
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);
