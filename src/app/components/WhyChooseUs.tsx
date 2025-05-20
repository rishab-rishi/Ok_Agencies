'use client';
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full text-center text-black">
      {/* Background Image */}
      <Image
        src="/why-choose-us-2.jpg"
        alt="Fasteners Background"
        fill
        className="object-cover z-0"
      />

      {/* Content Layer */}
      <div className="relative z-10 py-16 bg-gray-100/60">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12 px-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">HIGH-QUALITY FASTENERS</h3>
            <p>
              We deliver high-quality fasteners through decades of expertise,
              rigorous quality control, and a commitment to precision in every
              piece.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">CUSTOM ORDERS</h3>
            <p>
              We offer custom fastener solutions to meet the unique
              specifications of our clients, ensuring the perfect fit for every
              application.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">RELIABLE DELIVERY</h3>
            <p>
              Our fast and reliable delivery is backed by efficient logistics,
              robust inventory management and a commitment to keeping your
              projects on schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
