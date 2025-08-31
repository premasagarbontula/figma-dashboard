import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const CartAdd = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  return (
    <div className="flex flex-col mt-12 w-full">
      <h5 className="text-sm md:text-base font-semibold text-[#4a4a4a]">
        SELECT QUANTITY
      </h5>

      <div className="flex flex-col sm:flex-row gap-4 mt-3 w-full">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-yellow-500 text-white rounded-full px-4 sm:w-1/3 md:w-1/4">
          <span
            className="px-3 py-2 cursor-pointer text-lg select-none"
            onClick={decrement}
          >
            -
          </span>
          <span className="px-4 md:px-6">{quantity}</span>
          <span
            className="px-3 py-2 cursor-pointer text-lg select-none"
            onClick={increment}
          >
            +
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full sm:flex-1 py-2 bg-black text-white font-semibold rounded-full uppercase cursor-pointer hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CartAdd;
