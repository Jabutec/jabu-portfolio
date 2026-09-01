// components/Philosophy.tsx
export default function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-black/5 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
            Profile
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Background & interests.
          </h2>
        </div>

        {/* Floating cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* ─── About Me ─── */}
          <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-10">
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#111827]">
              About Me
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
              I am <strong className="text-[#374151]">Jabulani Mokoena</strong>,
              a Software and Data Developer. I build software-as-a-service
              products for localized markets — turning complex data challenges
              into simple, reliable tools that solve real problems for real
              people.
            </p>
          </div>

          {/* ─── Education ─── */}
          <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-10">
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.84 51.05 51.05 0 00-2.658.813m-15.482 0A50.55 50.55 0 0112 13.489a50.55 50.55 0 0112-2.82" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#111827]">
              Education
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-[#111827]">
                  BSc in Information Technology
                </p>
                <p className="text-xs text-[#9ca3af]">North-West University</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">
                  Higher Certificate
                </p>
                <p className="text-xs text-[#9ca3af]">
                  Lekoa-Shandu Secondary School
                </p>
              </div>
            </div>
          </div>

          {/* ─── Hobbies ─── */}
          <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-10">
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#111827]">
              Hobbies
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Football', 'Coding', 'Graphic Design', 'Photography'].map(
                (hobby) => (
                  <span
                    key={hobby}
                    className="rounded-full border border-black/10 bg-[#fafafa] px-3 py-1 text-xs font-medium text-[#374151]"
                  >
                    {hobby}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ─── Languages ─── */}
          <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-10">
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#111827]">
              Languages
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#374151]">English</span>
                <span className="text-xs text-[#9ca3af]">Fluent</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#374151]">isiZulu</span>
                <span className="text-xs text-[#9ca3af]">Native</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#374151]">Sesotho</span>
                <span className="text-xs text-[#9ca3af]">Conversational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}