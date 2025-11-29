"use client";
import React from "react";
import UpcomingGameCard from "../cards/upcoming-game-card";
import Slider from "react-slick";
import SliderArrow from "../ui/slider-arrow";

export const UpcomingGames = () => {
  const staticData = [
    {
      image: "/images/games/game11.png",
      title: "Split Fiction",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game12.png",
      title: "TES Online",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game13.png",
      title: "Red dead redemption II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game14.png",
      title: "The elder ring",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game5.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game6.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game1.png",
      title: "Mass Effect 3",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game2.png",
      title: "Pathologic II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game3.png",
      title: "Hellblade II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game4.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game5.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game6.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SliderArrow rotate />,
    prevArrow: <SliderArrow />,
    arrows: true,
  };

  return (
    <div className="mt-10 grid grid-cols-12 gap-3 space-y-5">
      <div className="hidden md:block col-span-12">
        <Slider {...settings}>
          {staticData.map((data, index) => (
            <div key={index} className="px-3">
              <UpcomingGameCard
                image={data.image}
                title={data.title}
                description={data.description}
                isBadge
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="block md:hidden col-span-12 grid grid-cols-1 space-y-5">
        {staticData.map((data, index) => (
          <UpcomingGameCard
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
            isBadge
          />
        ))}
      </div>
    </div>
  );
};
