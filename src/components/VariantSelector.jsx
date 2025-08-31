import { useState } from "react";
import variant_1 from "../assets/variant-1.png";
import variant_2 from "../assets/variant-2.png";
import variant_3 from "../assets/variant-3.png";

const VariantSelector = () => {
  const variants = [
    { label: "250g", image: variant_1 },
    { label: "500g", image: variant_2 },
    { label: "500g + 12cm spoon", image: variant_3 },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h3 className="mb-1 text-[#4a4a4a]">SIZE (SELECT ONE)</h3>
      <p className="text-xl text-[#4a4a4a]">
        Variant:{" "}
        <span className="text-yellow-500 font-semibold">
          {variants[selected].label}
        </span>
      </p>

      <div className="flex gap-6 mt-3">
        {variants.map((variant, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 rounded-xl p-2 flex flex-col items-center transition 
              ${
                selected === index ? "border-yellow-500" : "border-transparent"
              }`}
            onClick={() => setSelected(index)}
          >
            <img
              src={variant.image}
              alt={variant.label}
              className="w-28 h-28 object-contain mb-2"
            />
            {/* <span
              className={`font-medium ${
                selected === index ? "text-yellow-600" : "text-gray-600"
              }`}
            >
              {variant.label}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;
