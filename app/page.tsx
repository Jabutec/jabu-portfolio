export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Floating Navigation */}
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-black/5 bg-white/75 px-2 py-2 shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-1">
          <a
            href="#home"
            className="rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-colors hover:bg-black/[0.04]"
          >
            Jabulani
          </a>

          <a
            href="#work"
            className="rounded-full px-4 py-2 text-sm text-[#6b7280] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a]"
          >
            Work
          </a>

          <a
            href="#philosophy"
            className="rounded-full px-4 py-2 text-sm text-[#6b7280] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a]"
          >
            Philosophy
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#0a0a0a] px-5 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-px"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 sm:px-8 lg:px-12"
      >
        <div className="w-full">
          <div className="max-w-5xl">
            <p className="mb-7 text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
              Software · Data · Cloud
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]">
              I build software
              <br />
              and data products.
            </h1>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-lg leading-8 text-[#6b7280] sm:text-xl">
                I turn ideas and real-world problems into practical digital
                products, combining software engineering, data, and cloud
                technologies.
              </p>

              <div className="flex shrink-0 gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-[#0a0a0a] px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  View my work
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-black/10 px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-sm"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* Core Stack */}
          <div className="mt-24 border-t border-black/10 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-[#6b7280]">
                Core stack
              </span>

              <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
                <span>Python</span>
                <span>SQL</span>
                <span>Next.js</span>
                <span>React</span>
                <span>Azure</span>
                <span>Power BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section
        id="philosophy"
        className="border-t border-black/5 bg-[#fafafa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
              Core stack & philosophy
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
              Technology is the tool.
              <br />
              <span className="text-[#6b7280]">
                The system is the product.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Work Placeholder */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
          Featured case studies
        </p>

        <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          Selected work.
        </h2>
      </section>

      {/* Footer Placeholder */}
      <footer
        id="contact"
        className="border-t border-black/10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
          <div>
            <p className="font-display text-2xl font-semibold">
              Jabulani Mokoena
            </p>

            <p className="mt-2 text-[#6b7280]">
              Software & Data Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-[#0f766e]">
              Resume
            </a>
            <a href="#" className="transition-colors hover:text-[#0f766e]">
              GitHub ↗
            </a>
            <a href="#" className="transition-colors hover:text-[#0f766e]">
              LinkedIn ↗
            </a>
            <a href="mailto:" className="transition-colors hover:text-[#0f766e]">
              Contact ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}