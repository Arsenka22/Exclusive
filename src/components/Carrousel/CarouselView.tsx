import { ProductCarousel } from "./Carrousel";
import CarouselImg1 from "../../assets/s25.webp";
import CarouselImg2 from "../../assets/iph15.jpg";
import CarouselImg3 from "../../assets/tv.jpg";

export const CarouselView = () => {
  const productImages = [CarouselImg1, CarouselImg2, CarouselImg3];

  return (
    <div className="container mx-auto p-4">
      <ProductCarousel images={productImages} />
    </div>
  );
};
