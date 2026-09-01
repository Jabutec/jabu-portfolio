// components/Flexure.tsx
export default function Flexure() {
  return (
    <section id="flexure" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
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

          {/* Right — ZakaScore highlight card */}
          <div className="rounded-3xl border border-black/5 bg-[#fafafa] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#9ca3af]">
                Currently shipping
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#111827]">
              ZakaScore
            </h3>
            <p className="mt-1 text-sm font-medium text-[#6b7280]">
              Localized financial analytics
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
              Lightweight financial intelligence and credit-scoring platform for
              micro-merchants. A localized analytics engine that lets small
              businesses track cash flow, evaluate credit risk, and manage
              merchant metrics with minimal friction.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Next.js', 'FastAPI', 'SQLite', 'Supabase'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-[#374151]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}