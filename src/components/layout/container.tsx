export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1296px] mx-auto py-4 px-2">
      {children}
    </div>
  );
}
