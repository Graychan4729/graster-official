import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import TechAndHeritageSection from "@/components/TechAndHeritageSection";
import WholesaleAndFooter from "@/components/WholesaleAndFooter";
import { getScannedProductMedia } from "@/data/mediaScanner";

export default function Home() {
  const scannedMedia = getScannedProductMedia();
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <ProductsSection scannedMedia={scannedMedia} />
      <TechAndHeritageSection />
      <WholesaleAndFooter />
    </main>
  );
}
