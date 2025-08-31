import { useState } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";

import honey20 from "../assets/manuka-honey-umf24-250g-carousel-2.png";
import honey24 from "../assets/manuka-honey-umf24-250g-carousel-1.png";
import spoon from "../assets/spoon.png";

const bundleItems = [
  { id: 1, image: honey20, title: "UMF 20+", options: ["250g", "500g", "1kg"] },
  { id: 2, image: honey24, title: "UMF 24+", options: ["250g", "500g", "1kg"] },
  { id: 3, image: spoon, title: "Wooden Spoon", options: [] },
];

const BeautyBundleCard = () => {
  const [selectedGrams, setSelectedGrams] = useState({ 1: "250g", 2: "250g" });

  return (
    <div className="bg-gray-200 text-[#4a4a4a] p-6 rounded-xl max-w-5xl mx-auto mt-8">
      <h3 className="text-lg md:text-xl font-semibold mb-6 text-center">
        Beauty Bundle
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {bundleItems.map((item, idx) => (
          <div key={item.id} className="flex flex-col items-center relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 md:w-24 md:h-24 object-cover mb-2 rounded-lg"
            />
            <span className="mb-2 text-base md:text-lg font-semibold text-center">
              {item.title}
            </span>

            {item.options.length > 0 && (
              <div className="relative w-24 md:w-28">
                <select
                  value={selectedGrams[item.id]}
                  onChange={(e) =>
                    setSelectedGrams((prev) => ({
                      ...prev,
                      [item.id]: e.target.value,
                    }))
                  }
                  className="w-full px-2 py-1 rounded border border-gray-400 appearance-none bg-white text-sm"
                >
                  {item.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            )}

            {idx < bundleItems.length - 1 && (
              <>
                <FaPlus className="hidden md:block absolute right-[-20px] top-1/3 text-xl text-gray-600" />
                <FaPlus className="block md:hidden mt-2 text-lg text-gray-600" />
              </>
            )}
          </div>
        ))}

        <div className="flex flex-col items-center text-center md:ml-6 mt-6 md:mt-0">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
            <span className="line-through text-sm md:text-base">
              $478.75 USD
            </span>
            <span className="font-semibold text-base md:text-lg">
              $430.88 USD
            </span>
            <span className="text-green-500 font-medium text-sm md:text-base">
              Save 10%
            </span>
          </div>
          <button className="bg-gray-800 text-white px-4 md:px-6 py-2 rounded-full hover:bg-gray-900 transition text-sm md:text-base">
            ADD BUNDLE TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeautyBundleCard;
