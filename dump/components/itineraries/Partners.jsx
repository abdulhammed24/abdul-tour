"use client";

import Image from "next/image";

const partnerLogos = [
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/61fbfb48de25be123cde14c9_iata-agent-logo.png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/6391f2081f65d6efd3e59719_TrustMyTravelLogo-B%26W.png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/61fbf61efd7410acbffbe46b_atol-logo.png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/61fbf932ac476732ef6065ae_sporting-agenda-logo.png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/663a299791aca360debcf905_British%20Airways%20Logo%202.png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/61fbfe6a5cbf979ca86e60bf_natural-selection-logo-p-1600.png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/645e2a4b3a1bfedf055c50e2_Nomad-Logo%20(1).png",
  "https://cdn.prod.website-files.com/607d4b1a6d462503e54273e7/6644b340a05e039c197e79ec_Conde%CC%81_Nast_Traveler_logo.svg.png",
];

const Partners = () => {
  return (
    <section className="pt-20">
      <div className="footer-upper">
        <div className="line-separator-horizontal align-center"></div>
        <div className="wrapper">
          <div className="py-8">
            <div className="text-center flex items-center justify-center flex-col">
              <h3 className="text-fs-sm">Partners &amp; Protection</h3>
            </div>
          </div>
        </div>
        <div className="line-separator-horizontal align-center"></div>
        <div className="wrapper">
          <div className="flex justify-center py-8 items-center">
            <div className="grid-cols-4 gap-y-12 hidden lg:grid">
              {partnerLogos.map((src, index) => (
                <div key={index} className="flex relative items-center justify-center size-full py-4 px-8">
                  <Image
                    src={src}
                    alt={`Partner logo ${index + 1}`}
                    className="size-full object-scale-down max-h-12 w-full"
                    width={144}
                    height={144}
                  />
                  {(index + 1) % 4 !== 0 && index !== partnerLogos.length - 1 && (
                    <div className="line-separator-vertical is-abolute-right is-hidden-mobile"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex lg:hidden w-full overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {partnerLogos.concat(partnerLogos).map((src, index) => (
                  <div key={index} className="flex items-center justify-center h-full w-44 relative px-4">
                    <Image
                      src={src}
                      alt={`Partner logo ${index + 1}`}
                      className="size-full object-scale-down max-h-12 w-full"
                      width={144}
                      height={144}
                    />

                 
                      <div className="line-separator-vertical is-abolute-right"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
