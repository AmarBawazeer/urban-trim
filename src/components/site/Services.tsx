import { Scissors, Sparkles, Hand, Droplets, Palette, Wind } from "lucide-react";

const services = [
  { icon: Scissors, name: "Precision Haircut", price: "₹120", desc: "Bespoke cut, washed and styled to suit your face." },
  { icon: Wind, name: "Beard Sculpting", price: "₹80", desc: "Hot-towel shave and contouring by master barbers." },
  { icon: Hand, name: "Face Massage", price: "₹100", desc: "Restorative pressure-point ritual with cold therapy." },
  { icon: Sparkles, name: "De-Tan Treatment", price: "₹399", desc: "Gentle exfoliation to reveal a brighter complexion." },
  { icon: Palette, name: "Hair Colour", price: "₹300", desc: "Premium ammonia-free colour, custom blended." },
  { icon: Droplets, name: "Hair & Face SPA", price: "₹300+", desc: "Deep nourishment ritual for hair and skin." },
];

export const Services = () => (
  <section id="services" className="py-8 md:py-16 bg-ink-2 border-y border-border/60">
    <div className="container-luxe">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8 md:mb-16 reveal">
        <div>
          <p className="eyebrow mb-3 md:mb-5">Signature Services</p>
          <h2 className="font-display text-3xl md:text-6xl leading-[1.05] text-cream max-w-2xl">
            The full <em className="italic text-gold font-normal">grooming</em> repertoire.
          </h2>
        </div>
        <p className="md:max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
          Six core rituals refined over a decade — every appointment unhurried, every detail considered.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map(({ icon: Icon, name, price, desc }) => (
          <div
            key={name}
            className="group bg-ink-2 p-4 md:p-10 transition-colors hover:bg-ink relative overflow-hidden reveal"
          >
            <div className="flex items-center justify-between mb-4 md:mb-8">
              <Icon className="w-5 h-5 md:w-7 md:h-7 text-gold" strokeWidth={1.25} />
              <span className="font-display text-lg md:text-2xl text-cream">{price}</span>
            </div>
            <h3 className="font-display text-base md:text-2xl text-cream mb-1.5 md:mb-3">{name}</h3>
            <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
