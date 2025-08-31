import color_round_icon from "../assets/color-leaves.png";

const RewardPoints = () => {
  return (
    <div className="flex items-start sm:items-center gap-4 bg-[#fbf9f6] p-4 rounded-lg mt-5">
      {/* Icon */}
      <img
        src={color_round_icon}
        alt="Reward Leaves Icon"
        className="w-8 h-8 object-contain rounded-full"
      />

      {/* Text */}
      <p className="text-[#4a4a4a] text-sm flex flex-wrap gap-1">
        Colourclub members earn up to{" "}
        <span className="bg-white text-yellow-500 font-bold px-2 py-1 rounded-full shadow-sm">
          56
        </span>{" "}
        reward points when buying this item.{" "}
        <a href="#signup" className="text-blue-600 font-medium hover:underline">
          Sign up
        </a>{" "}
        or{" "}
        <a href="#login" className="text-blue-600 font-medium hover:underline">
          log in
        </a>
      </p>
    </div>
  );
};

export default RewardPoints;
