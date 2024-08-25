import { Phone, Star } from "lucide-react";
import Link from "next/link";

const { default: Image } = require("next/image");

const Hero = () => {
  return (
    <section className="flex relative bg-[#000000ab]  overflow-hidden text-center justify-center items-center flex-col h-[93vh] min-h-[auto] max-h-[93vh]">
      <div className="absolute mx-auto size-full flex-col z-10 text-white justify-center items-center flex overflow-visible inset-[0%_auto_auto]">
        <div className="relative hidden lg:inline-block left-[0%] right-[0%] h-12 z-10 bottom-auto self-stretch">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 bg-[#03092200] py-3 px-8 relative justify-between">
            <div className="flex items-center">
              <Image
                width={21}
                height={21}
                src="https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/63ca6177daa24262d85e1845_nelson-travel-uk-flag.png"
                alt="UK flag"
                className="size-5"
              />
              <div className="uppercase text-xs ml-2">£GBP</div>
            </div>
            <div className="flex justify-center">
              <div className="relative top-0 flex">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star key={index} size={14} fill="white" />
                  ))}
              </div>

              <div className="uppercase text-xs ml-2">Customer Rating</div>
            </div>
            <div className="relative z-[1] justify-self-end">
              <Link
                href="tel:+441235635749"
                className="flex items-center justify-end uppercase gap-x-2 text-white text-xs"
              >
                <div>Speak to our experts</div>
                <Phone size={20} fill="white" />
                <div>+44 (0)1235 635 749</div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="line-separator-horizontal text-white w-full"></div>
          </div>
        </div>
        <div className="bg-white border-r-white border-r flex-1 origin-[50%_100%]"></div>

        <div className="flex w-full flex-col mt-6 items-center">
          <div className="wrapper">
            <div className="relative overflow-hidden">
              <h1 className="text-fs-xl leading-[130%] overflow-visible">Timeless&nbsp;Holidays.Unlocked.</h1>
              <h1 className="text-fs-xl leading-[130%] overflow-visible">Nelson Travel</h1>
            </div>

            <div className="relative overflow-hidden mt-2">
              <div className="text-center text-fs-xs">Luxury African Safaris &amp; Tailor-Made Holidays</div>
            </div>
            <div className="my-8 inline-block">
              <Link href="" className="primary-btn is-biege w-full sm:w-fit">
                Be Inspired
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white border-r-white border-r flex-1 origin-[50%_0]"></div>

        <aside className="flex relative border-t w-full border-t-white justify-center items-center min-h-[3.2rem] inset-[auto_0%_0%]">
          <div className="flex justify-center items-center flex-col is-absolute-top">
            <div className="line-separator-horizontal text-white w-full"></div>
          </div>
          <div className="flex flex-1 justify-start md:justify-center items-center">
            <div className="max-lg:flex home-hero_animate">
              <div className="flex items-center justify-center lg:justify-start gap-0 lg:gap-16">
                <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Atol Protected</div>
                <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Best Price Guarantee</div>
                <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">5 star REVIEWS</div>
                <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Carbon&nbsp;Offset</div>
              </div>
              <div className="flex md:hidden">
                <div className="flex items-center justify-center lg:justify-start gap-0 lg:gap-16">
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Atol Protected</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Best Price Guarantee</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">5 star REVIEWS</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Carbon&nbsp;Offset</div>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-0 lg:gap-16">
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Atol Protected</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Best Price Guarantee</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">5 star REVIEWS</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Carbon&nbsp;Offset</div>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-0 lg:gap-16">
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Atol Protected</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Best Price Guarantee</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">5 star REVIEWS</div>
                  <div className="uppercase text-xs max-lg:px-8 whitespace-nowrap">Carbon&nbsp;Offset</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="z-[1] w-full h-[100vh] overflow-hidden relative brightness-[90%]">
        <div className="h-full">
          <div className="z-[1] w-full h-[100vh] overflow-hidden relative brightness-[90%]">
            <video
              width="100%"
              muted
              autoPlay
              playsInline
              loop
              className="object-cover absolute top-0 left-0 w-full h-full"
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
