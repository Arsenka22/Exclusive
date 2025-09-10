import { bestSellingProducts as products } from "../../data/bestSellingProducts";
import { useState, useEffect } from "react";

// Добавляем пропс для управления состоянием showAll
interface BestSellingProductCardsProps {
  showAll?: boolean;
  onShowAll?: () => void;
  onShowLess?: () => void;
}

export const BestSellingProductCards = ({
  showAll = false,

}: BestSellingProductCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  useEffect(() => {
    if (showAll) return; // Не обновляем itemsPerView когда показаны все карточки

    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }

      setCurrentIndex(0);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [showAll]);

  const nextSlide = () => {
    if (currentIndex + itemsPerView >= products.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(products.length - itemsPerView);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-gradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`product-card w-full max-w-[270px] h-[350px] relative  ${
          isHovered
            ? "shadow-lg border-blue-400 transform scale-105"
            : "shadow-md"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300 "
        />
        <div className="product-info flex flex-col gap-2 items-start p-3">
          <h3 className="text-[16px] font-bold line-clamp-2">
            {product.title}
          </h3>
          <p className="text-[16px] font-medium text-red-500">
            ${product.price}
          </p>
          {renderRatingStars(product.rate)}
        </div>

        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-white ">
            <button className="bg-black w-full text-white px-3 py-2 rounded ">
              Add to cart
            </button>
          </div>
        )}
      </div>
    );
  };

  const getVisibleProducts = () => {
    if (showAll) {
      return products; // Возвращаем все продукты
    }

    const visibleProducts = [];
    for (let i = 0; i < itemsPerView; i++) {
      const productIndex = (currentIndex + i) % products.length;
      visibleProducts.push(products[productIndex]);
    }
    return visibleProducts;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="product-carousel mt-10 px-4 relative">
      <div className="relative overflow-hidden">
        <div
          className={`flex ${
            showAll
              ? "flex-wrap justify-center gap-4"
              : "justify-center space-x-4"
          }`}
        >
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`${
                showAll ? "flex-shrink-0 mb-4" : "flex-shrink-0"
              } w-64 transition-all duration-300`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {!showAll && products.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-colors duration-200"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-colors duration-200"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
