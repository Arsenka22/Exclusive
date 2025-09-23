import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">
            Save your favorite items here to easily find them later.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Cart
            </h1>
            <p className="text-gray-600 mt-2">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Заголовок таблицы */}
        <div className="grid grid-cols-4 gap-6 font-semibold text-gray-700 border-b pb-2 mb-4 text-left">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* Элементы корзины */}
        <div className="flex flex-col gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-4 gap-6 items-center border-b pb-4"
            >
              {/* Product */}
              <div className="flex items-center gap-4 relative">
                <img
                  src={product.image}
                  className="w-[54px] h-[54px] object-cover"
                />
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {product.title}
                </h3>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="absolute -left-3 -top-3 bg-white p-1 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Price */}
              <div className="font-semibold text-gray-900">
                ${product.price}
              </div>

              {/* Quantity */}
              <div>
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, Number(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1 text-center"
                />
              </div>

              {/* Subtotal */}
              <div className="font-semibold text-gray-900">
                ${product.price * product.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Очистить корзину */}
        {cart.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to clear your entire cart?"
                  )
                ) {
                  cart.forEach((product) => removeFromCart(product.id));
                }
              }}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Clear All Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
