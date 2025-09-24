import yourImage from "../../assets/DropDownCat.png";

export const CategoriesView = () => {
  return (
    <ul className="max-w-[217px] w-full h-[384px] flex flex-col pl-none pt-[40px] gap-4 border-r-[1px] border-r-[#000000]">
      <li className="relative pr-10 cursor-pointer">
        Woman's Fashion
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${yourImage})` }}
        />
      </li>
      <li className="relative pr-10 cursor-pointer">
        Men’s Fashion
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${yourImage})` }}
        />
      </li>
      <li className="cursor-pointer">Electronics</li>
      <li className="cursor-pointer">Home & Lifestyle</li>
      <li className="cursor-pointer">Medicine</li>
      <li className="cursor-pointer">Sports & Outdoor</li>
      <li className="cursor-pointer">Baby’s & Toys</li>
      <li className="cursor-pointer">Groceries & Pets</li>
      <li className="cursor-pointer">Health & Beauty</li>
    </ul>
  );
};
