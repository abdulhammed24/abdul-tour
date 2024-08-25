import { CircleDot } from "lucide-react";
import Image from "next/image";

const Hero = ({ title, location, description, heroImg }) => {
  return (
    <section className="overflow-clip">
      <div className="wrapper">
        <div className="grid auto-cols-fr grid-cols-1 gap-3 py-12 max-lg:pb-0 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="flex flex-col items-start justify-start gap-2 pb-6">
              <div className="rounded-[4.6875rem] bg-white px-4 py-2 text-xs uppercase text-black shadow-lg">
                Package
              </div>

              <div className="flex w-auto items-center justify-start">
                <div className="flex items-center overflow-hidden">
                  <h1 className="flex-initial text-fs-xl">{title}</h1>
                </div>
              </div>
            </div>
            <div className="line-separator-horizontal"></div>
            <div className="flex flex-col items-start justify-start gap-6 pt-6">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="text-xs uppercase text-gray-600">
                    location
                  </div>

                  <div className="text-paragraph">{location}</div>
                </div>
              </div>
              <div className="line-separator-horizontal"></div>
              <p className="lg:pr-6">{description}</p>
            </div>
            <div className="line-separator-vertical is-abolute-right is-hidden-mobile"></div>
            <div className="absolute inset-[0%] -z-[1] m-[-3rem_-7.625rem_-3rem_-3rem] bg-[#fcf8f7]"></div>
          </div>
          <div className="relative max-lg:pt-[60%]">
            <div className="absolute inset-0 flex h-full w-full items-end justify-start lg:inset-[0%_0%_0%_1.5rem] lg:w-[50vw]">
              <Image
                src={heroImg}
                alt={title}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                fill
                priority
                className="absolute inset-[0%] h-full w-full object-cover"
              />
              <div className="absolute inset-[auto_auto_0%_0%] m-5 flex items-center gap-2 rounded-lg bg-black bg-opacity-50 p-2 text-white">
                <CircleDot size={10} color="#ffffff" strokeWidth={5} />

                <div>Abdul Tour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
