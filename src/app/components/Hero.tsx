'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/hero-bg-edited.png"
        alt="Fasteners Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute px-4 sm:px-6 md:px-12 mt-10 sm:mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-shadow-black max-w-[95vw] sm:max-w-[80vw] mx-auto leading-snug">
          Delivering Precision Fasteners Since 1979 — Trusted by Industry, Driven by Excellence.
        </h1>

        <div className="mt-6 sm:mt-10">
          <p className="text-white text-2xl sm:text-2xl md:text-3xl font-bold font-poppins mt-20">
            AUTHORIZED DISTRIBUTOR
          </p>
          <p className="text-white text-2xl sm:text-2xl md:text-3xl font-bold font-poppins text-shadow-black mt-8">
            OF
          </p>

          {/* Logo + Text Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 mt-1">
            <Image
              src="/mpp-logo-white.png"
              alt="Logo"
              width={90}
              height={90}
              className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]"
            />
            <span className="text-white text-2xl sm:text-2xl md:text-3xl font-bold font-poppins text-shadow-black text-center sm:text-left">
              MANGAL INDUSTRIES LIMITED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
