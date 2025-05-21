'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1d1c] text-white py-12 px-4 sm:px-6">
  <div className="max-w-full sm:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-sm text-left">
  {/* Address */}
  <div className="col-span-1">
    <h3 className="font-semibold mb-2 text-base">ADDRESS</h3>
    <p className="leading-relaxed">OK AGENCIES,<br />No:113/1, Lakshmi Arcade,<br />General Patters Road,<br />Chennai - 600002.</p>
  </div>

  {/* Email & Phone */}
  <div className="col-span-1">
    <h3 className="font-semibold mb-2 text-base">EMAIL</h3>
    <a href="mailto:temp@gmail.com" className="underline break-all block">admin.sales@okagency.in</a>
    <h3 className="font-semibold mt-4 mb-2 text-base">PHONE</h3>
    <a href="tel:04425384314" className="underline block">+91 99621 76439</a>
    <a href="tel:+919840884420" className="underline block">+91 98408 84420</a>
  </div>

  {/* Useful Links */}
  <div className="col-span-1">
    <h3 className="font-semibold mb-2 text-base">Useful Links</h3>
    <ul className="space-y-1">
      <li><Link href="/product/hex-head" className="hover:underline">Hex Head</Link></li>
      <li><Link href="/product/socket-head" className="hover:underline">Socket Head</Link></li>
      <li><Link href="/product/washers" className="hover:underline">Washers</Link></li>
      <li><Link href="/product/nuts" className="hover:underline">Nuts</Link></li>
      <li><Link href="/product/coatings" className="hover:underline">Coatings</Link></li>
    </ul>
  </div>

  {/* Socials */}
  <div className="col-span-1">
    <h3 className="font-semibold mb-2 text-base">Socials</h3>
    <div className="flex flex-wrap gap-4 mt-4">
      <a href="https://facebook.com" className="p-2 bg-black rounded-full"><FaFacebookF /></a>
      <a href="https://instagram.com" className="p-2 bg-black rounded-full"><FaInstagram /></a>
      <a href="https://linkedin.com" className="p-2 bg-black rounded-full"><FaLinkedinIn /></a>
      <a href="https://twitter.com" className="p-2 bg-black rounded-full"><FaXTwitter /></a>
    </div>
  </div>
</div>
    </footer>
  );
}
