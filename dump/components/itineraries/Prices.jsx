"use client"

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

// Desktop PriceCard component
const PriceCardDesktop = ({ period, price }) => (
  <div className="flex w-full p-[1rem_.5rem_1rem_2rem] bg-white justify-between items-center flex-1 gap-4">
    <div className="flex w-36 justify-start items-center">
      <div className="text-xs whitespace-nowrap">{period}</div>
    </div>
    <div className="text-paragraph whitespace-nowrap">{price}</div>
    <Link href="" className="primary-btn min-w-[8rem] py-4 px-6 !text-[.65rem]">
      Enquire now
    </Link>
  </div>
);

// Mobile PriceCard component
const PriceCardMobile = ({ period, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col w-full bg-white p-4 gap-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleDetails}>
        <div className="flex items-center w-full justify-between gap-2">
          <div className="text-xs whitespace-nowrap">{period}</div>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-5">
         <div className="text-paragraph whitespace-nowrap">{price}</div>
        <div className="flex justify-between items-center mt-4">
          <Link href="" className="primary-btn min-w-[8rem] py-4 px-6 !text-[.65rem]">
            Enquire now
          </Link>
          </div>
          </div>
      )}
    </div>
  );
};

const ListSection = ({ title, items }) => (
  <div className="relative p-8 w-full border border-blue-500">
    <div className="uppercase text-xs mb-5">{title}</div>
    <div className="self-stretch">
      <ul role="list" className="overflow-visible space-y-2 list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Prices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const priceDetails = [
    { period: "January & February", price: "£4,125.00 per adult sharing" },
    { period: "March to May", price: "£3,639.00 per adult sharing" },
    { period: "July to September", price: "£4,514.00 per adult sharing" },
    { period: "November and December", price: "£3,893.00 per adult sharing" },
  ];

  const inclusions = [
    "Honeymoon offers",
    "All meals & drinks",
    "Scheduled flight transfers",
    "All airport & road transfers",
    "All park & conservancy fees",
    "All-in-camp activities",
  ];

  const exclusions = ["International flights"];

  return (
    <section id="Prices" className="py-20">
      <div className="wrapper">
        <div className="flex items-start flex-col w-auto justify-center mb-8">
          <div className="flex items-center overflow-hidden">
            <h2 className="text-fs-md">Pricing and inclusions</h2>
          </div>
          <p>For honeymoon or family pricing, please contact us</p>
        </div>
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start gap-14 justify-start">
            <div className="flex w-full lg:max-w-[49rem] justify-center items-start gap-6 flex-col">
              <div className="flex items-start self-stretch flex-col gap-2 flex-1">
                {priceDetails.map((detail, index) =>
                  isMobile ? (
                    <PriceCardMobile key={index} period={detail.period} price={detail.price} />
                  ) : (
                    <PriceCardDesktop key={index} period={detail.period} price={detail.price} />
                  )
                )}
                <div className="text-gray-600 uppercase text-xs">
                  Disclaimer: Prices will be recalculated using the latest exchange rates and offers
                </div>
              </div>
            </div>

            <div className="flex flex-1 w-full flex-col gap-6">
              <ListSection title="INclusions" items={inclusions} />
              <ListSection title="exclusions" items={exclusions} />
            </div>
          </div>
          <div className="w-screen -mb-20 -mt-40 left-auto right-[50%] inset-0 -z-[1] bg-[#fcf8f7] absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
