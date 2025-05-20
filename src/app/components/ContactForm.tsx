'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    });

    setLoading(false);

    if (res.ok) {
      alert('Message sent!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="relative w-full h-full text-center text-black scroll-mt-[120px]" id="contact">
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="p-3 border border-gray-300 text-black w-full bg-gray-400/60 rounded-2xl"
            ></textarea>
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
