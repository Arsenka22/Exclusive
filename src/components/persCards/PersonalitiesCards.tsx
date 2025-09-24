import { Personalities } from "../../data/personalitiesCards";
import facebookicon from "../../assets/facebookicon.svg";
import twittericon from "../../assets/twittericon.svg";
import instagramicon from "../../assets/insticon.svg";

export const PersonalitiesCards = ({
  person,
}: {
  person: (typeof Personalities)[0];
}) => {
  const getImageUrl = () => {
    if (person.img.persph1) return person.img.persph1;
    if (person.img.persph2) return person.img.persph2;
    if (person.img.persph3) return person.img.persph3;
    return "";
  };

  const imageUrl = getImageUrl();

  return (
    <div className="pers-cards max-w-[370px] w-full h-[564px] flex flex-col items-center justify-center gap-4">
      <div className="photo-cont max-w-[370px] w-full h-[430px] bg-gray-100 flex items-end justify-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={person.name}
            className="w-[294px] h-[391px] "
          />
        )}
      </div>
      <div className="w-full flex flex-col gap-2 items-start justify-center">
        <span className="font-bold text-[20px]">{person.name}</span>
        <span className="text-[16px]">{person.post}</span>
      </div>
      <div className="w-full social-media-container flex gap-4 justify-start items-center">
        <a className="cursor-pointer">
          <img
            src={facebookicon}
            alt="Facebook"
            className="w-[30px] h-[30px] filter brightness-0"
          />
        </a>
        <a className="cursor-pointer">
          <img
            src={twittericon}
            alt="Twitter"
            className="w-[30px] h-[30px] filter brightness-0"
          />
        </a>
        <a className="cursor-pointer">
          <img
            src={instagramicon}
            alt="Instagram"
            className="w-[30px] h-[30px] filter brightness-0"
          />
        </a>
      </div>
    </div>
  );
};
