import { HeaderView } from "../components/Header/HeaderView";
import { SaleNotification } from "../components/SaleNotification";
import { FooterView } from "../components/footer/FooterView";
import storyphoto from "../assets/pstoryphoto.png";
import sallers from "../assets/Icon-Sale.png";
import sellerEl from "../assets/sellersEl.png";
import { useState } from "react";
import { achievementsCards } from "../data/achievementsCards";
import { PersonalitiesCards } from "../components/persCards/PersonalitiesCards";
import { Personalities } from "../data/personalitiesCards";
import { Benefits } from "../components/benefits/Benefits";

export const AboutPage = () => {
  const Achievments = ({
    achievement,
  }: {
    achievement: (typeof achievementsCards)[0];
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
      <div
        className={`flex max-w-[270px] h-[230px] justify-center rounded-[4px] border-1 border-[#000000] px-[30px] py-[50px] ${
          isHovered ? "bg-red-500 text-white" : "bg-white"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col max-w-[169px] w-full h-[170px] gap-6 items-center justify-end">
          {/* <img src={sellerEl} className="w-[60px] h-[60px]">
          <img src={sallers}></></img> */}
          <span className="font-bold text-[20px] text-center">{achievement.amount}</span>
          <span className="text-[16px] text-center">{achievement.description}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <header>
        <SaleNotification />
        <HeaderView />
      </header>
      <main className="w-full h-full px-[calc(50%_-_585px)] mt-[143px] ">
        <div className="our-story-container flex justify-between items-center">
          <div className="w-[509px] flex flex-col gap-15 items-start">
            <h3 className="font-bold text-[54px] text-black">Our Story</h3>
            <p className="text-[16px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="text-[16px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <img src={storyphoto} className="w-[607px] h-[609px]"></img>
          </div>
        </div>
        <div className="achievements-cards flex justify-between items-center flex-wrap gap-[30px] mt-[100px] mb-[100px]">
          {achievementsCards.map((achievement) => (
            <Achievments
              key={achievement.id}
              achievement={achievement}
            ></Achievments>
          ))}
        </div>

        <div className="personalitites-container w-full h-[564px] flex justify-between items-center flex-wrap gap-[30px] mt-[100px] mb-[100px]">
          {Personalities.map((person) => (
            <PersonalitiesCards key={person.id} person={person} />
          ))}
        </div>
        <Benefits />
      </main>
      <FooterView />
    </>
  );
};
