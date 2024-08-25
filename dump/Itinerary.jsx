"use client";

import { useState } from "react";
import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Itinerary = () => {
  // Initial state: only the default day is open
  const [openDays, setOpenDays] = useState([1]);

  // Function to toggle the open state of a day
  const toggleDay = (day) => {
    if (openDays.includes(day)) {
      // Close the day if it's open
      setOpenDays(openDays.filter((d) => d !== day));
    } else {
      // Open the new day
      setOpenDays([...openDays, day]);
    }
  };

  const itineraryData = [
    {
      dayRange: "1-8",
      location: "Gili Lankanfushi",
      sublocation: "North Male Atoll",
      description: "Gili Lankanfushi Maldives is nestled on a coastal shelf in the North Malé Atoll, just a 20-minute speedboat away from Malé. This unique, environmentally friendly resort is set in a sparkling lagoon and is almost entirely on water.",
      images: [
        "https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/65b3a4327b8055e30035c8f6_64d0fc107b0dd8bec0089318_GLM_Exterior-View-of-Villa-Suite-with-Pool.jpg.webp",
        "https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/65b3a4337b8055e30035c992_Bedroom.webp",
        "https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/65b3a4337b8055e30035c96b_bedroom_view.webp",
        "https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/65c241fc71779d74aabf1864_gili-lankanfushi-32.webp",
      ],
    },
    {
      dayRange: "9-15",
      location: "Joali",
      sublocation: "Muravandhoo Island",
      description: "Located a short 45-minute seaplane ride away from Malé, JOALI Maldives presents 73 villas offering generously spacious accommodations, where the large private pools stand out as a true indulgence. Traditional Maldivian architecture, featuring thatched roofs and wood, blends seamlessly with contemporary art from renowned artists like Porky Hefer and Misha Khan.",
      images: [
        "https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/65b3a4337b8055e30035c992_Bedroom.webp",
        "https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/65b3a4327b8055e30035c8f6_64d0fc107b0dd8bec0089318_GLM_Exterior-View-of-Villa-Suite-with-Pool.jpg.webp",
      ],
    },
  ];

  return (
    <div id="Itinerary" className="flex relative flex-col gap-12">
      <div className="flex items-center w-auto justify-start">
        <div className="flex items-center overflow-hidden">
          <h2 className="text-fs-md">Itinerary</h2>
        </div>
      </div>
      <div className="flex gap-8 flex-col">
        {itineraryData.map((day, index) => (
          <div key={index} className={`accordion ${openDays.includes(index + 1) ? "open" : ""}`}>
            <div className="flex justify-between">
              <div
                className="flex flex-1 items-center justify-between gap-8 cursor-pointer"
                onClick={() => toggleDay(index + 1)}
              >
                <div className="flex items-center justify-center gap-8">
                  <div
                    className={`rounded-full justify-center items-center flex-col min-w-16 size-16 flex relative ${
                      openDays.includes(index + 1)
                        ? "bg-black text-white"
                        : "bg-white text-black border border-black"
                    }`}
                  >
                    <div className="text-center flex-col flex relative justify-center items-center">
                      <div>Day</div>
                      <div>{day.dayRange}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-paragraph">{day.location}</h5>
                    <div className="flex text-xs uppercase justify-start flex-wrap items-center text-gray-600">
                      <div>{day.sublocation}</div> <div> , </div> <div>Maldives</div>
                    </div>
                  </div>
                </div>
                <div className="w-auto">
                  {openDays.includes(index + 1) ? <MoveUp size={16} /> : <MoveDown size={16} />}
                </div>
              </div>
            </div>
            {openDays.includes(index + 1) && (
              <div className="lg:pl-24 overflow-hidden h-auto opacity-100">
                <div className="flex flex-col justify-start items-start pt-5">
                  <div className="relative self-stretch">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation={{
                        nextEl: `#swiper-button-next-${index}`,
                        prevEl: `#swiper-button-prev-${index}`,
                      }}
                    >
                      {day.images.map((src, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative w-full h-[16.5rem]">
                            <Image
                              src={src}
                              alt={`location ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                              priority
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    {/* Custom Navigation Buttons */}
                    <div className="pb-6 pr-6 flex gap-2 z-10">
                      <button id={`swiper-button-prev-${index}`} className="swiper-button-prev slider-btn small-simple">
                        <MoveLeft color="#000" size={16} />
                      </button>
                      <button id={`swiper-button-next-${index}`} className="swiper-button-next slider-btn small-simple">
                        <MoveRight color="#000" size={16} />
                      </button>
                    </div>
                  </div>
                  <p>{day.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
