// components/CaseStudies.tsx
const projects = [
  {
    name: "Kasi Pitchside",
    tagline: "Sports analytics & pipeline",
    description:
      "Automated PSL match data pipeline and dynamic graphic generation engine. An event-driven data warehouse that ingests match records, handles dual-dialect database upserts across SQLite and PostgreSQL, and renders real-time visual goal cards for automated social feeds.",
    github: "https://github.com/Jabutec/kasi-pitchside",
    image: "https://images.unsplash.com/photo-1700870748737-c1e533c9e3b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "ZakaScore",
    tagline: "Localized financial analytics",
    description:
      "Lightweight financial intelligence and credit-scoring platform for micro-merchants. A localized analytics engine that lets small businesses track cash flow, evaluate credit risk, and manage merchant metrics with minimal friction.",
    github: "https://github.com/Jabutec/zakascore",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Homeland Rides",
    tagline: "Intercity transit platform",
    description:
      "Long-distance ride-sharing and transit coordination web application. A full-stack transit platform handling real-time booking routes, user data persistence, and scalable database schemas.",
    github: "https://github.com/Jabutec/hitchhike",
    image: "https://images.unsplash.com/photo-1702134731681-97d4f829b4a6?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
        Featured case studies
      </p>

      <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
        Selected work.
      </h2>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-[#fafafa] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* preview — grayscale + accent tint so three unrelated photos read as one system */}
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full scale-100 object-cover grayscale transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#C1592D] mix-blend-multiply opacity-30" />
              <div className="absolute inset-0 bg-[#111827]/10" />
            </div>

            <div className="flex flex-1 flex-col p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-[#6b7280]">{project.tagline}</p>
              <p className="mt-6 text-sm leading-6 text-[#6b7280]">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block self-start rounded-full border border-[#C1592D] px-5 py-2 text-sm font-medium text-[#C1592D] transition-colors duration-200 hover:bg-[#C1592D] hover:text-white"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}