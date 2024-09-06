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
            <div className="flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:px-4">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black">
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
                  className="w-full h-auto border-2 border-black"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:px-4">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black">
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
                  className="w-full h-auto border-2 border-black"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:px-4">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black">
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
                  className="w-full h-auto border-2 border-black"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:px-4">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black">
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
                  className="w-full h-auto border-2 border-black"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:px-4">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-3xl border-b border-black">
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
                  className="w-full h-auto border-2 border-black"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-8">
              <div className="sm:w-1/2 sm:px-4">
                <span className="font-thin mb-1 mt-7 text-2xl sm:text-2xl border-b border-black">
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
                  className="w-full h-auto border-2 border-black"
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
    </div>
  );
}
