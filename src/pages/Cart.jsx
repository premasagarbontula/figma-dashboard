import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4a4a4a]">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-[#4a4a4a] text-center">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-[#f2f2f2] rounded-lg gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold text-[#4a4a4a]">{item.name}</p>
                  <p className="text-[#4a4a4a]">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={handleClearCart}
            className="mt-6 w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
