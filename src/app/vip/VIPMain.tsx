import { MainBg } from "@/components/layout/main-bg"
import React from 'react'
import { Button } from "@/components/ui/button"
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";

interface iItemCard {
    title: string;
    image: string;
    description: string;
}

function ItemCard({ title, image, description }: iItemCard) {
    return (
        <div className="relative mt-[120px]">
            <div className="bg-[url('/images/bggradgreen.svg')] bg-cover pt-[55px] bg-center min-h-[100px] w-full border border-[#3FCE3C] rounded-[17px]">
                <div className="absolute -mt-[100px] top-0 left-0 right-0 mx-auto col-span-1">
                    <Image src={image} alt="bggradgreen" width={218} height={192} className="mx-auto" />
                </div>
                <div className="bg-[url('/images/bgtitle.svg')] mx-auto text-white text-center font-bold text-[24px] bg-no-repeat bg-bottom flex items-center justify-center min-h-[104px] bg-cover min-w-[257px]  w-full">
                    {title}
                </div>
                <div className="py-10 min-h-[150px] text-[#E3E3E3]/50 text-center px-5">
                {description}
                </div>
            </div>
        </div>
)
}

export default function VIPMain() {
	return (
    <div>
        <MainBg id="milestones-main">
            <div className="py-10">
                <h1 className="w-full leading-14 text-white font-black italic lg:text-8xl text-6xl block uppercase text-center">
                    VIP BENEFITS
                </h1>
                <div className="text text-white text-center max-w-md m-auto font-bold ">
                Explore all the VIP Rewards from Code <span className="text-c-lightgreen">ELLIOT</span>
                </div>
                <div className="py-14">
                    <Button
                        variant={"green"}
                        size={"lg"}
                        className="uppercase mx-auto mb-5 min-w-[200px] flex gap-2 items-center py-4 text-[16px] h-auto"
                    >
                        Join VIP Club
                        <IoMdArrowDropright />
                    </Button>
                    <div className="text text-white text-center max-w-md m-auto font-bold ">
                    Exclusive vip rewards for code <span className="text-c-lightgreen">ELLIOT</span> servers! 
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 justify-between">
                    <ItemCard
                        title="Custom Lossback"
                        image="/images/vip1.png"
                        description="Get a personalized return on your losses, turning setbacks into fresh opportunities to win."
                    />
                    <ItemCard
                        title="Custom Bonuses"
                        image="/images/vip1.png"
                        description="Enjoy personalized bonus offers that match your playstyle, giving you even more ways to have fun and boost your winnings."
                    />
                    <ItemCard
                        title="Free Fill Ups"
                        image="/images/vip1.png"
                        description="Claim daily boosts, spins, and surprise drops that bring extra excitement to your play and deliver more value."
                    />
                    <ItemCard
                        title="Custom Rakeback"
                        image="/images/vip1.png"
                        description="Earn flexible rakeback that adapts to your gameplay, rewarding you every time you place a bet."
                    />
                    <ItemCard
                        title="Custom Wager Milstones"
                        image="/images/vip1.png"
                        description="Hit personalized milestones tailored to your betting style and unlock bonuses, cash rewards, or exclusive perks."
                    />
                    <ItemCard
                        title="Exclusive VIP Promocodes"
                        image="/images/vip1.png"
                        description="Unlock exclusive codes, early rewards, and premium offers reserved for high-tier, loyal players."
                    />
                </div>

            </div>
        </MainBg>			
    </div>
	)
}
