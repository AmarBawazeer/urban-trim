import { useState } from "react";
import elevate from "@/assets/flyer-elevate.png";
import inaugural from "@/assets/flyer-inaugural.png";
import festival from "@/assets/flyer-festival.png";
import services from "@/assets/flyer-services.png";
import { X } from "lucide-react";

const items = [
  { src: elevate, span: "md:row-span-2", label: "Elevate" },
  { src: inaugural, span: "", label: "Inaugural" },
  { src: festival, span: "md:row-span-2", label: "Festival" },
  { src: services, span: "", label: "Our Services" },
];

export const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="pb-12 md:pb-16 bg-ink">
      <div className="container-luxe">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense auto-rows-[260px] md:auto-rows-[300px] gap-3 md:gap-5">
          {items.map((it) => (
            <button
              key={it.label}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden ${it.span} reveal`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                {it.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 text-cream p-2" aria-label="Close">
            <X />
          </button>
          <img src={open} alt="" className="max-w-[92vw] max-h-[88vh] object-contain shadow-luxe" />
        </div>
      )}
    </section>
  );
};
