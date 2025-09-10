import { PlayStation } from "../newArrivals/PlayStation";
import { WomensCollection } from "../newArrivals/WomensCollection";
import { Speaker } from "../newArrivals/Speaker";
import { Perfume } from "../newArrivals/Perfume";

export const NewArrival = () => {
  return (
    <>
    <div className="flex flex-col gap-15">
    <div className="w-full h-full flex flex-col gap-5 justify-start items-start">
      <div className="products w-[130px] flex items-center gap-4">
        <span className="w-5 h-10 bg-red-500 rounded-[5px]"></span>
        <span className="text-red-500">Featured</span>
      </div>
      <div className="flex justify-between w-full items-center mt-6 ">
        <span className="text-[36px] font-bold text-black ">
          New Arrival
        </span>
      </div>
    </div>
    <div className="arrivals-container flex gap-[30px]">
      <div className="max-w-[570px] w-full">
        <PlayStation />
      </div>
      <div className="flex flex-col gap-8">
        <WomensCollection />
        <div className="flex gap-[30px]">
          <Speaker />
          <Perfume />
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
