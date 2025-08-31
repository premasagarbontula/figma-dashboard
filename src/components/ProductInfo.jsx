import { FaHeart } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 text-[#4a4a4a]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold ">The Optimiser</h2>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <FaHeart key={i} />
            ))}
          </div>
          <span className=" font-medium">825 Reviews</span>
        </div>
      </div>

      <p className="text-lg">
        For those times in life when quality comes first. This pure UMF™ 24+
        Manuka Honey is powerfully active, sourced from wild and rugged
        locations around Aotearoa New Zealand and great for almost all uses. It
        has a full, delicious flavour and your body will love you for it.
      </p>

      {/* Row 3: Accreditation Images */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-4">
        <img
          src="src/assets/accreditation-1.png"
          alt="Accred 1"
          className="h-20 object-contain mx-auto"
        />
        <img
          src="src/assets/accreditation-2.png"
          alt="Accred 2"
          className="h-20 object-contain mx-auto"
        />
        <img
          src="src/assets/accreditation-3.png"
          alt="Accred 3"
          className="h-20 object-contain mx-auto"
        />
        <img
          src="src/assets/accreditation-4.png"
          alt="Accred 4"
          className="h-20 object-contain mx-auto"
        />
        <img
          src="src/assets/accreditation-5.png"
          alt="Accred 5"
          className="h-20 object-contain mx-auto"
        />
        <img
          src="src/assets/accreditation-6.png"
          alt="Accred 6"
          className="h-20 object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
