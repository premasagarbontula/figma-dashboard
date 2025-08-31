import { useState } from "react";
import { MdRefresh } from "react-icons/md";

const PaymentOptions = () => {
  const [selected, setSelected] = useState("one-time");

  return (
    <div className="mt-12 w-full px-4 md:px-0">
      <h3 className="mb-4 text-[#4a4a4a] font-semibold">
        PAYMENT OPTIONS (SELECT ONE)
      </h3>

      <div className="w-full rounded-xl p-4 bg-[#f2f2f2] flex flex-col gap-4">
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* One-time purchase */}
          <button
            onClick={() => setSelected("one-time")}
            className={`flex-1 flex justify-between md:justify-around items-center font-semibold rounded-full px-6 py-2 transition
              ${
                selected === "one-time"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-[#4a4a4a] border-2 border-yellow-500 hover:bg-yellow-50"
              }`}
          >
            <div className="flex flex-col">
              <span>One-time</span>
              <span>Purchase</span>
            </div>
            <div className="flex flex-col items-end">
              <span>$55.88</span>
              <span>USD</span>
            </div>
          </button>

          {/* Subscribe & save */}
          <button
            onClick={() => setSelected("subscribe")}
            className={`flex-1 flex justify-between md:justify-around items-center font-semibold rounded-full px-6 py-2 transition
              ${
                selected === "subscribe"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-[#4a4a4a] border-2 border-yellow-500 hover:bg-yellow-50"
              }`}
          >
            <div className="flex flex-col">
              <span>Subscribe & save</span>
              <span>20%</span>
            </div>
            <div className="flex flex-col items-end">
              <span>$44.70</span>
              <span>USD</span>
            </div>
          </button>
        </div>

        {/* Subscription info */}
        <div className="flex items-center gap-2 text-[#4a4a4a] text-sm md:text-md">
          <MdRefresh size={25} className="text-yellow-500" />
          <span>What is subscription?</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
