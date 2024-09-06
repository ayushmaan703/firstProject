import React from "react";
import AboutProd from "../components/AboutProd";
import GeneralPurposeRange from "../constants/products/GeneralPurposeRange.js";
import IndustrialPurposeRange from "../constants/products/IndustrialPurposeRange.js";
import IndustrySpecificPurposeRange from "../constants/products/IndustrySpecificPurposeRange.js";
import MachineryPurposeRange from "../constants/products/MachineryPurposeRange.js";
import MicroPurposeRange from "../constants/products/MicroPurposeRange.js";
export default function Details() {
  return (
    <div className="flex flex-col  h-full w-full">
      <div className=" font-bold text-2xl sm:text-3xl  font-serif text-left  p-3   ">
        <span className="border-b-2 border-b-black font-bold">
          1. Low voltage AC Drives :
        </span>
      </div>
      <div className=" p-3 ml-10 ">
        <span className="text-xl  border-b border-b-black font-bold">
          1. General Purpose Range :
        </span>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {GeneralPurposeRange.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
      <div className="   p-3 ml-10 ">
        <span className=" text-xl  border-b border-b-black font-bold">
          2. Micro Purpose Range :
        </span>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {MicroPurposeRange.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
      <div className="   p-3 ml-10 ">
        <span className=" text-xl  border-b border-b-black font-bold">
          3. Machinery Purpose Range :
        </span>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 xl:grid-cols-6 gap-5">
          {MachineryPurposeRange.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
      <div className="  p-3 ml-10 ">
        <span className="text-xl  border-b border-b-black font-bold">
          4. Industrial Purpose Range :
        </span>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {IndustrialPurposeRange.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
      <div className="   p-3 ml-10 ">
        <span className="text-xl  border-b border-b-black font-bold">
          5. Industry Specific Purpose Range :
        </span>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 xl:grid-cols-6 gap-5">
          {IndustrySpecificPurposeRange.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
      <div className="   p-3 ml-10 ">
        <span className="border-b border-b-black font-bold">
          6. Legacy Purpose Range :
        </span>
        <div className=" ml-5 w-full flex flex-col font-light font-serif ">
          <span className="my-2"> Legacy drives </span>
          <span className="my-2">
            SE has developed a product life cycle management model aimed to
            provide proactive service offerings for maximizing product's
            availability and performance. The life cycle phases are active,
            classic, limited and obsolete. The availability of individual
            services varies dependent on the drive’s life cycle phase. This
            model provides not only optimum support to end-users but also a
            smooth transition to a new drive when the service life of the
            current drive ends.
          </span>
          <span className="my-3"> LV AC legacy</span>
          <span className="my-1"> drives ACS50</span>
          <span className="my-1"> ACS100/140/160</span>
          <span className="my-1"> ACS200 </span>
          <span className="my-1"> ACS300/350</span>
          <span className="my-1"> ACS400</span>
          <span className="my-1"> ACS501/502/504/506</span>
          <span className="my-1"> ACS601/604/607/624/627 </span>
          <span className="my-1"> ACV700 system drives</span>
          <span className="my-1"> Sami A/B/C</span>
          <span className="my-1"> Sami Flowstar </span>
          <span className="my-1"> Sami Microstar </span>
          <span className="my-1"> Sami Ministar</span>
        </div>
      </div>

      <div className="    p-3 ml-10 ">
        <p className="font-bold text-2xl sm:text-3xl  font-serif text-left  p-3 ">
          2. Low Voltage Products and Systems :
        </p>
        <div className="w-full ml-9 ">
          <div className=" ">
            <img
              src="/lowVoltage.png"
              alt="product"
              className="w-80% h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 border-4 border-black"
            />
            <span className="m-4 font-light font-serif  ">
              ABB provides a full range of low voltage solutions to connect,
              protect, control and measure a wide range of electrical
              installations, enclosures, switchboards, electronics and
              electromechanical devices. ABB's soft starters increase a motor's
              lifetime by protecting it from electrical stresses. They do so by
              letting you optimize starting currents that with conventional
              starting methods put lots of stress on the motor. With many
              built-in motor protection features, your motor is safe in its
              hands
            </span>
          </div>
        </div>
      </div>
      <div className="   p-3 ml-10 ">
        <p className="font-bold text-2xl sm:text-3xl  font-serif text-left  p-3 ">
          3. Standard Low Voltage Motors :
        </p>
        <div className="w-full m-9">
          <div className="  ">
            <img
              src="/highVoltage.png"
              alt="product"
              className="w-80% h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 border-4 border-black"
            />
            <span className="m-4 font-light font-serif  ">
              IEC Low voltage motors are suitable for all industries, all
              applications - fulfilling all national and international mandatory
              efficiency regulations. ABB offers two types of standard induction
              motors: Process performance and General performance motors. ABB’s
              synchronous motors for general purpose applications are optimized
              for high reliability and efficiency. Both slow and high speed
              motors are available and the design has delivered extremely good
              performance in different types of installations. The motors are
              connected direct-on-line or fed via variable speed drives. They
              are perfectly matched with ABB drives, which have proven
              themselves in numerous applications with superior performance.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
