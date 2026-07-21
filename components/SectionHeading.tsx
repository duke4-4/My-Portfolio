export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-jost text-5xl text-cream">
      {children}
      <span className="mt-6 block h-[2px] w-40 bg-pink" />
    </h2>
  );
}
