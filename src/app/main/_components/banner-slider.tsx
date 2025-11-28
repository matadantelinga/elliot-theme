import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BannerSlider() {
    return (
        <div className="bg-c-red relative mb-20 flex flex-col-reverse items-center justify-center md:mb-0 md:flex-row md:justify-between">
            <div className="absolute -bottom-1/2 px-8 text-center md:static md:block md:text-start">
                <h1 className="font-anton-sc text-4xl font-bold tracking-wider text-white md:text-6xl">
                    BIG TITLE
                </h1>
                <p className="hero-subtitle mt-4 max-w-md text-sm text-white opacity-50">
                    Landing a Loki Enchantment symbol will turn the symbol into
                </p>
                <Button
                    className="font-anton-sc text-c-red mt-8 flex w-full cursor-pointer justify-between rounded-none bg-white text-xl hover:text-white md:w-auto md:justify-start md:space-x-3"
                    size={"lg"}
                >
                    <span>READ MORE</span>
                    <Image
                        src={"/icons/arrow.svg"}
                        alt={"viking"}
                        width={12}
                        height={12}
                    />
                </Button>
            </div>
            <Image
                src={"/images/viking.png"}
                alt={"viking"}
                width={1000}
                height={1000}
                className="h-[300px] w-full md:h-full"
            />
        </div>
    );
}
