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
import { itineraries } from "@/data/itinerariesData";

export const metadata = {
  title: "Afcon Itineraries in Morocco",
  description: "Afcon 2025 Itineraries",
};

export default function Itineraries({ params }) {
  // Find the selected region based on the slug
  const selectedItinerary = itineraries.find((itinerary) => itinerary.slug === params.slug);

  // Handle the case where no matching region is found
  if (!selectedItinerary) {
    return <div>Region not found</div>;
  }

  return (
    <main className="mt-16 ">
      <BreadCrumbs title={selectedItinerary.title} />
      <Hero description={selectedItinerary.description} title={selectedItinerary.title} location={selectedItinerary.location} />
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
