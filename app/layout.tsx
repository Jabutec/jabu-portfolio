// app/layout.tsx
import type { Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  // @ts-ignore — shrink-to-fit is deprecated but still respected by older iOS
  shrinkToFit: "no",
};

export const metadata = {
  title: "Jabulani Mokoena",
  description: "Software & Data Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}