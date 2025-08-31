import { CiCircleInfo } from "react-icons/ci";
import afterpayIcon from "../assets/afterpay-icon.png";

const DeliveryAfterpayInfo = () => {
  return (
    <div className="w-full p-4 bg-[#fbf9f6] rounded-lg flex flex-col gap-4 mt-6">
      {/* Delivery Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div className="flex flex-col">
          <span className="text-sm md:text-base font-semibold text-[#4a4a4a]">
            DELIVERY
          </span>
          <span className="text-sm md:text-base text-[#4a4a4a]">
            FREE DELIVERY ON ORDERS OVER $30
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-semibold text-[#4a4a4a]">
            ESTIMATED DELIVERY DATE:
          </span>
          <span className="text-sm md:text-base text-[#4a4a4a]">
            Jun 9 - Jun 13
          </span>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-2" />

      {/* Afterpay Section */}
      <div className="flex flex-col">
        <span className="text-sm md:text-base font-semibold text-[#4a4a4a]">
          AFTERPAY
        </span>

        <div className="flex flex-wrap items-center gap-1 text-sm md:text-base text-[#4a4a4a] mt-1">
          <span>or 4 interest-free payments of $13.97 with</span>
          <img
            src={afterpayIcon}
            alt="Afterpay"
            className="h-5 md:h-6 w-auto"
          />
          <span className="font-bold">Afterpay</span>
          <CiCircleInfo size={16} className="text-gray-400" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-2" />
    </div>
  );
};

export default DeliveryAfterpayInfo;
