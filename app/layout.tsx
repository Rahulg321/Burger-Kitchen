import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { bebas_neue, poppins } from "./fonts";

const pduRegular = localFont({
  src: "./fonts/pdu-regular.ttf",
  variable: "--font-pdu-regular",
});

const brandon = localFont({
  src: "./fonts/Brandon.otf",
  variable: "--font-brandon",
});

const milkShake = localFont({
  src: "./fonts/Milkshake.ttf",
  variable: "--font-milkshake",
});

export const metadata: Metadata = {
  title: "Burgers With Benefits",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${bebas_neue.variable} ${pduRegular.variable} ${brandon.variable} ${milkShake.variable} ${poppins.variable}`}
    >
      <body className={`antialiased`}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
