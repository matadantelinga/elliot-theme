export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen bg-black p-4 md:p-10">{children}</div>;
}
