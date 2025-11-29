import Divider from "@/components/layout/divider";
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
      <h3 className="text-c-red-light font-nordic text-3xl font-black">
        {subTitle}
      </h3>
      <p className="font-anton-sc text-5xl text-white uppercase">{title}</p>
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
