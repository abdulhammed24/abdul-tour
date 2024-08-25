import Footer from "@/components/Footer";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";

export default function MainPagesLayout({ children }) {
  return (
    <>
      <DesktopNavbar />
      {children}
      <Footer />
    </>
  );
}
