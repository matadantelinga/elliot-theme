import Image from "next/image";

export default function FeatureItem({
    title,
    description,
    image,
    link,
}: {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}) {
    return (
        <div className="flex h-full w-full flex-col items-center md:grid md:grid-cols-12 md:gap-5">
            <div className="feature-icon col-span-4 flex aspect-square h-full w-full scale-50 items-center justify-center md:scale-80">
                <Image
                    src={image ?? ""}
                    alt={title ?? ""}
                    width={30}
                    height={30}
                    className="h-16 w-16 object-contain md:h-12 md:w-12"
                />
            </div>
            <div className="col-span-8 text-center md:text-start">
                <h1 className="font-anton-sc text-3xl text-white">{title}</h1>
                <p className="mt-2 max-w-md text-lg text-white">
                    {description}
                </p>
            </div>
        </div>
    );
}
