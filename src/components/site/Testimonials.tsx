import { Star } from "lucide-react";

const items = [
  {
    quote: "Easily the most refined grooming experience in Hyderabad. The attention to detail is unmatched.",
    name: "Arjun M.",
    role: "Regular client",
  },
  {
    quote: "Walked in for a haircut, walked out feeling brand new. The hot-towel shave is a ritual I look forward to.",
    name: "Rohit S.",
    role: "Verified visitor",
  },
  {
    quote: "Premium service at honest pricing. The team treats every appointment like it's their only one.",
    name: "Vikram K.",
    role: "Festival package",
  },
];

export const Testimonials = () => (
  <section className="py-8 md:py-16 bg-ink-2 border-y border-border/60">
    <div className="container-luxe">
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 reveal">
        <p className="eyebrow mb-3 md:mb-5">Word of Mouth</p>
        <h2 className="font-display text-3xl md:text-6xl text-cream leading-[1.05]">
          Trusted by <em className="italic text-gold font-normal">gentlemen</em>.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {items.map((t, i) => (
          <figure
            key={i}
            className="bg-ink p-5 md:p-10 border border-border reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex gap-1 mb-4 md:mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-display text-lg md:text-2xl leading-snug text-cream">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-border">
              <div className="text-cream text-sm md:text-base">{t.name}</div>
              <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
