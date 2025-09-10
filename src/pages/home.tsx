import { SaleNotification } from "../components/SaleNotification";
import { HeaderView } from "../components/Header/HeaderView";
import { CategoriesView } from "../components/Categories/CategoriesView";
import { CarouselView } from "../components/Carrousel/CarouselView";
import { FlashSales } from "../components/today/FlashSales";
import { BrowseByCategories } from "../components/BrowseByCategories/BrowseByCat";
import { BestSelling } from "../components/bestSelling/BestSelling";
import { SpeakerAd } from "../components/SpeakerAd/SpeakerAd";
import { ExploreOurProducts } from "../components/exploreProducts/ExploreOurProducts";
import { NewArrival } from "../components/newArrivals/NewArrival";
import { Benefits } from "../components/benefits/Benefits";
import { FooterView } from "../components/footer/FooterView";

export const HomePage = () => {
  return (
    <>
      <SaleNotification />
      <div className="max-w-full h-full flex flex-col gap-4 ">
        <HeaderView />
      </div>
      <section>
        <div className="flex gap-[45px] max-w-full w-full h-full px-[calc(50%_-_585px)]">
          <CategoriesView />
          <CarouselView />
        </div>
        <section className="flex flex-col justify-center items-center border-b-gray-300 border-b-[0.5px] pb-15 mx-[calc(50%_-_585px)]">
          <div className="sale-container flex justify-between items-center max-w-full w-full h-full text-white mt-[140px] px-[calc(50%_-_585px)]">
            <FlashSales />
          </div>
        </section>
      </section>
      <section className="browse-category mt-20 h-full border-b-gray-300 border-b-[0.5px] pb-15 mx-[calc(50%_-_585px)]">
        <div>
          <BrowseByCategories />
        </div>
      </section>
      <section className="best-selling mt-[140px] px-[calc(50%_-_585px)]">
        <BestSelling />
      </section>
      <section className="speaker-ad mt-20 h-full pb-15 mx-[calc(50%_-_585px)]">
        <SpeakerAd />
      </section>
      <section className="explore-products mt-20 h-full  pb-15 mx-[calc(50%_-_585px)]">
        <ExploreOurProducts />
      </section>
      <section className="explore-products mt-20 h-full  pb-15 mx-[calc(50%_-_585px)] flex ">
        <NewArrival />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <FooterView />
      </section>
    </>
  );
};
