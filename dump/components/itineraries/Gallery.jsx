"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

const Gallery = () => {
  return (
    <section id="Gallery" className="pt-20">
      <div className="wrapper">
        <div className="py-8">
          <div className="text-center flex items-center justify-center flex-col">
            <h3 className="text-fs-sm">What you&apos;ll see</h3>
          </div>
        </div>
        <div className="line-separator-horizontal align-center"></div>

        <div className="relative py-6">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            // slidesPerView={'auto'}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="relative h-[17rem] md:h-[30rem] lg:h-[35rem] w-full">
                <Image
                  src="https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/661a5b5265c67b79c3721966_65b3a476cfbbdff4deb79074_island-shot%402x.webp"
                  alt="Island Shot"
                  priority
                  fill
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[17rem] md:h-[30rem] lg:h-[35rem] w-full">
                <Image
                  src="https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/661a5b52c22bd0e51574e343_65b3a476cfbbdff4deb79042_b140415016-banner-size.webp"
                  alt="Banner Size"
                  priority
                  fill
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[17rem] md:h-[30rem] lg:h-[35rem] w-full">
                <Image
                  src="https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/645d1ff00648ee2951dcf3e7_Cheval%20Blanc%20Randheli.webp"
                  alt="Cheval Blanc Randheli"
                  priority
                  fill
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[17rem] md:h-[30rem] lg:h-[35rem] w-full">
                <Image
                  src="https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/661a5b5265c67b79c3721948_65c241fae3767c68bca7e949_vandhoo_breakfast_4b_550.webp"
                  alt="Vandhoo Breakfast"
                  priority
                  fill
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[17rem] md:h-[30rem] lg:h-[35rem] w-full">
                <Image
                  src="https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/661a5b527e7677278f567851_65c241fae3767c68bca7e92f_Untitled_3.webp"
                  alt="Untitled 3"
                  priority
                  fill
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 flex items-center transform -translate-y-1/2 z-10">
            <button className="swiper-button-prev slider-btn">
              <MoveLeft color="#000" size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 flex items-center transform -translate-y-1/2 z-10">
            <button className="swiper-button-next slider-btn">
              <MoveRight color="#000" size={20} />
            </button>
          </div>
        </div>

        <div className="line-separator-horizontal align-center"></div>

      </div>
    </section>
  );
};

export default Gallery;
