import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligence | Jabulani Mokoena",
  description:
    "Data-driven audits of the South African tech ecosystem. Hiring trends, stack migrations, talent flow.",
};

export default function IntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="intelligence-shell">
      {children}
    </div>
  );
}