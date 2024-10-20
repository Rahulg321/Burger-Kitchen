import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});
