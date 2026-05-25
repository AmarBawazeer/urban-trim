import theessential from "@/assets/theessential.png";
import therefined from "@/assets/therefined.png";
import theritual from "@/assets/theritual.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

const offers = [
  {
    img: theessential,
    tag: "Most Loved",
    title: "The Essential",
    was: "₹850",
    now: "₹600",
    items: ["Hair Cut", "Hair Wash", "Shave", "Face D-Tan", "Head Massage"],
  },
  {
    img: therefined,
    tag: "Signature",
    title: "The Refined",
    was: "₹1,350",
    now: "₹1,100",
    items: ["Hair Cut", "Hair Wash", "Shave", "Clean Up", "Face D-Tan", "Hair SPA"],
  },
  {
    img: theritual,
    tag: "Indulgence",
    title: "The Complete Ritual",
    was: "₹2,000",
    now: "₹1,500",
    items: ["Hair Cut", "Hair Wash", "Shave", "Hair Colour", "Face D-Tan", "Foot Massage"],
  },
];

export const Offers = () => {
  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="offers" className="py-8 md:py-16 bg-ink">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 reveal">
          <p className="eyebrow mb-3 md:mb-5">Festival Offers</p>
          <h2 className="font-display text-3xl md:text-6xl leading-[1.05] text-cream">
            Curated <em className="italic text-gold font-normal">packages,</em> rare value.
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-muted-foreground">Three editions, every detail included. Limited season pricing.</p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {offers.map((o, i) => (
              <CarouselItem key={o.title} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <article
                  className="group h-full bg-ink-2 border border-border hover:border-gold/60 transition-all duration-500 flex flex-col reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <img
                      src={o.img}
                      alt={o.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 bg-gold text-primary-foreground">
                      {o.tag}
                    </span>
                  </div>

                  <div className="p-5 md:p-8 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl md:text-3xl text-cream">{o.title}</h3>
                    <div className="mt-2 md:mt-3 flex items-baseline gap-3">
                      <span className="font-display text-3xl md:text-4xl text-gold">{o.now}</span>
                      <span className="text-xs md:text-sm text-muted-foreground line-through">{o.was}</span>
                    </div>
                    <ul className="mt-4 md:mt-6 space-y-1.5 md:space-y-2 text-xs md:text-sm text-cream/75 flex-1">
                      {o.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 md:gap-3">
                          <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:6309480713"
                      className="mt-6 md:mt-8 inline-flex items-center justify-between text-xs md:text-sm tracking-wider uppercase border-t border-border pt-4 md:pt-5 text-cream hover:text-gold transition-colors shrink-0"
                    >
                      Book this package
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-border bg-ink-2 text-cream hover:bg-gold hover:text-ink -left-5" />
            <CarouselNext className="border-border bg-ink-2 text-cream hover:bg-gold hover:text-ink -right-5" />
          </div>
        </Carousel>

        {/* Dot indicators + swipe hint — mobile only */}
        <div className="flex md:hidden flex-col items-center gap-3 mt-6">
          <div className="flex items-center gap-2">
            {offers.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to offer ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-2 bg-gold"
                    : "w-2 h-2 bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-cream/40">Swipe to explore</p>
        </div>
      </div>
    </section>
  );
};
