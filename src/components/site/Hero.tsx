import heroImg from "@/assets/man.png";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-ink">
    {/* Background portrait */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "70%",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />


    <div className="relative container-luxe min-h-[58vh] flex flex-col justify-start pt-8 md:pt-12 pb-16">
      <div className="max-w-3xl animate-fade-up z-10">
        <p className="eyebrow mb-6 text-[11px] font-semibold tracking-[0.3em]">Est. Hyderabad · Grooming Experts</p>
        <h1 className="font-display text-[14vw] md:text-[8rem] lg:text-[9.5rem] leading-[1] tracking-tight text-cream mb-6">
          Elevate
          <br />
          your <span className="text-gold">look.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-[17px] text-cream/70 leading-[1.6]">
          Precision haircuts, beard sculpting and signature grooming rituals — crafted for the modern gentleman in
          Himayatnagar.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="tel:6309480713"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-[15px] tracking-wide hover:bg-[#ebd074] transition-colors"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cream/20 text-cream/90 text-[15px] font-medium hover:border-cream/50 hover:bg-white/5 transition-all"
          >
            View Services
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 text-[10px] font-bold tracking-[0.25em] uppercase text-cream/60">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
            <span className="ml-3 pt-0.5">5.0 Verified Clients</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-cream/20" />
          <span className="pt-0.5">Open 8:00 AM – 11:00 PM</span>
        </div>
      </div>
    </div>

    {/* Side label */}
    <div className="hidden lg:flex absolute right-8 top-[60%] -translate-y-1/2 -rotate-90 origin-right text-[10px] tracking-[0.4em] font-medium uppercase text-cream/40">
      Urban Trim · 2026
    </div>
  </section>
);
