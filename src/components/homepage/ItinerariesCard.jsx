import Image from "next/image";
import Link from "next/link";

const ItinerariesCard = ({ itinerary }) => {
  return (
    <div role="listitem" className="flex flex-col text-left text-black">
      <Link
        href={itinerary.link}
        className="relative mb-2 w-full overflow-hidden bg-[#fcf8f7] pt-[130%]"
      >
        <Image
          src={itinerary.imageUrl}
          alt={itinerary.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-[101%_-1px_auto_auto] z-[1] origin-[100%_0] rotate-90 bg-[#faf1ee] px-4 py-2 text-black">
          <div className="relative top-[1] text-xs uppercase">Itinerary</div>
        </div>
      </Link>
      <div className="flex size-auto flex-col items-start">
        <div className="inline-block text-black">
          <h4 className="text-fs-xs font-bold">{itinerary.title}</h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="block py-2 text-xs uppercase text-gray-600">
            {itinerary.location}
          </div>
          <div className="order-1 flex justify-between self-stretch">
            <div className="flex">
              <div className="block py-2 text-xs uppercase text-gray-600">
                {itinerary?.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItinerariesCard;
