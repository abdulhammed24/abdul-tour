import Hero from "@/components/homepage/Hero";
import ItinerariesCard from "@/components/homepage/ItinerariesCard";
import { itineraries } from "@/data/itinerariesData";

export const metadata = {
  title: `Explore Abdul Tour: Buy Your Tickets Now`,
  description: `Discover the exciting adventures with Abdul Tour! Secure your tickets today and embark on a memorable journey. Whether you're looking for unique travel experiences or unforgettable destinations, Abdul Tour offers curated packages to meet your travel needs. Don't miss out—purchase your tickets now and start your adventure with Abdul Tour!`,
};

export default function Home() {
  return (
    <main className="mt-16">
      <Hero />

      <section className="py-20">
        <div className="wrapper">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 gap-y-6 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {itineraries.map((itinerary, index) => (
              <ItinerariesCard key={index} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
