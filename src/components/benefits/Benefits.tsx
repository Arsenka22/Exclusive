import delivery from "../../assets/Services.svg";
import support from "../../assets/Services2.svg";
import protection from "../../assets/Services3.png";

export const Benefits = () => {
  return (
    <div className="benefits-container flex gap-22 max-w-[943px] w-full h-[161px] mx-auto mt-[100px]">
      <div className="benefits-item max-w-[249px] w-full h-[161px] flex flex-col gap-6 justify-center items-center">
        <img src={delivery} alt="" className="w-[60px] h-[60px]"></img>
        <div className="text-container flex flex-col items-center text-center">
          <span className="font-bold text-[20px]">FREE AND FAST DELIVERY</span>
          <span className="text-[14px]">
            Free delivery for all orders over $140
          </span>
        </div>
      </div>
      <div className="benefits-item flex flex-col gap-6 justify-center items-center">
        <img src={support} alt="" className="w-[60px] h-[60px]"></img>
        <div className="text-container flex flex-col items-center text-center">
          <span className="font-bold text-[20px]">24/7 CUSTOMER SERVICE</span>
          <span className="text-[14px]">Friendly 24/7 customer support</span>
        </div>
      </div>
      <div className="benefits-item flex flex-col gap-6 justify-center items-center">
        <img src={protection} alt="" className="w-[60px] h-[60px]"></img>
        <div className="text-container flex flex-col items-center text-center ">
          <span className="font-bold text-[20px]">MONEY BACK GUARANTEE</span>
          <span className="text-[14px]">We reurn money within 30 days</span>
        </div>
      </div>
    </div>
  );
};
