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
    <main>
      <BreadCrumbs />
      <Hero />
      <StickyHeader />
      <section>
        <div className="wrapper">
          <div className="grid grid-cols-1 gap-3 lg:gap-0 lg:grid-cols-2 auto-cols-fr">
            <div className="max-w-full lg:max-w-[30rem] pt-20 pb-16 w-full flex flex-col gap-20">
              <Highlight />
              <Itinerary  />
            </div>
            <div className="flex sticky top-40">
              <Map />
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Prices/>
      <EnquireNow />
      <Partners />
    </main>
  );
}
