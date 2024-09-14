import React from "react";
import AboutProd from "../components/AboutProd";
import GeneralPurposeRange from "../constants/products/GeneralPurposeRange.js";
import MotorControlAndDriveProd from "../constants/products/MotorControlAndDriveProd.js";
import IndustrialPurposeRange from "../constants/products/IndustrialPurposeRange.js";
import ProcessInstrumentsprod from "../constants/products/ProcessInstrumentsprod.js";
import IndustrySpecificPurposeRange from "../constants/products/IndustrySpecificPurposeRange.js";
import levelProd from "../constants/products/levelProd.js";
import ThermoplasticEnclosuresProd from "../constants/products/ThermoplasticEnclosuresProd.js";
import someRandomProd from "../constants/products/someRandomProd.js";

import ACServoDrivesProd from "../constants/products/ACServoDrivesProd.js";
import MachineryPurposeRange from "../constants/products/MachineryPurposeRange.js";
import MicroPurposeRange from "../constants/products/MicroPurposeRange.js";
import MotorControlAndDrives from "../components/MotorControlAndDrives.jsx";
import ProcessInstruments from "../components/ProcessInstruments.jsx";
import ACServoDrives from "../components/ACServoDrives.jsx";
import Level from "../components/Level.jsx";
import ThermoplasticEnclosures from "../components/ThermoplasticEnclosures.jsx";
import SomeRandom from "../components/SomeRandom.jsx";

