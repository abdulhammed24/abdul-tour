"use client";

import { motion } from "framer-motion";

const sections = [
  { label: "Overview", id: "Overview" },
  { label: "Itinerary", id: "Itinerary" },
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
    className="text-black rounded-[8rem] whitespace-nowrap py-2 px-6 text-xs uppercase border hover:border-blue-500 hover:text-blue-500 border-[#e1e1e1]"
    onClick={() => scrollToSection(id)}
  >
    {label}
  </motion.button>
);

const StickyHeader = () => {
  return (
    <section className="overflow-hidden sticky top-16 py-4 w-full items-center justify-center flex-wrap bg-white z-40">
      {/* <section className="overflow-hidden sticky top-0 min-h-20 py-4 w-full items-center justify-center flex-wrap bg-white z-40"> */}
      <div className="flex justify-center items-center flex-1 flex-col absolute inset-[auto_0%_0%]">
        <div className="line-separator-horizontal"></div>
      </div>
      <div className="wrapper">
        <div className="relative">
          <motion.div className="flex relative justify-center items-center max-md:overflow-auto max-md:px-5 max-md:justify-start max-md:-mx-5 max-md:-mb-2 max-md:pb-4">
            <div className="flex gap-4">
              {sections.map((section) => (
                <StickyHeaderButton key={section.id} label={section.label} id={section.id} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StickyHeader;
