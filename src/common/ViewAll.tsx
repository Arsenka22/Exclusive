import { useState } from "react"
import { bestSellingProducts } from "../data/bestSellingProducts";

export const ViewAll = () => {
  const[showAll, setShowAll] = useState(4);


  const handleShowAll = () => {
    setShowAll(bestSellingProducts.length)
  }
  return (
    <button className="flex justify-center items-center font-bold cursor-pointer w-[159px] h-[56px] text-white bg-red-500 ">View all</button>
  )
}
