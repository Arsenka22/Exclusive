import DropDown from "../assets/DropDown.png";

export const SaleNotification = () => {
  return (
    <div className="notification-container flex justify-center items-center gap-[231px] bg-black max-w-full w-full h-12 text-white px-[calc(50%_-_585px)]">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="underline font-bold text-white cursor-pointer">ShopNow</a>
      </p>
      <button className="langBtn flex items-center gap-1 cursor-pointer">
        English <img src={DropDown} />
      </button>
    </div>
  );
};
