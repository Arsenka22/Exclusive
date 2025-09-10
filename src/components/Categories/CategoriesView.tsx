import yourImage from "../../assets/DropDownCat.png";

export const CategoriesView = () => {
  return (
    <ul className="max-w-[217px] w-full h-[384px] flex flex-col pl-none pt-[40px] gap-4 border-r-[1px] border-r-[#000000]">
      <li className="relative pr-10">
        Woman's Fashion
        <span 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${yourImage})` }}
        />
      </li>
      <li className="relative pr-10">
        Men’s Fashion
        <span 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${yourImage})` }}
        />
      </li>
      <li>Electronics</li>
      <li>Home & Lifestyle</li>
      <li>Medicine</li>
      <li>Sports & Outdoor</li>
      <li>Baby’s & Toys</li>
      <li>Groceries & Pets</li>
      <li>Health & Beauty</li>
    </ul>
  );
};
