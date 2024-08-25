"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black pb-16 pt-28 text-xs uppercase text-white">
      <div className="mb-20 flex justify-center text-center">
        <Link href="/" aria-label="Abdul Tour">
          <h2 className="text-fs-xl">Abdul Tour</h2>
        </Link>
      </div>

      <div className="line-separator-horizontal"></div>

      <div className="wrapper">
        <div className="flex flex-col items-center justify-between gap-8 py-8">
          <nav className="horizontal-scroll overflow-auto">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-16">
              <li>
                <Link href="" className="footer_navlink">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="" className="footer_navlink">
                  Inspiration
                </Link>
              </li>
              <li>
                <Link href="" className="footer_navlink">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="footer_navlink">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="" className="footer_navlink">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="" className="footer_navlink">
                  Journal
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="horizontal-scroll overflow-auto">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-16">
              <li>
                <Link href="" className="footer_navlink">
                  Booking Conditions
                </Link>
              </li>
              <li>
                <Link href="" target="_blank" className="footer_navlink">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="" className="footer_navlink">
                  Pre-Departure Info
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="line-separator-horizontal"></div>

      <div className="wrapper">
        <div className="grid items-center justify-center gap-3 py-6 text-center lg:grid-flow-col lg:gap-12">
          <div className="flex flex-col items-center py-9">
            <span>Call us</span>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="footer_navlink mt-1 text-paragraph"
            >
              +234 071 548 680
            </Link>
          </div>

          <div className="is-hidden-mobile line-separator-vertical"></div>
          <div className="flex flex-col items-center py-9">
            <span>Email Us</span>
            <Link href="" className="footer_navlink mt-1 text-paragraph">
              hello@theabdul
            </Link>
          </div>
        </div>
      </div>

      <div className="line-separator-horizontal"></div>

      <div className="wrapper">
        <div className="flex w-full flex-col items-center pt-8">
          <div className="flex justify-center gap-4">
            <Link href="" target="_blank" aria-label="Facebook" className="p-4">
              <FaSquareFacebook size={16} />
            </Link>
            <Link href="" target="_blank" aria-label="Twitter" className="p-4">
              <FaXTwitter size={16} />
            </Link>
            <Link
              href=""
              target="_blank"
              aria-label="Instagram"
              className="p-4"
            >
              <FaInstagram size={16} />
            </Link>
            <Link href="" target="_blank" aria-label="LinkedIn" className="p-4">
              <FaLinkedin size={16} />
            </Link>
          </div>

          <div className="my-6 grid gap-x-6 gap-y-4 text-center lg:grid-flow-col">
            <Link href="" className="footer_navlink">
              Terms & Conditions
            </Link>
            <div>© copyright @TheAbdul. All rights Reserved</div>
            <Link href="" className="footer_navlink">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