{
  /*only made for one part of this code so that i dont have to write it again (for DVP Series - Modular PLCs)*/
}
const liItem = [
  "SS2/SV2/ES2/EH2 Series",
  "Load Cell & Tension Control Modules.",
  "Maximum 512 I/Os.",
  "Built-in RS232 and RS485 ports.",
  "High Speed Pulse outputs-200KHz, 400KHz for servo applications.",
  "High Speed Pulse Inputs10KHz, 100KHz.",
  "Slim Size.",
  "Digital & Analog modules with various combinations.",
  "In Built Modbus ASCII/RTU Protocol.",
];
export default function Details() {
  return (
    <div className="flex flex-col  h-full w-full ">
      {/*section 1*/}
      <div>
        {/* Section 1: Low Voltage AC Drives */}

        <div className="font-bold   text-2xl sm:text-3xl font-serif text-left p-3">
          <span className="border-b-2 border-b-black ">
            1. Low Voltage AC Drives:
          </span>
        </div>

        {/* General Purpose Range */}
        <div className=" mb-3 ml-2 sm:ml-10  rounded-es-3xl rounded-se-3xl p-6">
          <span className="text-lg  sm:text-xl border-b border-b-black font-bold font-bold">
            1. General Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 ">
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
        <div className="p-3 ml-2 sm:ml-10 ">
          <span className="text-lg sm:text-xl border-b border-b-black font-bold ">
            2. Micro Purpose Range:
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  mt-3">
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3  mt-3">
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-3">
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3  mt-3">
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
        <div className="p-3 ml-2 sm:ml-10 ">
          <span className="border-b border-b-black font-bold">
            6. Legacy Purpose Range:
          </span>
          <div className="ml-3 sm:ml-5 w-full flex flex-col font-light font-lora mt-3 shadow-inner shadow-black p-8 rounded-3xl ">
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
        <div className="p-3 ml-2 sm:ml-10 ">
          <p className="font-bold text-2xl sm:text-3xl font-lora text-left p-3">
            2. Low Voltage Products and Systems:
          </p>
          <div className="w-full flex flex-col md:flex-row items-center shadow-inner shadow-black rounded-3xl p-10 bg-gradient-to-r from-blue-500 to-purple-500">
            <span className="m-4 font-medium font-serif text-lg text-left">
              ABB provides a full range of low voltage solutions to connect,
              protect, control, and measure a wide range of electrical
              installations.
            </span>
            <img
              src="/lowVoltage.png"
              alt="product"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black md:ml-32"
            />
          </div>
        </div>

        {/* Section 3: Standard Low Voltage Motors */}
        <div className="p-3 ml-2 sm:ml-10">
          <p className="font-bold text-2xl sm:text-3xl font-lora text-left p-3">
            3. Standard Low Voltage Motors:
          </p>
          <div className="w-full flex flex-col md:flex-row items-center shadow-inner shadow-black rounded-3xl p-10 bg-gradient-to-r from-blue-500 to-purple-500">
            <span className="m-4 font-light font-serif text-lg text-left">
              IEC Low voltage motors are suitable for all industries, all
              applications, fulfilling all national and international mandatory
              efficiency regulations.
            </span>
            <img
              src="/highVoltage.png"
              alt="product"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black md:ml-32"
            />
          </div>
        </div>
      </div>
      {/*section 2*/}
      <div className="mt-3">
        <div>
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-2 border-black ">
            Process & Machines Automation Systems :
          </span>
          <div className="shadow-inner shadow-black p-5 my-4 mx-8  rounded-3xl">
            <p className="font-medium m-5 ">
              Our Product Range Includes following-
            </p>
            <div className="font-lora ml-10">
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
          </div>
          <p className="font-medium m-5">Our customer includes-</p>{" "}
          <div className="font-lora mb-20 ml-10">
            <p>• Housing Complex</p>
            <p>• Cement Plants </p>
            <p>• Power Sector</p>
            <p>• Industries in Govt./Private Sector</p>
            <p>• Hotels/Malls/Entertainment Centers </p>
            <p>• Hospital/Education Institutes</p>
          </div>
        </div>
        <div className="p-3 ml-2 sm:ml-10">
          <span className="font-bold text-2xl sm:text-4xl  font-lora text-right border-b border-black  ">
            HARMONICS :
          </span>
          <div className="w-full flex flex-col md:flex-row items-center shadow-inner shadow-black rounded-3xl p-10 bg-gradient-to-r from-blue-500 to-purple-500 mt-6">
            <div className="font-lora ml-7">
              <p>
                WE are pleased to offer harmonic filters, Input and Output
                chokes from work leaders Schaffner to Reduce harmonic levels in
                your installed base. We also undertake harmonic analysis and
                offer you a Complete solution as to what levels are present and
                What you need to do to reduce them.
              </p>
              <p className="my-5">
                Please find below brief description about Schaffner Group and
                its products.
              </p>
              <p>
                The Schaffner is Switzerland based Group, have R & D center in
                Germany and Production units in many different countries of
                world (like China, Thailand, USA, Germany & Hungry etc.).
                Schaffner is the international leader in the development and
                production of solution which ensure the efficient and reliable
                operation of electronic and electrical systems.
              </p>
            </div>
            <img
              src="/Schaffner.png"
              alt="product"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black md:ml-32"
            />
          </div>
        </div>
        {/*Services*/}
        <div className="my-10 mx-4">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-2 border-black">
            Services:
          </span>
          <div className="my-4">
            {/*CONSULTANCY*/}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex flex-col sm:flex-row mt-4 shadow-inner shadow-black">
              <div className="sm:w-1/2 sm:pr-4 py-3 relative ">
                <span className="border-b-4    border-black  text-2xl sm:text-3xl rounded-tl-xl p-3 absolute left-0 top-0 ">
                  CONSULTANCY
                </span>
                <div className="mt-14 mx-5">
                  <p className="mx-4 my-3 font-light font-lora">
                    Our Engineering team is available to help you select,
                    prepare costs, safety assessment, and third-party audits of
                    various applications as required at normal charges.
                  </p>
                  <p className="mx-4 my-3 font-light font-lora">
                    If you need a specific solution to your needs, feel free to
                    contact us for these requirements.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/1.png"
                  alt="consultancy"
                  className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
            {/*DESIGN*/}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex flex-col sm:flex-row mt-4 shadow-inner shadow-black">
              <div className="sm:w-1/2 sm:pr-4 py-3 relative ">
                <span className="font-thin mb-1  text-2xl sm:text-3xl border-b-4 border-black  rounded-tl-xl p-3 absolute left-0 top-0">
                  DESIGN
                </span>
                <div className="mt-14 mx-5">
                  <p className="mx-4 my-3 font-light font-lora">
                    At PMAS, we have multiple design teams for control systems,
                    hardware design, and software production, providing
                    integrated solutions with HMIs and SCADA.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/2.png"
                  alt="design"
                  className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
            {/*TRAINING*/}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex flex-col sm:flex-row mt-4 shadow-inner shadow-black">
              <div className="sm:w-1/2 sm:pr-4 py-3 relative">
                <span className="font-thin mb-1 absolute left-0 top-0 text-2xl sm:text-3xl border-b-4 border-black rounded-tl-xl p-3 ">
                  TRAINING
                </span>
                <div className="mt-14 mx-5">
                  <p className="mx-4 my-3 font-light font-lora">
                    We offer onsite and campus training on automation products
                    and certified courses for specific products.
                  </p>
                  <p className="mx-4 my-3 font-light font-lora">
                    Let us help identify and fulfill your training needs.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/3.png"
                  alt="training"
                  className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
            {/*COMMISSIONING*/}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex flex-col sm:flex-row mt-4 shadow-inner shadow-black">
              <div className="sm:w-1/2 sm:pr-4 py-3 relative">
                <span className="font-thin mb-1 absolute left-0 top-0 text-2xl sm:text-3xl border-b-4 border-black  rounded-tl-xl p-3 ">
                  COMMISSIONING
                </span>{" "}
                <div className="mt-14 mx-5">
                  <p className="mx-4 my-3 font-light font-lora">
                    We provide services like FAT, software commissioning,
                    installation verification, safety validation, system
                    power-up, SAT, I/O checking, training, and operational
                    support.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/4.png"
                  alt="commissioning"
                  className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
            {/*SUPPORT & AMC*/}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex flex-col sm:flex-row mt-4 shadow-inner shadow-black">
              <div className="sm:w-1/2 sm:pr-4 py-3 relative">
                <span className="font-thin mb-1 absolute left-0 top-0 text-2xl sm:text-3xl border-b-4 border-black rounded-tl-xl p-3 ">
                  SUPPORT & AMC
                </span>
                <div className="mt-14 mx-5">
                  <p className="mx-4 my-3 font-light font-lora">
                    We provide preventive maintenance, remote diagnostics, 24/7
                    callout support, and system auditing.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/5.png"
                  alt="support and AMC"
                  className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
            {/* PLC SYSTEMS PROGRAMMING SOFTWARE DEVELOPMENT*/}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex flex-col sm:flex-row mt-4 shadow-inner shadow-black">
              <div className="sm:w-1/2 sm:pr-4 py-3  relative">
                <span className="font-thin mb-2 absolute left-0 top-0 text-2xl sm:text-3xl border-b-4 border-black  p-3 rounded-tl-xl ">
                  PLC SYSTEMS PROGRAMMING SOFTWARE DEVELOPMENT
                </span>
                <div className="mt-24 mx-5">
                  <p className="mx-4 my-3 font-light font-lora">
                    We specialize in PLC systems programming and software
                    development, working with PLCs from Siemens, Schneider,
                    Phoenix, and ABB.
                  </p>
                  <p className="mx-4 my-3 font-light font-lora">
                    We provide services for system topologies, PLC-based safety
                    systems, and legacy systems migration.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:px-4 flex justify-center items-center">
                <img
                  src="/servicesphoto/6.png"
                  alt="PLC programming"
                  className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-3xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  Panel Manufacturer*/}
        <div className="my-10 mx-4">
          <span className="font-extrabold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-2 border-black">
            Panel Manufacturer
          </span>
          <div className="font-lora ml-7 mt-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start my-8 shadow-inner shadow-black p-7 rounded-3xl   text-xl bg-gradient-to-r from-blue-500 to-purple-500 ">
              <div className="sm:w-1/2 sm:mr-10 ">
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
                  className="w-auto  h-3/4 transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-xl shadow-2xl shadow-black mb-10 md:ml-32"
                />
              </div>
            </div>
          </div>
          {/*Panel design, Manufacturing, Software Development & Commissioning for OEMs - */}
          <div className="mt-10">
            <div className="ml-5">
              <span className="font-semibold text-2xl font-lora text-center border-b-2 border-black ">
                Panel design, Manufacturing, Software Development &
                Commissioning for OEMs -
              </span>
            </div>
            <div className="mt-5 mx-8">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between my-8 shadow-inner shadow-black rounded-3xl md:px-10 md:py-2 px-5 bg-gradient-to-r from-blue-500 to-purple-500">
                <p className="mx-10 my-3 font-light font-lora text-2xl">
                  Cable Stranding Machine:
                </p>
                <img
                  src="/servicesphoto/8.png"
                  alt="product"
                  className="w-auto  h-3/4 transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-xl shadow-2xl shadow-black  md:ml-32"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between my-8 shadow-inner shadow-black rounded-3xl md:px-10 md:py-2 px-5 bg-gradient-to-r from-purple-500 to-blue-500">
                <p className="mx-10 my-3 font-light font-lora text-2xl">
                  Marble Cutting Machine:
                </p>
                <img
                  src="/servicesphoto/9.png"
                  alt="product"
                  className="w-auto  h-3/4 transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-xl shadow-2xl shadow-black  md:ml-32"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between my-8 shadow-inner shadow-black rounded-3xl md:px-10 md:py-2 px-5 bg-gradient-to-r from-blue-500 to-purple-500">
                <p className="mx-10 my-3 font-light font-lora text-2xl">
                  Marble Polishing Machine:
                </p>
                <img
                  src="/servicesphoto/10.png"
                  alt="product"
                  className="w-auto  h-3/4 transform transition-transform duration-500 ease-in-out hover:scale-110 my-5 rounded-xl shadow-2xl shadow-black  md:ml-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*section 3 Products Catalog (1).pdf kudamn*/}
      <div>
        {/* Motor Control & Drives*/}
        <div className="px-4 sm:px-8 py-8">
          {/* Heading */}
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
            Motor Control & Drives
          </span>

          {/* Image */}
          <img
            src="/motorContolAndDrives.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-9 mx-auto border-4  shadow-2xl shadow-black rounded-3xl "
          />

          {/* Grid Layout for Products */}
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 ">
            {MotorControlAndDriveProd.map((item) => (
              <MotorControlAndDrives
                key={item.heading}
                heading={item.heading}
                details={item.details}
                liItem={item.liItems}
                idx={item.idx}
              />
            ))}
          </div>
        </div>
        {/* Distributed Control Systems (DCS) Heading */}
        <div className="px-4 sm:px-8 py-8">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 p-1 border-black">
            Distributed Control Systems (DCS)
          </span>

          {/* Image 1 */}
          <div className="shadow-inner shadow-black  p-5 mt-5 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 ">
            <img
              src="/dcs1.png"
              alt="product"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-12 mx-auto rounded-3xl shadow-2xl shadow-black "
            />

            {/* Programmable Logic Controllers Heading */}
            <span className="font-bold text-2xl sm:text-2xl mt-32 sm:mt-20 font-lora text-center border-b border-black">
              Programmable Logic Controllers:
            </span>

            {/* Details Section */}
            <div className="mt-5 ">
              <span className="font-lora text-left block ml-4 sm:ml-8 mb-4 font-semibold">
                AC500 / AC800 SERIES - Reliable, Powerful, Scalable:
              </span>

              {/* List of Features */}
              <ul className="mx-6 sm:ml-10 mt-2 list-disc list-inside space-y-2 shadow-inner shadow-black p-4 rounded-3xl ">
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
              <span className="font-lora text-left block ml-4 sm:ml-8 mb-2 font-semibold">
                S500/S800 Remote I/O System:
              </span>
              <span className="ml-4 sm:ml-8 block">
                FBP bus module possesses compact construction and versatile
                flexibility.
              </span>
            </div>

            {/* AC500-eco Series Section */}
            <div className="mt-5">
              <span className="font-lora font-semibold text-left block ml-4 sm:ml-8 mb-4">
                AC500-eco SERIES - Compact Solutions:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-6 shadow-inner shadow-black p-4 rounded-3xl ">
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
                  className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-xl shadow-2xl shadow-black"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Soft Starters Heading */}
        <div className="px-4 sm:px-8 py-8">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
            Soft Starters:
          </span>

          {/* Content Section */}
          <div className="flex flex-col sm:flex-row mt-3 sm:mx-5 bg-gradient-to-r from-blue-500  to-purple-500 p-5 rounded-3xl shadow-inner shadow-black">
            {/* Text Section */}
            <div className="font-lora flex-1 mb-4 sm:mb-0 sm:mr-6">
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
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 md:mx-4 shadow-2xl shadow-black rounded-3xl"
            />
          </div>
        </div>
        {/*Process Instruments*/}
        <div>
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
            Process Instruments:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 mt-4 mx-5">
            {ProcessInstrumentsprod.map((item) => (
              <ProcessInstruments
                key={item.heading}
                heading={item.heading}
                img={item.img}
                liItem={item.liItem}
                idx={item.idx}
              />
            ))}
          </div>
        </div>
        {/* AC Servo Drives*/}
        <div>
          <div className="my-7">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
              AC Servo Drives:
            </span>
            <div className="w-full flex flex-col items-center">
              <img
                src="/acServoDrives/1.png"
                alt="product"
                className=" w-1/2 h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-2xl shadow-2xl shadow-black my-6 ml-7 "
              />
              <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-6">
                {ACServoDrivesProd.map((prod) => (
                  <ACServoDrives heading={prod.heading} liItem={prod.liItems} />
                ))}
              </div>
            </div>
          </div>
          {/* DVP Series - Modular PLCs:*/}
          <div className="my-7">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
              DVP Series - Modular PLCs:
            </span>
            <div className="mx-2 sm:ml-5 bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-5  flex flex-col justify-between sm:flex-row items-center shadow-inner shadow-black">
              <div className="my-4 flex flex-col">
                <ul className="list-disc list-inside mx-2 sm:mx-5 mt-2">
                  {liItem.map((item, index) => (
                    <li key={index}>
                      <span className="mb-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="/acServoDrives/2.png"
                alt="product"
                className="w-3/4 sm:w-auto h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 shadow-2xl shadow-black rounded-3xl my-4 sm:my-6 sm:ml-7 sm:mr-4"
              />
            </div>
          </div>
          {/*Hybrid Energy System HES Series: */}
          <div className="my-7">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
              Hybrid Energy System HES Series:
            </span>
            <div className="mx-2 sm:ml-5 bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-5  flex flex-col justify-between sm:flex-row items-center shadow-inner shadow-black">
              <div className="my-4 flex flex-col">
                <ul className="list-disc list-inside mx-2 sm:mx-5 mt-2">
                  <li>Superior Energy-Saving results</li>
                  <li>Low Oil Temperature</li>
                  <li>High Degree of Repeat Accuracy</li>
                  <li>Long Holding Pressure</li>
                  <li>Good Frequency Response</li>
                  <li>Suitable For Harsh Environments</li>
                </ul>
              </div>{" "}
              <img
                src="/acServoDrives/3.png"
                alt="product"
                className="w-3/4 sm:w-auto h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 shadow-2xl shadow-black rounded-3xl my-4 sm:my-6 sm:ml-7 sm:mr-4"
              />
            </div>
          </div>
          {/* AH 500 PLC Rack type PLC Fully integrated & Software interface:*/}
          <div className="my-7">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
              AH 500 PLC Rack type PLC Fully integrated & Software interface:
            </span>
            <div className="mx-2 sm:ml-5 bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-5  flex flex-col justify-between sm:flex-row items-center shadow-inner shadow-black">
              <div className="my-4 flex flex-col">
                <ul className="list-disc list-inside mx-2 sm:mx-5 mt-2">
                  <li>
                    Highly integrated software ISP Soft with Graphical Interface
                  </li>
                  <li>
                    Enhanced flexibility: Max. 100m between 2 local extension
                    racks
                  </li>
                  <li>Improved maintainability: Hot-swapping function</li>
                  <li>Dual-core multi-tasking processor</li>
                  <li>Execution speed: 0.3ms / 1k steps</li>
                  <li>
                    Max I/O points:
                    <ul className="ml-8 list-disc list-inside">
                      <li>DIO: Max. 4,352 points</li>
                      <li>AIO: Max. 544 channels</li>
                      <li>
                        RIO: Max. 125,440 digital points / 3,920 analog channels
                      </li>
                    </ul>
                  </li>
                  <li>Program capacity: Max. 256k steps</li>
                  <li>
                    Built-in isolated RS-232/422/485, Mini-USB, Ethernet, SD
                    Card 1.0
                  </li>
                </ul>
              </div>
              <img
                src="/acServoDrives/4.png"
                alt="product"
                className="w-3/4 sm:w-auto h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 shadow-2xl shadow-black rounded-3xl my-4 sm:my-6 sm:ml-7 sm:mr-4"
              />
            </div>
          </div>
          {/*Power Supply (SMPS): */}
          <div className="my-7">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
              Power Supply (SMPS):
            </span>
            <div className="mx-2 sm:ml-5 bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-5  flex flex-col justify-between sm:flex-row items-center shadow-inner shadow-black">
              <div className="my-4 flex flex-col">
                <ul className="list-disc list-inside mx-2 sm:mx-5 mt-2">
                  <li>Universal AC Input Expected life time: 10 years</li>
                  <li>{"High MTBF at > 700,000 hrs."}</li>
                  <li>RoHS Compliant</li>
                  <li>Corrosion-resistant Aluminum casing</li>
                  <li>Panel mounted</li>
                  <li>Available output: 5V, 12V & 24V DC</li>
                  <li>
                    Over voltage, Over temperature and Overload protections
                  </li>
                </ul>
              </div>{" "}
              <img
                src="/acServoDrives/5.png"
                alt="product"
                className="w-3/4 sm:w-auto h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 shadow-2xl shadow-black rounded-3xl my-4 sm:my-6 sm:ml-7 sm:mr-4"
              />
            </div>
          </div>
          {/* HMI (Human Machine Interface): */}
          <div className="my-7">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black">
              HMI (Human Machine Interface):
            </span>
            <div className="mx-2 sm:ml-5 bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-5  flex flex-col justify-between sm:flex-row items-center shadow-inner shadow-black">
              <div className="my-4 flex flex-col">
                <ul className="list-disc list-inside mx-2 sm:mx-5 mt-2">
                  <li>
                    4.2-Inch Standard High Color, 7 & 10.1-Inch High Color, Wide
                    Screen
                  </li>
                  <li>USB for high-speed data transfer</li>
                  <li>Supports Ethernet</li>
                  <li>
                    USB for direct connection to USB disk, Printer, and Mouse
                    (USB HOST)
                  </li>
                  <li>Supports Audio Output Interface (MP3, Wav Files)</li>
                </ul>
              </div>{" "}
              <img
                src="/acServoDrives/6.png"
                alt="product"
                className="w-3/4 sm:w-auto h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 shadow-2xl shadow-black rounded-3xl my-4 sm:my-6 sm:ml-7 sm:mr-4"
              />
            </div>
          </div>
        </div>
        {/*levels */}
        <div className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 ">
            {levelProd.map((prod) => (
              <Level
                key={prod.heading}
                heading={prod.heading}
                img={prod.img}
                subHeading={prod.subHeading}
                details={prod.details}
              />
            ))}
          </div>
        </div>
        {/* Thermoplastic Enclosures*/}
        <div className="my-8">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black ">
            Thermoplastic Enclosures
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 mt-4">
            {ThermoplasticEnclosuresProd.map((prod) => (
              <ThermoplasticEnclosures
                key={prod.heading}
                img={prod.img}
                details={prod.details}
              />
            ))}
          </div>
        </div>
        {/* SomeRandom*/}
        <div className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 ">
            {someRandomProd.map((prod) => (
              <SomeRandom
                key={prod.heading}
                heading={prod.heading}
                img={prod.img}
                liItem={prod.liItem}
                idx={prod.idx}
              />
            ))}
          </div>
        </div>
        {/*  Ultrasonic & Special Sensors */}
        <div className=" shadow-inner shadow-black rounded-3xl p-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black ">
            Ultrasonic & Special Sensors:
          </span>
          <img
            src="/ultrasonicAndSpecialSensors.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-3xl mt-10 shadow-2xl shadow-black"
          />
        </div>
        {/*  Lighting & Indicators*/}
        <div className=" shadow-inner shadow-black rounded-3xl p-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black ">
            Lighting & Indicators:
          </span>
          <img
            src="/Lighting & Indicators.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-3xl mt-10 shadow-2xl shadow-black"
          />
        </div>
        {/* Vision Sensors*/}
        <div className=" shadow-inner shadow-black rounded-3xl p-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black ">
            Vision Sensors:
          </span>
          <img
            src="/Vision Sensors.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-3xl mt-10 shadow-2xl shadow-black"
          />
        </div>
        {/* Safety Sensors*/}
        <div className=" shadow-inner shadow-black rounded-3xl p-6 mb-7 bg-gradient-to-r from-blue-500 to-purple-500 ">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black ">
            Safety Sensors:
          </span>
          <img
            src="/Safety Sensors.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-3xl mt-10 shadow-2xl shadow-black"
          />
        </div>
        <div>
          <div className="items-center sm:items-start px-4 sm:px-10  ">
            <div className=" flex flex-col">
              <div>
                <span className="font-bold text-xl sm:text-4xl mt-24 sm:mt-20 font-lora text-center sm:text-left border-b-2 border-black ">
                  Rugged Handheld Readers:
                </span>
              </div>
              <span className="font-bold text-base sm:text-lg mt-3 font-lora text-center sm:text-left">
                DataMan 8000 Series
              </span>

              <span className="font-bold text-lg sm:text-xl mt-2 font-lora text-center sm:text-left">
                The most advanced handheld ID reader ever
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-5 shadow-inner shadow-black justify-between rounded-3xl p-6 bg-gradient-to-l from-blue-500 to-purple-500">
              <ul className="list-disc list-inside mx-4 sm:mx-5">
                <li className="mb-1">
                  High speed image acquisition up to 1000 frames/second
                </li>
                <li className="mb-1">
                  1-D code reading speeds up to 90 decodes/second
                </li>
                <li className="mb-1">
                  2-D code reading speeds up to 45 decodes/second
                </li>
                <li className="mb-1">Ethernet and RS-232 communication</li>
                <li className="mb-1">Integrated lighting</li>
                <li className="mb-1">Integrated Laser aimer</li>
                <li className="mb-1">Push button train and trigger</li>
                <li className="mb-1">Integrated I/O (4IN/4OUT)</li>
              </ul>

              <img
                src="/Rugged Handheld Readers.png"
                alt="product"
                className=" w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
              />
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start px-4 sm:px-10">
            <span className="font-bold text-xl sm:text-4xl mt-24 sm:mt-20 font-lora text-center sm:text-left border-b-4 border-black">
              Advanced Fixed-mount ID Reader:
            </span>

            <span className="font-bold text-base sm:text-lg mt-3 font-lora text-center sm:text-left">
              DataMan 300 Series
            </span>

            <span className="font-bold text-lg sm:text-xl mt-2 font-lora text-center sm:text-left">
              The most versatile fixed-mount barcode reader ever
            </span>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-5 shadow-inner shadow-black justify-between rounded-3xl p-6 bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="flex flex-col sm:flex-row sm:justify-between mt-5">
                <ul className="list-disc list-inside mx-4 sm:mx-5">
                  <li className="mb-1">
                    Ethernet communications : industrial support for
                    Ethernet/IP, PROFINET,MC Protocol and others.
                  </li>
                  <li className="mb-1">
                    Long working memory capacity for offline or cut off range
                    code buffering
                  </li>
                  <li className="mb-1">Built-in space battery charger.</li>
                  <li className="mb-1">Compatible with industry standard</li>
                  <li className="mb-1">Ethernet , USB and RS-232 cable</li>
                </ul>

                <img
                  src="/Advanced Fixed-mount ID Reader.png"
                  alt="product"
                  className=" w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8 lg:px-16 py-8">
          {/* Main Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Safety Section */}
            <div className="flex flex-col items-center text-center shadow-inner shadow-black p-4 rounded-3xl bg-gradient-to-b from-blue-500 to-purple-500">
              <h2 className="text-lg sm:text-xl font-bold ">Safety</h2>

              <img
                src="/Safety.png"
                alt="Safety Products"
                className="  w-full sm:w-3/4 lg:w-2/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
              />
              <ul className="list-none">
                <li>Safety switches</li>
                <li>Safety systems</li>
                <li>Safety relays</li>
                <li>Enabling switches</li>
                <li>Emergency stop device</li>
                <li>Rope pull switches</li>
                <li>Bolts</li>
              </ul>
            </div>

            {/* Automation Section */}
            <div className="flex flex-col items-center text-center shadow-inner shadow-black p-4 rounded-3xl bg-gradient-to-t from-blue-500 to-purple-500">
              <h2 className="text-lg sm:text-xl font-bold ">Automation</h2>
              <img
                src="/Automation.png"
                alt="Automation Products"
                className="  w-full sm:w-3/4 lg:w-2/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black "
              />
              <ul className="list-none">
                <li>Multiple limit switches</li>
                <li>Single limit switches</li>
                <li>Trip rails/trip dogs</li>
                <li>Single hole fixing limit switches</li>
                <li>Position switches EN 50041</li>
                <li>Plug connectors</li>
                <li>Ident systems</li>
              </ul>
            </div>

            {/* ManMachine Section */}
            <div className="flex flex-col items-center text-center shadow-inner shadow-black p-4 rounded-3xl bg-gradient-to-b from-blue-500 to-purple-500">
              <h2 className="text-lg sm:text-xl font-bold ">ManMachine</h2>
              <img
                src="/ManMachine.png"
                alt="ManMachine Products"
                className="  w-full sm:w-3/4 lg:w-2/3 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
              />
              <ul className="list-none">
                <li>Hand-held pendant stations</li>
                <li>Hand wheels</li>
                <li>Joystick switches</li>
                <li>Electronic-Key-System</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Fuses For All Process Industries*/}
        <div className=" shadow-inner shadow-black rounded-3xl p-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500">
          <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-lora text-center border-b-4 border-black ">
            Fuses For All Process Industries:
          </span>
          <img
            src="/Fuses For All Process Industries.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-3xl mt-10 shadow-2xl shadow-black"
          />
        </div>
        <div className=" shadow-inner shadow-black rounded-3xl p-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500">
          <img
            src="/Screenshot 2024-09-12 193321.png"
            alt="product"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-9/12 h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-auto rounded-3xl mt-10 shadow-2xl shadow-black"
          />
        </div>
        <div className="px-4 sm:px-8 lg:px-16 py-8 ">
          {/* Main Container */}
          <div className="flex flex-col sm:flex-col justify-between items-start">
            {/* Industrial Safety Mat System */}
            <div className=" mb-8 sm:mb-0 md:mr-5">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Industrial Safety Mat System
              </h2>
              <div className="shadow-inner bg-gradient-to-r from-blue-500 to-purple-500 shadow-black md:p-5 p-7 rounded-3xl  md:flex">
                <div>
                  <p className="text-base sm:text-lg mb-4">
                    Being used to successfully reduce hazards in a number of
                    industries in machine point-of-operation, area and perimeter
                    guarding applications in the following industries:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Tire Manufacturing</li>
                    <li>Paper and Cardboard Manufacturing</li>
                    <li>Automotive</li>
                    <li>Wood Products Manufacturing</li>
                    <li>Aircraft Industry</li>
                    <li>Boat Manufacturers</li>
                    <li>Tractor Manufacturers</li>
                  </ul>{" "}
                </div>
                {/* <div className=" justify-center sm:justify-start"> */}
                <img
                  src="/Industrial Safety Mat System.png"
                  alt="Industrial Safety Mat"
                  className="w-auto sm:w-1/4 md:w-1/4 lg:h-1/4  transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
                />
                {/* </div> */}
              </div>
            </div>

            {/* Pressure Sensitive Edge Guards */}
            <div className="mt-5">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Pressure Sensitive Edge Guards
              </h2>{" "}
              <div className="shadow-inner shadow-black bg-gradient-to-r from-blue-500 to-purple-500 md:p-5 p-7 rounded-3xl md:flex">
                <div>
                  <p className="text-base sm:text-lg mb-4">
                    Manufactured to meet the user’s specification for length and
                    outlet location, EGS110 and EGS120 when pressed, sends a
                    signal to the safety controller to stop or reverse operation
                    depending on the application. Multiple mounting channel
                    designs allow for easy installation on most surfaces.
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Impact resilient, totally submersible</li>
                    <li>Highly sensitive, pressure-sensitive edge guard</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <img
                    src="/pressure sensitive edge gaurd.png"
                    alt="Pressure Sensitive Edge Guards"
                    className="w-auto h-auto   transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx- rounded-3xl  shadow-2xl shadow-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:px-16 py-8">
          {/* Title Section */}
          <div className="flex  flex-col">
            <div className="mb-6">
              <span className=" font-bold p-2 text-2xl sm:text-4xl mb-4 border-b-4 border-black">
                Hybrid Energy Saving Systems
              </span>
            </div>
            <div className="ml-3 mb-3 ">
              <span className="  sm:text-2xl  mb-4">
                Solutions for Plastic Industry - Energy Savings in Injection
                Moulding
              </span>
            </div>
          </div>
          <div className="shadow-inner bg-gradient-to-r from-blue-500 to-purple-500 shadow-black rounded-3xl p-5 ">
            <p className=" text-base sm:text-lg mb-6">
              AC servo drive + AC servo motor + fixed displacement pump +
              pressure sensor with PID control mode, this system provides you
              with precise pressure and speed control to enable quick response
              and high duplication accuracy.
            </p>
            {/* System Structure Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center mb-12">
              <img
                src="/System Structure.png"
                alt="System Structure"
                className="w-full sm:w-3/4 md:w-1/2 lg:w:1/2   transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
              />
            </div>
          </div>
          {/* Energy Consumption Curve */}
          <div className="mt-7">
            <h2 className=" font-semibold text-lg sm:text-2xl mb-4">
              Energy Consumption Curve of the Injection Molding Machine
            </h2>
            <div className="shadow-inner bg-gradient-to-r from-blue-500 to-purple-500 shadow-black rounded-3xl p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/Energy Consumption Curve of the Injection Molding Machine.png"
                  alt="Energy Consumption Curve"
                  className="w-full sm:w-3/4 md:w-1/2 lg:h-1/2  transform transition-transform duration-500 ease-in-out hover:scale-110 my-6 mx-4 rounded-3xl mt-10 shadow-2xl shadow-black"
                />
              </div>

              {/* System Explanation */}
              <div className="mx-4 flex flex-col sm:flex-row justify-between items-start mt-6">
                {/* Left column */}
                <div className="w-full sm:w-1/2">
                  <ul className="list-disc list-inside mb-4">
                    <li>AC fan control for better system management</li>
                    <li>Precise pressure feedback</li>
                    <li>Improved power efficiency with PMSM</li>
                    <li>Multiple energy-saving options for HES</li>
                  </ul>
                </div>
                {/* Right column */}
                <div className="w-full sm:w-1/2">
                  <p className="text-sm sm:text-base">
                    This system is designed to reduce energy consumption by up
                    to 70% in injection molding machines. Traditional machines
                    with fixed displacement pumps experience substantial energy
                    waste, while the Hybrid Energy Saving System optimizes
                    performance during key stages of the injection molding
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
