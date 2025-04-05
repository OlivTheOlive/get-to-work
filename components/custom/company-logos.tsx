import Image from "next/image";

// This would be replaced with actual company logos in a production environment
const companyLogos = [
  { name: "Company 1", color: "bg-blue-500" },
  { name: "Company 2", color: "bg-purple-500" },
  { name: "Company 3", color: "bg-cyan-500" },
  { name: "Company 4", color: "bg-green-500" },
  { name: "Company 5", color: "bg-pink-500" },
  { name: "Company 6", color: "bg-yellow-500" },
  { name: "Company 7", color: "bg-indigo-500" },
  { name: "Company 8", color: "bg-red-500" },
];

export function CompanyLogos() {
  return (
    <section className="py-12 bg-slate-950 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 mb-6">
        <h2 className="text-center text-lg text-slate-400">
          Trusted by industry-leading companies
        </h2>
      </div>

      {/* Scrolling logos - first row */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-6 animate-marquee whitespace-nowrap flex">
          {companyLogos.map((company, index) => (
            <div
              key={`${company.name}-1-${index}`}
              className="mx-4 w-32 h-12 relative rounded-md flex items-center justify-center bg-slate-900 border border-slate-800"
            >
              <div
                className={`absolute inset-0 opacity-10 rounded-md ${company.color}`}
              />
              <span className="font-bold text-slate-100">{company.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex">
          {companyLogos.map((company, index) => (
            <div
              key={`${company.name}-2-${index}`}
              className="mx-4 w-32 h-12 relative rounded-md flex items-center justify-center bg-slate-900 border border-slate-800"
            >
              <div
                className={`absolute inset-0 opacity-10 rounded-md ${company.color}`}
              />
              <span className="font-bold text-slate-100">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling logos - second row (opposite direction) */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-6 animate-marquee-reverse whitespace-nowrap flex">
          {[...companyLogos].reverse().map((company, index) => (
            <div
              key={`${company.name}-3-${index}`}
              className="mx-4 w-32 h-12 relative rounded-md flex items-center justify-center bg-slate-900 border border-slate-800"
            >
              <div
                className={`absolute inset-0 opacity-10 rounded-md ${company.color}`}
              />
              <span className="font-bold text-slate-100">{company.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 py-6 animate-marquee2-reverse whitespace-nowrap flex">
          {[...companyLogos].reverse().map((company, index) => (
            <div
              key={`${company.name}-4-${index}`}
              className="mx-4 w-32 h-12 relative rounded-md flex items-center justify-center bg-slate-900 border border-slate-800"
            >
              <div
                className={`absolute inset-0 opacity-10 rounded-md ${company.color}`}
              />
              <span className="font-bold text-slate-100">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
