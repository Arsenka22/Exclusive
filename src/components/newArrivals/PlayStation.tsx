import ps from "../../assets/ps52.png";
import { ShopNowBtn } from "../../common/ShopNowBtn";

export const PlayStation = () => {
  return (
    <div className="max-w-[570px] w-full h-[600px] bg-black pt-[89px] px-[30px]">
      <img src={ps} alt="" className="w-[511px] h-[511px] z-0 relative" />
      <div className=" max-w-[242px] w-full z-10 flex flex-col gap-4 text-white relative bottom-[160px]"> 
      <span className="text-[24px] font-bold">PlayStation 5</span>
      <p className="text-[14px]">Black and White version of the PS5 coming out on sale.</p>
      <ShopNowBtn />
      </div>
    </div>
  );
};
