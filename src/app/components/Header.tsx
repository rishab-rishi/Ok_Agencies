'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll with offset
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const headerHeight = document.querySelector('nav')?.clientHeight || 100;
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll on initial load if URL contains a hash (e.g., /#about)
  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === '/' && hash) {
      const sectionId = hash.replace('#', '');
      setTimeout(() => scrollToSection(sectionId), 100); // Wait a bit for DOM to render
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Click handler for internal section links
  const handleSectionClick = (sectionId: string) => {
    setMenuOpen(false);
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  // const getSectionLink = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm rounded-4xl mx-auto">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/okagencies-white-logo.png"
              alt="OK Agencies Logo"
              width={180}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-12 text-white font-semibold text-lg relative">
          <Link href="/" className="hover:underline hover:text-gray-100">Home</Link>

          {/* Products Dropdown */}
          <div className="relative">
            <div
              ref={dropdownButtonRef}
              onMouseEnter={() => setDesktopDropdownOpen(true)}
            >
              <Link
                href="/product"
                className="flex items-center gap-1 hover:underline hover:text-gray-100"
              >
                Products <ChevronDown size={18} />
              </Link>
            </div>

            {desktopDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 top-full mt-2 w-48 bg-gray-200 text-black rounded shadow-lg z-50 flex flex-col"
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <Link href="/product/hex-head" className="px-4 py-2 hover:bg-gray-100">Hex Head</Link>
                <Link href="/product/socket-head" className="px-4 py-2 hover:bg-gray-100">Socket Head</Link>
                <Link href="/product/washers" className="px-4 py-2 hover:bg-gray-100">Washers</Link>
                <Link href="/product/nuts" className="px-4 py-2 hover:bg-gray-100">Nuts</Link>
                <Link href="/product/coatings" className="px-4 py-2 hover:bg-gray-100">Coatings</Link>
              </div>
            )}
          </div>

          <button
            className="hover:underline hover:text-gray-100"
            onClick={() => handleSectionClick('about')}
          >
            About us
          </button>

          <button
            className="hover:underline hover:text-gray-100"
            onClick={() => handleSectionClick('contact')}
          >
            Contact us
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-black/90 text-white px-4 space-y-4 py-4 font-semibold text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/product"
                onClick={() => setMenuOpen(false)}
                className="flex-grow"
              >
                Products
              </Link>
              <button
                className="p-1"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                aria-label="Toggle product categories"
              >
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
            {mobileDropdownOpen && (
              <div className="flex flex-col space-y-2 mt-2 ml-4 text-base py-2">
                <Link href="/product/hex-head" onClick={() => setMenuOpen(false)}>Hex Head</Link>
                <Link href="/product/socket-head" onClick={() => setMenuOpen(false)}>Socket Head</Link>
                <Link href="/product/washers" onClick={() => setMenuOpen(false)}>Washers</Link>
                <Link href="/product/nuts" onClick={() => setMenuOpen(false)}>Nuts</Link>
                <Link href="/product/coatings" onClick={() => setMenuOpen(false)}>Coatings</Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setMenuOpen(false);
              handleSectionClick('about');
            }}
          >
            About us
          </button>

          <button
            onClick={() => {
              setMenuOpen(false);
              handleSectionClick('contact');
            }}
          >
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
}
