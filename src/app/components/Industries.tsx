'use client';

import Image from 'next/image';

const industries = [
  { name: "AUTOMOTIVE", img: "/automotive-edit-2-blue.png" },
  { name: "FARMING", img: "/farm-edit-2-blue.png" },
  { name: "HEAVY VEHICLES", img: "/heavy-vehicles-edit-2-blue.png" },
  { name: "CONSTRUCTION", img: "/construction-edit-blue.png" },
];

export default function Industries() {
  return (
    <section className="py-16 bg-gray-100 w-full text-center">
      <h2 className="text-3xl font-bold mb-10 text-black">Industries We Serve</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {industries.map(industry => (
          <div key={industry.name} className="flex flex-col items-center text-black">
            <Image src={industry.img} alt={industry.name} width={80} height={80} />
            <h3 className="mt-4 font-semibold">{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
