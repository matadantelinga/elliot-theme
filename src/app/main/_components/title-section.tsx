import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function TitleSection({
    title,
    subTitle,
    withDivider,
}: {
    title: string;
    subTitle: string;
    withDivider?: boolean;
}) {
    return (
        <div className="title-section py-20 text-center">
            <h3 className="text-c-red font-tulpen-one text-5xl font-black">
                {subTitle}
            </h3>
            <p className="font-anton-sc text-5xl text-white">{title}</p>
            {withDivider && (
                <div className="mt-10">
                    <Divider>
                        <Image
                            src="/icons/emblem.svg"
                            width={100}
                            height={100}
                            alt="emblem"
                            className="h-6 w-12"
                        />
                    </Divider>
                </div>
            )}
        </div>
    );
}
