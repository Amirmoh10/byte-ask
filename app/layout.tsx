import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte Ask",
  description:
    "Byte Ask is a comprehensive Q&A platform for developers. Ask coding questions, share knowledge, and get expert answers from the programming community. Find solutions to your development challenges across all programming languages and technologies.",
};

console.log({ className: inter.className });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
