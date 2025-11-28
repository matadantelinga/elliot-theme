import Image from "next/image";
import { Card, CardContent, CardHeader } from "./card";
import MiniDivider from "./mini-divider";

export default function GameCard({
    title,
    description,
    link,
    image,
    isBadge,
}: {
    title: string;
    description: string;
    link?: string;
    image: string;
    isBadge?: boolean;
}) {
    return (
        <Card className="card bg-c-gray relative col-span-12 border-0 p-4 md:col-span-6 lg:col-span-3 xl:col-span-2">
            <CardHeader>
                <div className="card-image aspect-square">
                    <Image src={image} width={1000} height={300} alt="game 1" />
                </div>
            </CardHeader>
            <CardContent className="card-content bg-c-gray -mt-8 flex max-h-[360px] min-h-[350px] flex-col items-center space-y-2 overflow-hidden pt-3">
                <div>
                    <Image
                        src={"/icons/union.svg"}
                        width={25}
                        height={25}
                        alt="union-logo"
                    />
                </div>
                <div className="mt-5 space-y-3 px-5 text-center">
                    <h1 className="font-anton-sc text-4xl text-white">
                        {title}
                    </h1>
                    <MiniDivider />
                    <p className="line-clamp-5 text-white opacity-70">
                        {description}
                    </p>
                </div>
            </CardContent>
            {isBadge && (
                <div className="card-badge bg-c-red-light absolute top-5 right-6 p-7 px-4 md:right-8">
                    <Image
                        src={"/badges/rocket.svg"}
                        width={15}
                        height={15}
                        alt="rocket"
                    />
                </div>
            )}
        </Card>
    );
}
