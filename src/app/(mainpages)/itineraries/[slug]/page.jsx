import { notFound } from "next/navigation";
import BreadCrumbs from "@/components/itineraries/BreadCrumbs";
import EnquireNow from "@/components/itineraries/EnquireNow";
import Gallery from "@/components/itineraries/Gallery";
import Hero from "@/components/itineraries/Hero";
import Highlight from "@/components/itineraries/Highlight";
import Itinerary from "@/components/itineraries/Itinerary";
import Partners from "@/components/itineraries/Partners";
import Prices from "@/components/itineraries/Prices";
import StickyHeader from "@/components/itineraries/StickyHeader";
import { itineraries } from "@/data/itinerariesData";

export async function generateMetadata({ params }) {
  const selectedItinerary = itineraries.find(
    (itinerary) => itinerary.slug === params.slug,
  );

  return (
    selectedItinerary && {
      title: selectedItinerary.title,
      description: selectedItinerary.description,
      openGraph: {
        images: [
          {
            url: selectedItinerary.imageUrl,
          },
        ],
      },
    }
  );
}

export default function Itineraries({ params }) {
  const selectedItinerary = itineraries.find(
    (itinerary) => itinerary.slug === params.slug,
  );

  if (!selectedItinerary) {
    notFound();
  }

  return (
    <main className="mt-16">
      <BreadCrumbs title={selectedItinerary.title} />
      <Hero
        description={selectedItinerary.description}
        title={selectedItinerary.title}
        location={selectedItinerary.location}
        heroImg={selectedItinerary.imageUrl}
      />
      <StickyHeader />
      <Highlight highlights={selectedItinerary.highlights} />
      <Itinerary />
      <Gallery />
      <Prices priceDetails={selectedItinerary.pricing} />
      <EnquireNow
        title={selectedItinerary.title}
        heroImg={selectedItinerary.imageUrl}
      />
      <Partners />
    </main>
  );
}
