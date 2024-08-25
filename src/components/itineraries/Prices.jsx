"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

// Desktop PriceCard component
const PriceCardDesktop = ({ period, price }) => (
  <div className="flex w-full flex-1 items-center justify-between gap-4 bg-white p-[1rem_.5rem_1rem_2rem]">
    <div className="flex w-36 items-center justify-start">
      <div className="whitespace-nowrap text-xs">{period}</div>
    </div>
    <div className="whitespace-nowrap text-paragraph">{price}</div>
    <Link href="" className="primary-btn min-w-[8rem] px-6 py-4 !text-[.65rem]">
      Enquire now
    </Link>
  </div>
);

// Mobile PriceCard component
const PriceCardMobile = ({ period, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full flex-col gap-4 bg-white p-4">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={toggleDetails}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="whitespace-nowrap text-xs">{period}</div>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-5">
          <div className="whitespace-nowrap text-paragraph">{price}</div>
          <div className="mt-4 flex items-center justify-between">
            <Link
              href=""
              className="primary-btn min-w-[8rem] px-6 py-4 !text-[.65rem]"
            >
              Enquire now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const ListSection = ({ title, items }) => (
  <div className="relative w-full border border-blue-500 p-8">
    <div className="mb-5 text-xs uppercase">{title}</div>
    <div className="self-stretch">
      <ul role="list" className="list-disc space-y-2 overflow-visible">
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
        <div className="mb-8 flex w-auto flex-col items-start justify-center">
          <div className="flex items-center overflow-hidden">
            <h2 className="text-fs-md">Pricing and inclusions</h2>
          </div>
          <p>For honeymoon or family pricing, please contact us</p>
        </div>
        <div className="relative">
          <div className="flex flex-col items-start justify-start gap-14 lg:flex-row">
            <div className="flex w-full flex-col items-start justify-center gap-6 lg:max-w-[49rem]">
              <div className="flex flex-1 flex-col items-start gap-2 self-stretch">
                {priceDetails.map((detail, index) =>
                  isMobile ? (
                    <PriceCardMobile
                      key={index}
                      period={detail.period}
                      price={detail.price}
                    />
                  ) : (
                    <PriceCardDesktop
                      key={index}
                      period={detail.period}
                      price={detail.price}
                    />
                  ),
                )}
                <div className="text-xs uppercase text-gray-600">
                  Disclaimer: Prices will be recalculated using the latest
                  exchange rates and offers
                </div>
              </div>
            </div>

            <div className="flex w-full flex-1 flex-col gap-6">
              <ListSection title="INclusions" items={inclusions} />
              <ListSection title="exclusions" items={exclusions} />
            </div>
          </div>
          <div className="absolute inset-0 left-auto right-[50%] -z-[1] -mb-20 -mt-40 w-screen bg-[#fcf8f7]"></div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
