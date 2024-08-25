import Image from "next/image";
import Link from "next/link";

const ItinerariesCard = ({ itinerary }) => {
  return (
    <div role="listitem" className="flex text-black flex-col text-left">
      <Link href={itinerary.link} className="mb-2 bg-[#fcf8f7] w-full pt-[130%] relative overflow-hidden">
        <Image
          src={itinerary.imageUrl}
          alt={itinerary.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute py-2 px-4 rotate-90 origin-[100%_0] inset-[101%_-1px_auto_auto] z-[1] text-black bg-[#faf1ee]">
          <div className="relative top-[1] text-xs uppercase">Itinerary</div>
        </div>
      </Link>
      <div className="flex size-auto items-start flex-col">
        <div className="inline-block text-black">
          <h4 className="text-fs-xs font-bold">{itinerary.title}</h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-xs text-gray-600 uppercase block py-2">{itinerary.location}</div>
          <div className="order-1 flex justify-between self-stretch">
            <div className="flex">
              <div className="text-xs text-gray-600 uppercase block py-2">{itinerary.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItinerariesCard;
