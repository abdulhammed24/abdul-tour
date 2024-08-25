import { Bricolage_Grotesque } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";

const bg = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: `
      Attend AFCON 2025 from Nigeria | Get AFCON 2025 Tickets, Flight, Hotels and Tour Packages 
      | Experience 2025
      Africa Cup of Nations in Morocco from Nigeria with RibbonsXP | Book Hospitality
      Packages | Visit Morocco | TotalEnergies CAF Africa Cup of Nations 2025 |
      Trip to Morocco in 2024 | Online Ticket
    `,
  description: `Enjoy yourself at the 2025 CAF Africa Cup of Nations in Morocco from Nigeria. Book amazing
       Experience Packages with RibbonsXP in Morocco.
      The 2025 Africa Cup of Nations, also referred to as AFCON 2025 or CAN 2025, is scheduled to be the 
      35th edition of the biennial African football tournament organised by the Confederation of African Football (CAF). It will be hosted by Morocco for the second time and the first since 1988 in July & August 2025. Morocco was originally scheduled to host the 2015 edition, but withdrew due to fears stemming from the Western African Ebola virus epidemic.`,
  metadataBase: new URL("https://afgm.netlify.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bg.className}>{children}</body>
    </html>
  );
}
