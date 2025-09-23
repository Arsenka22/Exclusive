import { ExploreOurProductsCards } from "../../components/exploreProducts/ExploreProductsCards";
import { useState } from "react";

export const ExploreOurProducts = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-start items-start">
      <div className="products w-[130px] flex items-center gap-4">
        <span className="w-5 h-10 bg-red-500 rounded-[5px]"></span>
        <span className="text-red-500">Our Products</span>
      </div>
      <div className="flex justify-between w-full items-center mt-6 ">
        <span className="text-[36px] font-bold text-black ">
          Explore Our Products
        </span>
      </div>
      <div className="max-w-[1170px] w-full h-full flex flex-wrap gap-[30px] justify-between items-center">
        <ExploreOurProductsCards
          showAll={showAll}
          handleShowAll={handleShowAll}
          handleShowLess={handleShowLess}
        />
      </div>
      <div className="w-full mt-[76px] flex justify-center  bnt-container flex gap-4">
        {!showAll ? (
          <button
            onClick={handleShowAll}
            className="flex justify-center items-center font-bold cursor-pointer w-[234px] h-[56px] text-white bg-red-500"
          >
            View all
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="flex justify-center items-center font-bold cursor-pointer w-[234px] h-[56px] text-white bg-gray-600"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};
