// components/CaseStudies.tsx
const projects = [
  {
    name: "Kasi Pitchside",
    tagline: "Sports analytics & pipeline",
    description:
      "Automated PSL match data pipeline and dynamic graphic generation engine. An event-driven data warehouse that ingests match records, handles dual-dialect database upserts across SQLite and PostgreSQL, and renders real-time visual goal cards for automated social feeds.",
    stack: ["Python", "SQLAlchemy", "PostgreSQL", "PgBouncer", "Docker", "Pillow"],
  },
  {
    name: "ZakaScore",
    tagline: "Localized financial analytics",
    description:
      "Lightweight financial intelligence and credit-scoring platform for micro-merchants. A localized analytics engine that lets small businesses track cash flow, evaluate credit risk, and manage merchant metrics with minimal friction.",
    stack: ["Next.js", "FastAPI", "SQLite", "Supabase"],
  },
  {
    name: "Homeland Rides",
    tagline: "Intercity transit platform",
    description:
      "Long-distance ride-sharing and transit coordination web application. A full-stack transit platform handling real-time booking routes, user data persistence, and scalable database schemas.",
    stack: ["Next.js", "TypeScript", "Vercel", "Supabase"],
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
            className="flex flex-col rounded-[2rem] border border-black/5 bg-[#fafafa] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {project.name}
            </h3>

            <p className="mt-2 text-sm text-[#6b7280]">{project.tagline}</p>

            <p className="mt-6 text-sm leading-6 text-[#6b7280]">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-black/10 pt-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0a0a0a] shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}