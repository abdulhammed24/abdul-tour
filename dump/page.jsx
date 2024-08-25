import BreadCrumbs from "@/components/itineraries/BreadCrumbs";
import EnquireNow from "@/components/itineraries/EnquireNow";
import Gallery from "@/components/itineraries/Gallery";
import Hero from "@/components/itineraries/Hero";
import Highlight from "@/components/itineraries/Highlight";
import Itinerary from "@/components/itineraries/Itinerary";
import Map from "@/components/itineraries/Map";
import Partners from "@/components/itineraries/Partners";
import Prices from "@/components/itineraries/Prices";
import StickyHeader from "@/components/itineraries/StickyHeader";

export default function Itineraries() {
  return (
    <main className="mt-16 ">
      <BreadCrumbs />
      <Hero />
      <StickyHeader />
      <Highlight />
      <Itinerary />

      <Gallery />
      <Prices />
      <EnquireNow />
      <Partners />
    </main>
  );
}
