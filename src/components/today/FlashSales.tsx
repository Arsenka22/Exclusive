import { SaleTimer } from "./SaleTimer";
import { ProductCards } from "./ProductCards";
import { useState } from "react";

export const FlashSales = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="flash-sales-container flex flex-col justify-between items-start w-full h-full text-white px-4 sm:px-6 md:px-8 lg:px-[calc(50%_-_585px)]">
      <div className="todays w-[104px] flex items-center gap-2 sm:gap-4">
        <span className="w-3 h-8 sm:w-5 sm:h-10 bg-red-500 rounded-[5px]"></span>
        <span className="text-red-500 text-sm sm:text-base">Todays</span>
      </div>

      <div className="flex flex-col [@media_(min-width:1200px)]:flex-row justify-between w-full items-center mt-4 sm:mt-6 gap-4 [@media_(min-width:1200px)]:gap-0">
        <span className="text-2xl sm:text-3xl md:text-[36px] font-bold text-black text-center [@media_(min-width:1200px)]:text-left">
          Flash Sales
        </span>
        <div className="w-full [@media_(min-width:1200px)]:w-auto flex justify-center [@media_(min-width:1200px)]:justify-end min-w-0">
          <SaleTimer />
        </div>
      </div>
      <div className="w-full mt-6">
        <ProductCards
          showAll={showAll}
          handleShowAll={handleShowAll}
          handleShowLess={handleShowLess}
        />
      </div>

      <div className="flex justify-center items-center mx-auto mt-8 sm:mt-[76px]">
        {!showAll ? (
          <button
            onClick={handleShowAll}
            className="flex justify-center items-center font-bold cursor-pointer w-full sm:w-[200px] md:w-[234px] h-12 sm:h-14 text-white bg-red-500 rounded-lg text-sm sm:text-base transition-colors duration-200 hover:bg-red-600"
          >
            View all products
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="flex justify-center items-center font-bold cursor-pointer w-full sm:w-[200px] md:w-[234px] h-12 sm:h-14 text-white bg-gray-500 rounded-lg text-sm sm:text-base transition-colors duration-200 hover:bg-gray-600"
          >
            View less
          </button>
        )}
      </div>
    </div>
  );
};
