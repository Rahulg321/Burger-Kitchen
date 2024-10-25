import { Poppins, Bebas_Neue } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});

export const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
  fallback: ["system-ui", "arial"],
});
