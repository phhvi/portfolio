import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "Software engineer from Da Nang. Builds for the web, cycles, journals, and is still figuring things out.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-eosin-nu7rwsostq.vercel.app"),
  title: "Vi Phan — software engineer, Da Nang",
  description,
  openGraph: {
    title: "Vi Phan",
    description,
    url: "/",
    siteName: "Vi Phan",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
