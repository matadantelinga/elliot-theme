import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function UpcomingGameCard({
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
    <Card className="upcoming-card bg-c-gray relative overflow-hidden border-0">
      <CardHeader>
        <div className="upcoming-card-image aspect-square">
          <Image src={image} width={1000} height={300} alt="game 1" />
        </div>
      </CardHeader>
      <CardContent className="upcoming-card-content bg-c-gray -mt-8 flex flex-col items-center space-y-2 pt-3 pb-15">
        <div>
          <Image
            src={"/icons/union.svg"}
            width={25}
            height={25}
            alt="union-logo"
          />
        </div>
        <div className="mt-5 space-y-3 px-5 text-center">
          <h1 className="font-anton-sc text-2xl text-white uppercase">
            {title}
          </h1>
          <p className="line-clamp-3 text-white opacity-70">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center p-5">
        <div className="upcoming-release-date text-white opacity-70">
          12.2.2025
        </div>
      </CardFooter>
    </Card>
  );
}
