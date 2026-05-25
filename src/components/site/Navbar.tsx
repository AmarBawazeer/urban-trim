import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const links = [
  { href: "#services", label: "Services" },
  { href: "#offers", label: "Offers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
        }`}
    >
      <div className={`container-luxe flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-20"}`}>
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Urban Trim logo" className={`object-contain transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`} />
          <span className="font-display text-xl md:text-2xl tracking-wide text-cream">Urban Trim</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-gold">Grooming</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-cream/80 hover:text-cream gold-underline pb-1"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:6309480713"
            className="px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-sm font-medium tracking-wide hover:shadow-gold transition-shadow"
          >
            Book Now
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-cream p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-ink-2 border-border/60">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Navigation menu</SheetDescription>
            <nav className="py-6 flex flex-col gap-5 mt-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-cream/90 tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:6309480713"
                className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-gold text-primary-foreground font-medium"
              >
                Book Now · 6309 480 713
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
