// components/Flexure.tsx
const highlights = [
  {
    year: "Present",
    title: "Freelance web development",
    bullets: [
      "Designed and developed websites for clients across small-business sectors, delivering tailored web solutions based on individual business needs.",
      "Helped clients establish and improve their digital presence, including Google Business Profiles, WhatsApp Business, and professional social media accounts.",
      "Managed projects independently from initial requirements and development through delivery and client support.",
    ],
  },
  {
    year: "2025",
    title: "Geekulcha Hackathon",
    bullets: [
      "Took part in an in-school Geekulcha hackathon, building a services platform connecting students with support like tutoring.",
      "Worked on the backend, including an AI assistant built into the platform.",
    ],
  },
  {
    year: "2025",
    title: "Student learning platform",
    bullets: [
      "Contributed to a full-stack learning platform built for tech students, working on the frontend.",
    ],
  },
];

export default function Flexure() {
  return (
    <section id="flexure" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — identity + CTA */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
              Studio
            </p>

            <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
              Flexure
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6b7280]">
              An independent micro-SaaS studio building sharp, single-utility
              tools — from offline inventory systems to automated data engines.
            </p>

            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fafafa] px-6 py-3 text-sm font-medium text-[#111827] transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-sm"
            >
              View products
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right — career highlights, a real sequence so the timeline device is earned */}
          <div className="rounded-3xl border border-black/5 bg-[#fafafa] p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#9ca3af]">
              Career highlights
            </p>

            <div className="relative mt-6 space-y-10 border-l-2 border-[#C1592D]/25 pl-6">
              {highlights.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-[#C1592D]" />
                  <p className="text-xs text-[#9ca3af]">{item.year}</p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#111827]">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-[#6b7280]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}