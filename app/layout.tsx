import type { Metadata } from "next";
import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  display: 'swap',
  weight: ["400", "500", "600", "700" ],
  variable: '--font-outfit'
});

export const ovo = Ovo({
  subsets: ["latin"], 
  display: 'swap',
  weight: ["400"],
  variable: '--font-ovo',
});


export const metadata: Metadata = {
  title: "Portfolio - GreatStack",
  description: "A copy of the GreatStack Portfolio tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ovo.variable} ${outfit.variable} antialiased leading-8 overflow-x-hidden`} >
        {children}
      </body>
    </html>
  );
}

