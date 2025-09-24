import { CategoryCards } from "./CategoryCards";
export const BrowseByCategories = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-start items-start">
      <div className="todays w-[124px] flex items-center gap-4">
        <span className="w-5 h-10 bg-red-500 rounded-[5px]"></span>
        <span className="text-red-500">Categories</span>
      </div>
      <div className="flex justify-between w-full items-center mt-6 ">
        <span className="text-[36px] font-bold text-black ">
          Browse By Category
        </span>
        <div className="bnt-container flex gap-4">
          <button className="text-red-500 font-bold cursor-pointer ">
            Prev
          </button>
          <button className="text-red-500 font-bold cursor-pointer ">
            Next
          </button>
        </div>
      </div>
      <CategoryCards />
    </div>
  );
};
