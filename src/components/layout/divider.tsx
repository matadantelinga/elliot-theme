import Image from "next/image";

export default function Divider({ children }: { children: React.ReactNode }) {
    return (
        <div className="divider divider-svg w-full items-center justify-center">
            {children}
        </div>
    );
}
