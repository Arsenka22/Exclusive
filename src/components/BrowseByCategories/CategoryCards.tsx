import { Categories } from "../../data/categories";
import { useState } from "react";

export const CategoryCards = ({
  category,
}: {
  category: (typeof Categories)[0];
}) => {
  const [active, setActive] = useState<string>("home");

  return (
    <div className="flex w-full items-center justify-between gap-[30px] mt-15">
      {Categories.map((category) => (
        <button
          key={category.id}
          className={`flex flex-col justify-center items-center category-card max-w-170px w-full h-[145px] border-b border-2 text-black cursor-pointer ${
            active === category.name
              ? "bg-red-500 text-white"
              : "bg-transparent"
          }`}
          onClick={() => setActive(category.name)}
        >
          <img
            src={category.img}
            className={`w-[56px] h-[56px] ${
              active === category.name ? "filter brightness-0 invert" : ""
            }`}
          />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};
