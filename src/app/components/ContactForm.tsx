'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full h-full text-center text-black scroll-mt-[120px]"
    >
      <Image
        src="/nuts-bg-white.png"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="relative z-10 bg-white/90 px-4 py-12 sm:px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to work with us?</h2>
        <p className="mb-10 text-base sm:text-lg">
          Complete this form and we will get back to you in 24 hours.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="hidden lg:block">
            <Image
              src="/nuts-guy.png"
              alt="Contact Us Cartoon"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>

          <form
            action="https://formspree.io/f/mldbvqdk"
            method="POST"
            className="flex flex-col gap-5 w-full max-w-md"
            onSubmit={() => setLoading(true)}
          >
            {/* Redirect after submission (optional) */}
            <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />

            {/* Honeypot spam field */}
            {/* <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" /> */}

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={4}
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <button
              type="submit"
              className="bg-black text-white py-3 hover:bg-gray-800 transition rounded-2xl"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
