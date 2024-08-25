import { Phone, Star } from "lucide-react";
import Link from "next/link";

const items = [
  "Atol Protected",
  "Best Price Guarantee",
  "5 star REVIEWS",
  "Carbon Offset",
];

const Hero = () => {
  return (
    <section className="relative flex h-[93vh] max-h-[93vh] min-h-[auto] flex-col items-center justify-center overflow-hidden bg-[#000000ab] text-center">
      <div className="absolute inset-[0%_auto_auto] z-10 mx-auto flex size-full flex-col items-center justify-center overflow-visible text-white">
        <div className="relative bottom-auto left-[0%] right-[0%] z-10 hidden h-12 self-stretch lg:inline-block">
          <div className="wrapper">
            <div className="relative grid grid-cols-2 justify-between gap-4 bg-[#03092200] px-8 py-3">
              <div className="flex justify-start">
                <div className="relative top-0 flex">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star key={index} size={14} fill="white" />
                    ))}
                </div>

                <div className="ml-2 text-xs uppercase">Customer Rating</div>
              </div>
              <div className="relative z-[1] justify-self-end">
                <Link
                  href="https://wa.me/447574836967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-end gap-x-2 text-xs uppercase text-white"
                >
                  <div>Speak to our experts</div>
                  <Phone size={20} fill="white" />
                  <div>+44 7574 836967</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="line-separator-horizontal w-full text-white"></div>
          </div>
        </div>
        <div className="flex-1 origin-[50%_100%] border-r border-r-white bg-white"></div>

        <div className="mt-6 flex w-full flex-col items-center">
          <div className="wrapper">
            <div className="relative overflow-hidden">
              <h1 className="overflow-visible text-fs-xl leading-[130%]">
                AFCON Travel Packages 2025/2026
              </h1>
            </div>
          </div>
        </div>

        <div className="flex-1 origin-[50%_0] border-r border-r-white bg-white"></div>

        <aside className="relative inset-[auto_0%_0%] flex min-h-[3.2rem] w-full items-center justify-center border-t border-t-white">
          <div className="is-absolute-top flex flex-col items-center justify-center">
            <div className="line-separator-horizontal w-full text-white"></div>
          </div>
          <div className="flex flex-1 items-center justify-start md:justify-center">
            <div className="home-hero_animate max-lg:flex">
              <div className="flex items-center justify-center gap-0 lg:justify-start lg:gap-16">
                <div className="whitespace-nowrap text-xs uppercase max-lg:px-8">
                  Atol Protected
                </div>
                <div className="whitespace-nowrap text-xs uppercase max-lg:px-8">
                  Best Price Guarantee
                </div>
                <div className="whitespace-nowrap text-xs uppercase max-lg:px-8">
                  5 star REVIEWS
                </div>
                <div className="whitespace-nowrap text-xs uppercase max-lg:px-8">
                  Carbon&nbsp;Offset
                </div>
              </div>
              <div className="flex md:hidden">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-0 lg:justify-start lg:gap-16"
                  >
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="whitespace-nowrap text-xs uppercase max-lg:px-8"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="relative z-[1] h-[100vh] w-full overflow-hidden brightness-[90%]">
        <div className="h-full">
          <div className="relative z-[1] h-[100vh] w-full overflow-hidden brightness-[90%]">
            <video
              width="100%"
              muted
              autoPlay
              playsInline
              loop
              className="absolute left-0 top-0 h-full w-full object-cover"
            >
              <source
                id="video-source"
                src="https://player.vimeo.com/progressive_redirect/playback/849023807/rendition/1080p/file.mp4?loc=external&signature=caf518854970a4daf6ba73ccae7dc30a17bcd2b8f6528c9768d300b314c0b27f"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
