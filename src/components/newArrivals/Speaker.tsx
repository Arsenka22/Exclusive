import speakerAr from "../../assets/SpeakerAr.png";
import { ShopNowBtn } from "../../common/ShopNowBtn";

export const Speaker = () => {
  return (
    <div className="relative max-w-[270px] w-full h-[284px] bg-black overflow-hidden">
      <img
        src={speakerAr}
        alt="Speaker"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />
      <div className="relative z-10 w-full h-full px-[30px] flex flex-col justify-center items-start gap-4 text-white">
        <span className="text-[24px] font-bold">Speaker</span>
        <p className="text-[14px]">Amazon wireless speakers</p>
        <ShopNowBtn />
      </div>
    </div>
  );
};
