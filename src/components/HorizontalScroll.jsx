import { useEffect, useRef, useState } from "react";
import AboutProd from "./AboutProd"
const HorizontalScroll = ({ data }) => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Handle scroll to detect the currently centered item
    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, offsetWidth } = containerRef.current;
            // Calculate the width of each item (assuming uniform width)
            const itemWidth = containerRef.current.firstElementChild?.offsetWidth || 0;
            if (itemWidth > 0) {
                const middleIndex = Math.round(scrollLeft / itemWidth);
                setCurrentIndex(middleIndex);
            }
        }
    };
    // Scroll left or right by a fixed amount
    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.firstElementChild?.offsetWidth || 0;

            if (scrollAmount > 0) {
                containerRef.current.scrollBy({
                    left: direction === "left" ? -scrollAmount : scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
            return () => containerRef.current.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <button
                className="absolute z-10 p-2 transform -translate-y-1/2 bg-gray-300 rounded-full shadow-md top-1/2 left-1 hover:bg-gray-400 sm:left-0"
                onClick={() => scroll("left")} // Call scroll function with "left"
            >
                ←
            </button>

            {/* Scrollable Container */}
            <div
                ref={containerRef}
                className="flex mt-3 space-x-4 overflow-x-scroll snap-x snap-mandatory no-scrollbar w-[90%] ml-4 sm:ml-10 md:ml-5 lg:ml-16"
                style={{
                    scrollBehavior: "smooth", // Smooth scrolling
                }}
                onScroll={handleScroll} // Add onScroll event to track currentIndex
            >
                {data.map((prod, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-[90%] sm:w-1/3 transition-transform duration-500 ease-in-out snap-center p-2 sm:p-4 rounded-3xl ${index === currentIndex
                            ? "scale-100 -translate-y-3 opacity-100 blur-none"
                            : "scale-90 translate-y-0 opacity-80 blur-sm"
                            }`}
                        style={{
                            transition: "all 0.5s ease-in-out", // Smooth transition on scaling
                        }}
                    >
                        <AboutProd
                            heading={prod.heading}
                            img={prod.img}
                            details={prod.description}
                        />
                    </div>))}
            </div>

            {/* Right Arrow */}
            <button
                className="absolute z-10 p-2 transform -translate-y-1/2 bg-gray-300 rounded-full shadow-md top-1/2 right-1 hover:bg-gray-400 sm:right-0"
                onClick={() => scroll("right")} // Call scroll function with "right"
            >
                →
            </button>
        </>)
}
export default HorizontalScroll 