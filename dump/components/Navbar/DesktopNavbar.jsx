import Image from "next/image";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    // <nav className="z-30 bg-white py-5">
    <nav className="fixed inset-[0%_0%_auto] z-30 flex h-16 items-center border-b border-b-[#d1d5db] bg-white">
      <div className="wrapper">
        <div className="flex items-center justify-between gap-8">
          {/* <Link href="/" className="relative h-14 w-[100px] sm:w-[200px]"> */}
          <Link href="/" className="relative">
            {/* <Image
              fill
              src="/images/ribbonsxp.svg"
              alt="ribbonsxp logo"
              priority={true}
              /> */}

            <h2 className="text-fs-sm font-bold">AFCON 2025/2026</h2>
          </Link>

          <div className="hidden items-center justify-between gap-10 sm:flex">
            <div className="flex items-center gap-5">
              <Link href="/" className="primary-btn is-biege w-full sm:w-fit">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
