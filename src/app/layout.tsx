import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luma.rubensrafael.com"),
  title: "Luma — Practical courses to build real skills",
  description:
    "Short, practical courses in design, technology, business and creative skills, taught by people who do the work every day.",
  openGraph: {
    title: "Luma — Practical courses to build real skills",
    description:
      "Short, practical courses taught by people who do the work every day.",
    siteName: "Luma",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} motion-safe:scroll-smooth`}
    >
      <body className="text-ink antialiased">{children}</body>
    </html>
  );
}
