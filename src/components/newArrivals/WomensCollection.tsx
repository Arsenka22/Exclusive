import womensColl from "../../assets/womenscoll.png";
import { ShopNowBtn } from "../../common/ShopNowBtn";

export const WomensCollection = () => {
  return (
    <div className="max-w-[570px] w-full h-[284px] bg-black px-[30px] flex justify-center items-center">
      <div className=" max-w-[242px] w-full z-10 flex flex-col gap-4 text-white relative bottom-[0px]"> 
      <span className="text-[24px] font-bold">Womens Collection</span>
      <p className="text-[14px]">Featured woman collections that give you another vibe.</p>
      <ShopNowBtn />
      </div>
      <img src={womensColl} alt="" className="max-w-[442px] w-full h-[280px] z-0 relative" />
    </div>
  );
};
