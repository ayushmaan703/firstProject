import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
import products from "../constants/products.js";
import AboutProd from "../components/AboutProd.jsx";
import Details from "./Details.jsx";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (isLargeScreen && window.scrollY > 250) ||
        (!isLargeScreen && window.scrollY > 250)
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
  }, []);

  return (
    <>
      <div
        id="products"
        className="flex flex-col justify-center items-center border-b-2 border-black p-4 sm:p-10 mx-4 sm:mx-36"
      >
        <div className="flex flex-col justify-center items-center mb-10 ">
          <span
            className={`font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 font-serif text-center border-b border-black p-3 ${
              isVisible
                ? isLargeScreen
                  ? "animated-heading"
                  : "animate-smallSpread"
                : ""
            }`}
          >
            PRODUCTS
          </span>
          <span className="mb-4 p-5 font-thin text-lg sm:text-xl text-center">
            product description
          </span>
        </div>
        <Details></Details>
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
          </div>
          <div className="my-10 mx-4">
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black ">
              Services:
            </span>
            <div className="my-4">
              <div className="flex ">
                <div>
                  <span className="font-thin mb-1 mt-7 mx-7 text-2xl sm:text-3xl border-b border-black  ">
                    CONSULTANCY
                  </span>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Our Engineering team is available to help you select,
                    prepare costs, safety assessment, 3rd party audit of various
                    applications as and when required at normal charges.{" "}
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    So if you think you need a specific solution to your needs
                    you can contact us for these requirements.
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/1.png"
                    alt="product"
                    className="w-90% h-90% border-2 border-black my-4"
                  />
                </div>
              </div>
              <div className="flex ">
                <div>
                  <span className="font-thin mb-1 mt-7 mx-7 text-2xl sm:text-3xl border-b border-black  ">
                    DESIGN
                  </span>
                  <p className="mx-10 my-3 font-light font-serif ">
                    At PMAS, we have multiple design teams who carry out design
                    of control systems, design process from specification and
                    hardware design to the production of software &
                    installation.
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    We work on different make PLC & VFDs to provide you
                    integrated solutions on HMIs and SCADA for your requirement.
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/2.png"
                    alt="product"
                    className="w-90% h-90% border-2 border-black my-4"
                  />
                </div>
              </div>
              <div className="flex ">
                <div>
                  <span className="font-thin mb-1 mt-7 mx-7 text-2xl sm:text-3xl border-b border-black  ">
                    TRAINING
                  </span>
                  <p className="mx-10 my-3 font-light font-serif ">
                    We can provide onsite and at our campus training on
                    automation products.
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Certain certified course trainings are also available fore
                    specific products.
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Involve us to identify your training needs and fulfill your
                    training needs.
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/3.png"
                    alt="product"
                    className="w-90% h-90% border-2 border-black my-4"
                  />
                </div>
              </div>
              <div className="flex ">
                <div className="mr-80">
                  <span className="font-thin mb-1 mt-7 mx-7 text-2xl sm:text-3xl border-b border-black  ">
                    COMMISSIOING
                  </span>
                  <p className="mx-10 my-3 font-light font-serif ">FAT</p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Software commissioning
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Installation Verification
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Safety Validation
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    System Power UP
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">SAT</p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    I/O Checking
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">Training</p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Hardware Commissioning
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Operational Support
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/4.png"
                    alt="product"
                    className="w-full h-auto border-2 border-black my-4"
                  />
                </div>
              </div>
              <div className="flex ">
                <div className="mr-64 w-1/2">
                  <span className="font-thin mb-1 mt-7 mx-7 text-2xl sm:text-3xl border-b border-black  ">
                    SUPPORT & AMC
                  </span>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Scheduled preventive maintenance
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Remote Diagnostic
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    24/7 callout support under AMC
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Remote telephone support
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    System Auditing
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Online Reporting
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/5.png"
                    alt="product"
                    className="w-full h-auto border-2 border-black my-4"
                  />
                </div>
              </div>
              <div className="flex ">
                <div>
                  <span className="font-thin mb-1 mt-7 mx-7 text-2xl sm:text-2xl border-b border-black  ">
                    PLC SYSTEMS PROGRAMMING SOFTWARE DEVELOPMENT
                  </span>
                  <p className="mx-10 my-3 font-light font-serif ">
                    PLC systems are used to bring ease of control in system
                    design and improve flexibility. PLCs have continued to
                    evolve and are now the cornerstone of control & monitoring
                    systems all over the world.
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    Our in house software design engineers have extensive
                    knowledge of PLC from all major manufactures & can produce
                    software in many languages such as ladder logic, STL,
                    Structure text for different brand PLCs-
                    <div className="ml-3 my-3">
                      <p className="my-1">Siemens</p>
                      <p className="my-1">Schneider</p>
                      <p className="my-1">Phoenix</p>
                      <p className="my-1">ABB</p>
                    </div>
                  </p>
                  <p className="mx-10 my-3 font-light font-serif ">
                    We can provide you
                    <div className="ml-3 my-3">
                      <p className="my-1">✓ System Topologies </p>
                      <p className="my-1">✓ PLC Based Safety Systems</p>
                      <p className="my-1">✓ Legacy Systems & Migration</p>
                    </div>
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/6.png"
                    alt="product"
                    className="w-full h-auto border-2 border-black my-4 "
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="font-bold text-2xl sm:text-4xl mt-32 sm:mt-20 font-serif text-center border-b border-black ">
              Panel Manufacturer
            </span>
            <div className="font-serif ml-7 mt-6">
              <div className=" flex">
                <div className=" w-1/2 mr-10">
                  <p>
                    Programmable logic controller (PLC) control panels or also
                    known as PLC Automation Panel are one of the most important
                    and efficient kinds of control panels. Which are generally
                    used in variety of electronic and electrical circuit
                    fittings. PLC Control Panels we manufacture are highly
                    capable of giving higher output at less power consumption.
                    Integrated with solid PLC logic and flawless PLC hardware
                    programming.
                  </p>
                </div>
                <div>
                  <img
                    src="/servicesphoto/7.png"
                    alt="product"
                    className="w-auto h-3/4 border-2 border-black my-4"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="font-bold text-xl  mt-32 sm:mt-20 font-serif text-center border-b border-black ml-5">
                Panel design, Manufacturing, Software Development &
                Commissioning for OEMs -
              </span>
              <div className="mt-5">
                <div className="flex justify-around">
                  <p className="mx-10 my-3 font-light font-serif text-xl ">
                    Cable Stranding Machine :
                  </p>
                  <img
                    src="/servicesphoto/8.png"
                    alt="product"
                    className="w-30% h-auto border-2 border-black my-4"
                  />
                </div>
                <div className="flex justify-around">
                  <p className="mx-10 my-3 font-light font-serif  text-xl">
                    Marble Cutting Machine :
                  </p>
                  <img
                    src="/servicesphoto/9.png"
                    alt="product"
                    className="w-30% h-auto border-2 border-black my-4"
                  />
                </div>
                <div className="flex justify-around">
                  <p className="mx-10 my-3 font-light font-serif text-xl ">
                    Marble Polishing Machine :
                  </p>
                  <img
                    src="/servicesphoto/10.png"
                    alt="product"
                    className="w-30% h-auto border-2 border-black my-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
