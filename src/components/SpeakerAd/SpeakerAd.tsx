import { SpeakerTimer } from "./SpeakerTimer";
import { BuyNowBtn } from "../../common/BuyNowBtn";
import speaker from "../../assets/speaker.png";
export const SpeakerAd = () => {
  return (
    <div className="max-w-[1440px] w-full h-[500px] flex  items-start justify-start z-1 bg-black py-[69px] px-[60px]  ">
      <div className="z-10 flex flex-col gap-[32px]">
        <span className="text-[16px] font-bold text-green-500 h-5 ">
          Categories
        </span>
        <p className="text-[48px] font-bold text-white max-w-[433px] h-30 ">
          Enhance your music experience
        </p>
        <SpeakerTimer />
        <BuyNowBtn />
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={speaker}
          className=" flex justify-center items-center w-[600px] h-[400px]"
        ></img>
      </div>
    </div>
  );
};
