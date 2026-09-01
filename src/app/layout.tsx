import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fiza — AI Enthusiast, Web & AI Marketing",
  description:
    "Computer Science student exploring AI, Machine Learning, and Web Development through hands-on projects.",
  openGraph: {
    title: "Fiza — AI Enthusiast, Web & AI Marketing",
    description:
      "Computer Science student exploring AI, Machine Learning, and Web Development through hands-on projects.",
    url: "https://fizasportfolio.vercel.app",
    siteName: "Fiza Tahir",
    images: [
      {
        url: "/portfolio-sc.png",
        width: 1200,
        height: 630,
        alt: "Fiza Tahir — AI Enthusiast, Web & AI Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiza — AI Enthusiast, Web & AI Marketing",
    description:
      "Computer Science student exploring AI, Machine Learning, and Web Development through hands-on projects.",
    images: ["/portfolio-sc.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
