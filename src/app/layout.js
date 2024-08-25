import { Bricolage_Grotesque } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";

const bg = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: `Explore Abdul Tour: Buy Your Tickets Now`,
  description: `Discover the exciting adventures with Abdul Tour! Secure your tickets today and embark on a memorable journey. Whether you're looking for unique travel experiences or unforgettable destinations, Abdul Tour offers curated packages to meet your travel needs. Don't miss out—purchase your tickets now and start your adventure with Abdul Tour!`,
  metadataBase: new URL("https://abtour.netlify.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bg.className}>{children}</body>
    </html>
  );
}
