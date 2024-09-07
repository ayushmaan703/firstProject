import React from "react";
import AboutProd from "../components/AboutProd";
import GeneralPurposeRange from "../constants/products/GeneralPurposeRange.js";
import MotorControlAndDriveProd from "../constants/products/MotorControlAndDriveProd.js";
import IndustrialPurposeRange from "../constants/products/IndustrialPurposeRange.js";
import ProcessInstrumentsprod from "../constants/products/ProcessInstrumentsprod.js";
import IndustrySpecificPurposeRange from "../constants/products/IndustrySpecificPurposeRange.js";
import MachineryPurposeRange from "../constants/products/MachineryPurposeRange.js";
import MicroPurposeRange from "../constants/products/MicroPurposeRange.js";
import MotorControlAndDrives from "../components/MotorControlAndDrives.jsx";
import ProcessInstruments from "../components/ProcessInstruments.jsx";

export default function Details() {
  return (
    <div className="flex flex-col  h-full w-full">
      {/*section 1*/}
      <div>
        {/* Section 1: Low Voltage AC Drives */}
        <div className="font-bold text-2xl sm:text-3xl font-serif text-left p-3">
          <span className="border-b-2 border-b-black">
            1. Low Voltage AC Drives:
          </span>
        </div>

        {/* General Purpose Range */}
        <div className="p-3 ml-2 sm:ml-10">
          <span className="text-lg sm:text-xl border-b border-b-black font-bold">
            1. General Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-3">
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

        {/* Micro Purpose Range */}
        <div className="p-3 ml-2 sm:ml-10">
          <span className="text-lg sm:text-xl border-b border-b-black font-bold">
            2. Micro Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-3">
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

        {/* Machinery Purpose Range */}
        <div className="p-3 ml-2 sm:ml-10">
          <span className="text-lg sm:text-xl border-b border-b-black font-bold">
            3. Machinery Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-5 mt-3">
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

        {/* Industrial Purpose Range */}
        <div className="p-3 ml-2 sm:ml-10">
          <span className="text-lg sm:text-xl border-b border-b-black font-bold">
            4. Industrial Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-3">
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

        {/* Industry Specific Purpose Range */}
        <div className="p-3 ml-2 sm:ml-10">
          <span className="text-lg sm:text-xl border-b border-b-black font-bold">
            5. Industry Specific Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-5 mt-3">
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

        {/* Legacy Purpose Range */}
        <div className="p-3 ml-2 sm:ml-10">
          <span className="border-b border-b-black font-bold">
            6. Legacy Purpose Range:
          </span>
          <div className="ml-3 sm:ml-5 w-full flex flex-col font-light font-serif mt-3">
            <span className="my-2">Legacy drives</span>
            <span className="my-2">
              SE has developed a product life cycle management model aimed to
              provide proactive service offerings for maximizing product's
              availability and performance. The life cycle phases are active,
              classic, limited, and obsolete.
            </span>
            <span className="my-3">LV AC legacy drives:</span>
            <ul className="list-disc list-inside ml-5">
              <li>ACS50</li>
              <li>ACS100/140/160</li>
              <li>ACS200</li>
              <li>ACS300/350</li>
              <li>ACS400</li>
              <li>ACS501/502/504/506</li>
              <li>ACS601/604/607/624/627</li>
              <li>ACV700 system drives</li>
              <li>Sami A/B/C</li>
              <li>Sami Flowstar</li>
              <li>Sami Microstar</li>
              <li>Sami Ministar</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Low Voltage Products and Systems */}
        <div className="p-3 ml-2 sm:ml-10">
          <p className="font-bold text-2xl sm:text-3xl font-serif text-left p-3">
            2. Low Voltage Products and Systems:
          </p>
          <div className="w-full flex flex-col items-center">
            <img
              src="/lowVoltage.png"
              alt="product"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 border-4 border-black"
            />
            <span className="m-4 font-light font-serif text-center">
              ABB provides a full range of low voltage solutions to connect,
              protect, control, and measure a wide range of electrical
              installations.
            </span>
          </div>
        </div>

        {/* Section 3: Standard Low Voltage Motors */}
        <div className="p-3 ml-2 sm:ml-10">
          <p className="font-bold text-2xl sm:text-3xl font-serif text-left p-3">
            3. Standard Low Voltage Motors:
          </p>
          <div className="w-full flex flex-col items-center">
            <img
              src="/highVoltage.png"
              alt="product"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 border-4 border-black"
            />
            <span className="m-4 font-light font-serif text-center">
              IEC Low voltage motors are suitable for all industries, all
              applications, fulfilling all national and international mandatory
              efficiency regulations.
            </span>
          </div>
        </div>
      </div>
      {/*section 2*/}
      <div>
        <div>
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black ">
            Process & Machines Automation Systems :
          </span>
          <p className="font-medium m-5 ">
            Our Product Range Includes following-
          </p>
          <div className="font-serif ml-10">
            <p>• DG Synchronizing and Load Sharing</p>
            <p>• PLC based system for auto start, auto synchronization.</p>
            <p> • PLC based auto load Sharing.</p>
            <p>• Drive Control Systems </p>
            <p>• Various Types of Panels (LT, MCC, PMCC, HT etc.)</p>
            <p>• SCADA </p>
            <p>• Remote Device Management</p>
            <p>• Building & Home Automation System</p>
            <p>• GPRS Modems/ Routers</p>
            <p>• Utilities especially Power Networks</p>
            <p>• Wireless Backup Connection for POS/ATMs</p>
          </div>
          <p className="font-medium m-5">Our customer includes-</p>{" "}
          <div className="font-serif mb-20 ml-10">
            <p>• Housing Complex</p>
            <p>• Cement Plants </p>
            <p>• Power Sector</p>
            <p>• Industries in Govt./Private Sector</p>
            <p>• Hotels/Malls/Entertainment Centers </p>
            <p>• Hospital/Education Institutes</p>
          </div>
        </div>
        <div>
          <span className="font-bold text-2xl sm:text-4xl  font-serif text-right border-b border-black  ">
            HARMONICS :
          </span>
          <img
            src="/Schaffner.png"
            alt="product"
            className=" w-auto h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 border-2 border-black my-6 ml-7"
          />
          <div className="font-serif ml-7">
            <p>
              WE are pleased to offer harmonic filters, Input and Output chokes
              from work leaders Schaffner to Reduce harmonic levels in your
              installed base. We also undertake harmonic analysis and offer you
              a Complete solution as to what levels are present and What you
              need to do to reduce them.
            </p>
            <p className="my-5">
              Please find below brief description about Schaffner Group and its
              products.
            </p>
            <p>
              The Schaffner is Switzerland based Group, have R & D center in
              Germany and Production units in many different countries of world
              (like China, Thailand, USA, Germany & Hungry etc.). Schaffner is
              the international leader in the development and production of
              solution which ensure the efficient and reliable operation of
              electronic and electrical systems.
            </p>
          </div>
        </div>
        <div className="my-10 mx-4">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Services:
          </span>
          <div className="my-4">
            <div className="bg-slate-200 rounded-xl flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:pr-4 py-3">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black bg-lime-500 rounded-tl-xl p-2 ">
                  CONSULTANCY
                </span>
                <p className="mx-4 my-3 font-light font-serif">
                  Our Engineering team is available to help you select, prepare
                  costs, safety assessment, and third-party audits of various
                  applications as required at normal charges.
                </p>
                <p className="mx-4 my-3 font-light font-serif">
                  If you need a specific solution to your needs, feel free to
                  contact us for these requirements.
                </p>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/1.png"
                  alt="consultancy"
                  className="w-auto h-3/4 border-2 border-black"
                />
              </div>
            </div>

            <div className="bg-slate-200 rounded-xl flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:pr-4 py-3">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black bg-lime-500 rounded-tl-xl p-2 ">
                  DESIGN
                </span>
                <p className="mx-4 my-3 font-light font-serif">
                  At PMAS, we have multiple design teams for control systems,
                  hardware design, and software production, providing integrated
                  solutions with HMIs and SCADA.
                </p>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/2.png"
                  alt="design"
                  className="w-auto h-3/4 border-2 border-black"
                />
              </div>
            </div>

            <div className="bg-slate-200 rounded-xl flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:pr-4 py-3">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black bg-lime-500 rounded-tl-xl p-2 ">
                  TRAINING
                </span>
                <p className="mx-4 my-3 font-light font-serif">
                  We offer onsite and campus training on automation products and
                  certified courses for specific products.
                </p>
                <p className="mx-4 my-3 font-light font-serif">
                  Let us help identify and fulfill your training needs.
                </p>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/3.png"
                  alt="training"
                  className="w-auto h-3/4 border-2 border-black"
                />
              </div>
            </div>

            <div className="bg-slate-200 rounded-xl flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:pr-4 py-3">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black bg-lime-500 rounded-tl-xl p-2 ">
                  COMMISSIONING
                </span>
                <p className="mx-4 my-3 font-light font-serif">
                  We provide services like FAT, software commissioning,
                  installation verification, safety validation, system power-up,
                  SAT, I/O checking, training, and operational support.
                </p>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/4.png"
                  alt="commissioning"
                  className="w-auto h-3/4 border-2 border-black"
                />
              </div>
            </div>

            <div className="bg-slate-200 rounded-xl flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:pr-4 py-3">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black bg-lime-500 rounded-tl-xl p-2 ">
                  SUPPORT & AMC
                </span>
                <p className="mx-4 my-3 font-light font-serif">
                  We provide preventive maintenance, remote diagnostics, 24/7
                  callout support, and system auditing.
                </p>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/5.png"
                  alt="support and AMC"
                  className="w-auto h-3/4 border-2 border-black"
                />
              </div>
            </div>

            <div className="bg-slate-200 rounded-xl flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:pr-4 py-3">
                <span className="font-thin mb-2 mt-7 text-2xl sm:text-3xl border-b border-black bg-lime-500  rounded-tl-xl ">
                  PLC SYSTEMS PROGRAMMING SOFTWARE DEVELOPMENT
                </span>
                <p className="mx-4 my-3 font-light font-serif">
                  We specialize in PLC systems programming and software
                  development, working with PLCs from Siemens, Schneider,
                  Phoenix, and ABB.
                </p>
                <p className="mx-4 my-3 font-light font-serif">
                  We provide services for system topologies, PLC-based safety
                  systems, and legacy systems migration.
                </p>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/6.png"
                  alt="PLC programming"
                  className="w-auto h-3/4 border-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 mx-4">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Panel Manufacturer
          </span>
          <div className="font-serif ml-7 mt-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start my-8">
              <div className="sm:w-1/2 sm:mr-10">
                <p>
                  Programmable logic controller (PLC) control panels, also known
                  as PLC Automation Panels, are essential and efficient types of
                  control panels. They are generally used in a variety of
                  electronic and electrical circuit fittings. Our PLC Control
                  Panels are highly capable of delivering higher output with
                  less power consumption. Integrated with robust PLC logic and
                  precise PLC hardware programming.
                </p>
              </div>
              <div className="sm:w-1/2 flex justify-center items-center">
                <img
                  src="/servicesphoto/7.png"
                  alt="product"
                  className="w-auto h-3/4  border-2 border-black my-4"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <span className="font-bold text-xl font-serif text-center border-b border-black ml-5">
              Panel design, Manufacturing, Software Development & Commissioning
              for OEMs -
            </span>

            <div className="mt-5">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between my-8">
                <p className="mx-10 my-3 font-light font-serif text-xl">
                  Cable Stranding Machine:
                </p>
                <img
                  src="/servicesphoto/8.png"
                  alt="product"
                  className="sm:w-2/5 w-full h-auto border-2 border-black my-4"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between my-8">
                <p className="mx-10 my-3 font-light font-serif text-xl">
                  Marble Cutting Machine:
                </p>
                <img
                  src="/servicesphoto/9.png"
                  alt="product"
                  className="sm:w-2/5 w-full h-auto border-2 border-black my-4"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between my-8">
                <p className="mx-10 my-3 font-light font-serif text-xl">
                  Marble Polishing Machine:
                </p>
                <img
                  src="/servicesphoto/10.png"
                  alt="product"
                  className="sm:w-2/5 w-full h-auto border-2 border-black my-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*section 3 Products Catalog (1).pdf kudamn*/}
      <div>
        <div className="px-4 sm:px-8 py-8">
          {/* Heading */}
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Motor Control & Drives
          </span>

          {/* Image */}
          <img
            src="/motorContolAndDrives.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto border-4 border-black"
          />

          {/* Grid Layout for Products */}
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-6">
            {MotorControlAndDriveProd.map((item) => (
              <MotorControlAndDrives
                key={item.heading}
                heading={item.heading}
                details={item.details}
                liItem={item.liItems}
              />
            ))}
          </div>
        </div>
        <div className="px-4 sm:px-8 py-8">
          {/* Distributed Control Systems (DCS) Heading */}
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Distributed Control Systems (DCS)
          </span>

          {/* Image 1 */}
          <img
            src="/dcs1.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto border-4 border-black"
          />

          {/* Programmable Logic Controllers Heading */}
          <span className="font-bold text-2xl sm:text-2xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Programmable Logic Controllers:
          </span>

          {/* Details Section */}
          <div className="mt-5">
            <span className="font-serif text-left block ml-4 sm:ml-8 mb-4">
              AC500 / AC800 SERIES - Reliable, Powerful, Scalable:
            </span>

            {/* List of Features */}
            <ul className="ml-6 sm:ml-10 mt-2 list-disc list-inside space-y-2">
              <li>From 8 to 80,000 I/O</li>
              <li>No rack required</li>
              <li>Web Server Integrated</li>
              <li>IEC61131-3 Standard five IEC programming languages</li>
              <li>Profinet, EtherCAT, MODBUS-TCP, PROFIBUS</li>
              <li>Complete Hot-Standby System</li>
            </ul>
          </div>

          {/* Remote I/O System Section */}
          <div className="my-5">
            <span className="font-serif text-left block ml-4 sm:ml-8 mb-2">
              S500/S800 Remote I/O System:
            </span>
            <span className="ml-4 sm:ml-8 block">
              FBP bus module possesses compact construction and versatile
              flexibility.
            </span>
          </div>

          {/* AC500-eco Series Section */}
          <div className="mt-5">
            <span className="font-serif text-left block ml-4 sm:ml-8 mb-4">
              AC500-eco SERIES - Compact Solutions:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* List of Features */}
              <ul className="ml-6 sm:ml-10 list-disc list-inside space-y-2">
                <li>Cost-effective</li>
                <li>Fast Counter on On-Board CPU - 50khz</li>
                <li>No rack required</li>
                <li>Up to 10 I/O modules can be connected to CPU</li>
                <li>Extensive functional libraries</li>
                <li>IEC61131-3 Standard five IEC programming languages</li>
                <li>MODBUS-TCP</li>
              </ul>

              {/* Image 2 */}
              <img
                src="/dcs2.png"
                alt="product"
                className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto border-4 border-black"
              />
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8 py-8">
          {/* Soft Starters Heading */}
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Soft Starters:
          </span>

          {/* Content Section */}
          <div className="flex flex-col sm:flex-row mt-3 sm:mx-5">
            {/* Text Section */}
            <div className="font-serif flex-1 mb-4 sm:mb-0 sm:mr-6">
              {/* PSR-The compact range */}
              <div className="mb-4">
                <span className="text-base sm:text-lg md:text-xl font-semibold">
                  PSR-The compact range:
                </span>
                <span className="ml-2 block sm:inline text-sm sm:text-base">
                  Most compact of all the soft starter ranges, built-in bypass
                  reduces the energy loss & makes connection easier.
                </span>
              </div>

              {/* PSE Range */}
              <div className="mb-4">
                <span className="text-base sm:text-lg md:text-xl font-semibold">
                  PSE Range:
                </span>
                <span className="ml-2 block sm:inline text-sm sm:text-base">
                  Excellent choice for pumping applications, compact design &
                  advanced functionality, built-in bypass.
                </span>
              </div>

              {/* PST / PST(B) Soft starter */}
              <div className="mb-4">
                <span className="text-base sm:text-lg md:text-xl font-semibold">
                  PST / PST(B) Soft starter:
                </span>
                <span className="ml-2 block sm:inline text-sm sm:text-base">
                  Microprocessor-based soft starter, four-button keypad & the
                  logic structure of the menu make installation, commissioning &
                  operation easy. Advanced protection for the motor,
                  pre-warnings, torque control function.
                </span>
              </div>
            </div>

            {/* Image Section */}
            <img
              src="/softStarter.png"
              alt="product"
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 mx-auto border-4 border-black"
            />
          </div>
        </div>
        <div>
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black">
            Process Instruments:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 gap-6">
            {ProcessInstrumentsprod.map((item) => (
              <ProcessInstruments
                key={item.heading}
                heading={item.heading}
                img={item.img}
                liItem={item.liItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
