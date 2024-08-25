"use client";

import { motion } from "framer-motion";

const sections = [
  { label: "Overview", id: "Overview" },
  // { label: "Itinerary", id: "Itinerary" },
  { label: "Gallery", id: "Gallery" },
  // { label: "When to go", id: "When-to-go" },
  { label: "Prices", id: "Prices" },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const yOffset = -84;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const StickyHeaderButton = ({ label, id }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="whitespace-nowrap rounded-[8rem] border border-[#e1e1e1] px-6 py-2 text-xs uppercase text-black hover:border-blue-500 hover:text-blue-500"
    onClick={() => scrollToSection(id)}
  >
    {label}
  </motion.button>
);

const StickyHeader = () => {
  return (
    <section className="sticky top-16 z-40 w-full flex-wrap items-center justify-center overflow-hidden bg-white py-4">
      {/* <section className="overflow-hidden sticky top-0 min-h-20 py-4 w-full items-center justify-center flex-wrap bg-white z-40"> */}
      <div className="absolute inset-[auto_0%_0%] flex flex-1 flex-col items-center justify-center">
        <div className="line-separator-horizontal"></div>
      </div>
      <div className="wrapper">
        <div className="relative">
          <motion.div className="relative flex items-center justify-center max-md:-mx-5 max-md:-mb-2 max-md:justify-start max-md:overflow-auto max-md:px-5 max-md:pb-4">
            <div className="flex gap-4">
              {sections.map((section) => (
                <StickyHeaderButton
                  key={section.id}
                  label={section.label}
                  id={section.id}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StickyHeader;
