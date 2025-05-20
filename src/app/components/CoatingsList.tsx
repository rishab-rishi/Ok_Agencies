// components/CoatingList.tsx

'use client';

export default function CoatingList() {
  const coatings = [
    'Gun Barrel (as heat treated and oiled finish)',
    'Heat-treated and ground finish',
    'Zinc phosphated & oiled',
    'Zinc plated with white/clear, yellow, green & black passivations',
    'Fluoro carbon coating',
    'Dacromet/Geomet 320 & 500 with various top coat options',
    'Application of adhesives, sealants and lubricants on threads as well as on other surfaces',
    'Magni Coating',
    'Hot Dip Galvanized',
  ];

  return (
    <section className="bg-white-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow max-w-5xl mx-auto px-15 py-15 ">
        {/* <h2 className="text-2xl font-bold text-center text-black mb-6">Coatings</h2> */}
        <ol className="list-decimal list-inside text-black text-base space-y-2 leading-relaxed">
          {coatings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
