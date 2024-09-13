import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (isLargeScreen && window.scrollY > 1500) ||
        (!isLargeScreen && window.scrollY > 3000)
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen, isVisible]);

  return (
    <>
      <div
        id="aboutUs"
        className="flex flex-col justify-center items-center border-b-2 border-black p-10"
      >
        <p
          className={` text-4xl sm:text-5xl  my-4 sm:m-8 border-b-2 border-black p-3 
            font-bold  font-lora text-center  ${
            isVisible
              ? isLargeScreen
                ? "animated-heading"
                : "animate-smallSpread"
              : ""
          }`}
        >
          ABOUT US
        </p>
        <div className=" font-light font-lora text-center mb-20">
          <p>
            For the 6 years that sheetal enterprises has been in business, the
            initial 6 years were restricted to distribution of Power Electronic
            Components such as Diodes, MOSFETS, Thyristors, IGBTSs, Relays,
            Fuses etc. from IR, Hind Rectifiers, OEN, Bussmann catering to the
            burgeoning Power electronics industry during that period.
          </p>
          <p>
            Our foray in Industrial Automation started at the end of the last
            millennium with the distribution of ABB make AC & DC Drives. In the
            following years we started adapting to the emerging markets and the
            latest trends in the Automation Industry. Thus we introduced other
            Automation products such as Sensors, Encoders, PLCs, HMIs,
            Instrumentation products, Machine Vision inspection, Industrial
            Safety products, Wireless communication etc. and positioned
            ourselves as One Stop Source for most of the Industrial Automation
            products.
          </p>
          <p>
            Evolving further we expanded in providing Customized Automation
            Solutions based on the above products for all verticals & Industries
            covering Steel, Power, Cement, Railways, Oil & Gas, Mines &
            Minerals, Paper, Printing, Packaging, Food & Beverages, Engineering,
            HVAC, Plastics, Chemicals & the latest entrant Solar Power. The list
            is endless & ever expanding.
          </p>
          <p>
            We realized that providing solution requires further support for
            implementation and started Panel manufacturing facilities. Panels
            are manufactured using steel enclosures procured from reputable
            enclosure manufactures having world class CNC equipment.
          </p>
          <p>
            Automation much like electricity has today become an omnipresent
            part of our lives at every step. Automation is now deep-seated in
            the manufacturing processes of all Industries, improving our
            operations, and making us more efficient.
          </p>
          <p>
            Energy is precious and should be conserved for better future. We do
            our bit by providing affordable Energy saving solutions for existing
            machines.
          </p>
        </div>
      </div>
    </>
  );
}
