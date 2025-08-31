import { NavLink } from "react-router-dom";
import { CiCircleInfo } from "react-icons/ci";
import ProductInfo from "./ProductInfo";
import VariantSelector from "./VariantSelector";
import PaymentOptions from "./PaymentOptions";
import CartAdd from "./CartAdd";
import BeautyBundleCard from "./BeautyBundleCard";
import RewardPoints from "./RewardPoints";
import DeliveryAfterpayInfo from "./DeliveryAfterpayInfo";
import UMFSelector from "./UMFSelector"; // ✅ removed extra space

const RightSection = () => {
  return (
    <div className="flex-1 text-[#4a4a4a] p-6 sm:p-10">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-2">Manuka honey</h1>
      <p className="text-3xl font-semibold">
        UMF<sup className="text-lg align-super">™</sup>{" "}
        <span className="text-5xl">24+</span>
      </p>
      <p className="text-3xl font-semibold">
        MGO <span className="text-5xl">1122+</span>
      </p>

      {/* Info Button */}
      <NavLink
        to="/special"
        className="flex items-center text-sm gap-2 w-fit px-4 py-3 mt-6 bg-[#e6e4e1] text-[#4a4a4a] rounded-full font-light transition hover:bg-[#d6d4d1]"
      >
        <CiCircleInfo className="text-lg" />
        What is UMF and MGO?
      </NavLink>

      {/* Sections */}
      <div className="space-y-8 mt-8">
        <ProductInfo />
        <VariantSelector />
        <PaymentOptions />
        <CartAdd />
        <BeautyBundleCard />
        <RewardPoints />
        <DeliveryAfterpayInfo />
        <UMFSelector />
      </div>
    </div>
  );
};

export default RightSection;
