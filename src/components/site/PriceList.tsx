const rows = [
  ["Hair Cut", "₹120"],
  ["Beard Shave", "₹80"],
  ["Face Massage", "₹100"],
  ["Hair Colour", "₹300"],
  ["Hair SPA", "₹300"],
  ["Face SPA", "₹400"],
];

export const PriceList = () => (
  <section className="bg-ink-2 border-y border-border/60 overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(2)].map((_, dup) => (
        <div key={dup} className="flex shrink-0">
          {rows.concat(rows).map(([n, p], i) => (
            <div key={`${dup}-${i}`} className="flex items-center gap-4 px-10 py-6">
              <span className="font-display text-2xl text-cream">{n}</span>
              <span className="text-gold font-display text-xl">{p}</span>
              <span className="ml-6 w-2 h-2 rounded-full bg-gold/60" />
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);
