import { CircleDot } from "lucide-react";
import Image from "next/image";

const Hero = ({ title, location, description, heroImg }) => {
  return (
    <section className="overflow-clip">
      <div className="wrapper">
        <div className="grid py-12 grid-cols-1 gap-3 max-lg:pb-0 lg:gap-0 lg:grid-cols-2 auto-cols-fr">
          <div className="relative">
            <div className="flex flex-col gap-2 justify-start items-start pb-6">
              <div className="bg-white text-black uppercase rounded-[4.6875rem] py-2 px-4 text-xs">itinerary</div>

              <div className="justify-start items-center w-auto flex">
                <div className="w-[88%] items-center flex overflow-hidden">
                  <h1 className="flex-initial text-fs-xl">{title}</h1>
                </div>
              </div>
            </div>
            <div className="line-separator-horizontal"></div>
            <div className="flex pt-6 items-start justify-start flex-col gap-6">
              <div className="flex items-start justify-center gap-4 flex-col">
                <div className="flex flex-col justify-center items-start gap-1">
                  <div className="uppercase text-xs text-gray-600">location</div>

                  <div className="text-paragraph">{location}</div>
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                  <div className="uppercase text-xs text-gray-600">duration</div>
                  <div className="text-paragraph">Pricing upon request</div>
                </div>
              </div>
              <div className="line-separator-horizontal"></div>
              <p className="lg:pr-6">{description}</p>
            </div>
            <div className="line-separator-vertical is-abolute-right is-hidden-mobile"></div>
            <div className="m-[-3rem_-7.625rem_-3rem_-3rem] bg-[#fcf8f7] -z-[1] absolute inset-[0%]"></div>
          </div>
          <div className="relative max-lg:pt-[60%]">
            <div className="flex absolute w-full lg:w-[50vw] justify-start items-end h-full inset-0 lg:inset-[0%_0%_0%_1.5rem]">
              <Image
                // src="https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/66192c8cfe0b62f0b3765fb4_65b3a4744c8cd6786dd6d8d0_sunset-water-villa-with-pool-outdoor.webp"
                src={heroImg}
                alt={title}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                fill
                priority
                className="w-full h-full absolute inset-[0%] object-cover"
              />
              <div className="absolute inset-[auto_auto_0%_0%] m-5 text-white bg-black bg-opacity-50 rounded-lg p-2 flex items-center gap-2">
                <CircleDot size={10} color="#ffffff" strokeWidth={5} />

                {/* <div>Joali</div> */}
                <div>{location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
