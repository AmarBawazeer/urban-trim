import { useReveal } from "@/hooks/use-reveal";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Offers } from "@/components/site/Offers";
import { PriceList } from "@/components/site/PriceList";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  useReveal();

  const ld = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Urban Trim",
    description: "Premium men's salon offering precision haircuts, beard styling, facials and grooming rituals.",
    telephone: "+91-6309480713",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3-6-195/A, below Rishi Degree College",
      addressLocality: "Himayatnagar, Hyderabad",
      postalCode: "500029",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 08:00-23:00",
    priceRange: "₹₹",
  };

  return (
    <div className="min-h-screen bg-ink text-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <PriceList />
        <About />
        <Services />
        <Offers />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
