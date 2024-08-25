import Hero from "@/components/homepage/Hero";
import ItinerariesCard from "@/components/homepage/ItinerariesCard";
import { itineraries } from "@/data/itinerariesData";

export const metadata = {
  title: `
      Attend AFCON 2025 from Nigeria | Get AFCON 2025 Tickets, Flight, Hotels and Tour Packages 
      | Experience 2025
      Africa Cup of Nations in Morocco from Nigeria with RibbonsXP | Book Hospitality
      Packages | Visit Morocco | TotalEnergies CAF Africa Cup of Nations 2025 |
      Trip to Morocco in 2024 | Online Ticket
    `,
  description: `Enjoy yourself at the 2025 CAF Africa Cup of Nations in Morocco from Nigeria. Book amazing
       Experience Packages with RibbonsXP in Morocco.
      The 2025 Africa Cup of Nations, also referred to as AFCON 2025 or CAN 2025, is scheduled to be the 
      35th edition of the biennial African football tournament organised by the Confederation of African Football (CAF). It will be hosted by Morocco for the second time and the first since 1988 in July & August 2025. Morocco was originally scheduled to host the 2015 edition, but withdrew due to fears stemming from the Western African Ebola virus epidemic. `,
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
