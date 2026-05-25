
const stats = [
  { v: "10+", l: "Years of craft" },
  { v: "20+", l: "Signature services" },
  { v: "5K+", l: "Happy clients" },
];

export const About = () => (
  <section id="about" className="py-12 md:py-16 bg-ink">
    <div className="container-luxe max-w-5xl reveal text-center">
      <p className="eyebrow mb-6">The House of Urban Trim</p>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream mx-auto max-w-3xl">
        A modern grooming house built on <em className="italic text-gold font-normal">craft.</em>
      </h2>
      <p className="mt-8 text-cream/70 leading-relaxed text-base md:text-xl mx-auto max-w-2xl">
        Tucked below Rishi Degree College in Himayatnagar, Urban Trim is where precision meets ritual. Our master
        stylists pair classic technique with contemporary detail — delivering a look that feels distinctly you.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 mx-auto max-w-4xl">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-3xl md:text-5xl text-gold">{s.v}</div>
            <div className="mt-1.5 text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
