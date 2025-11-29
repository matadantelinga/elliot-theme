import Image from "next/image";
import React from "react";

export default function MiniDivider() {
    return (
        <div>
            <Image
                src="/icons/arrow1.svg"
                alt="mini-divider"
                width={1000}
                height={100}
            />
        </div>
    );
}
