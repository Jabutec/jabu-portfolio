"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#0d1117] text-white">

      {/* Editor */}
      <div className="flex-1 p-6 overflow-hidden">
        <div className="bg-[#161b22] h-full rounded-xl shadow-lg p-6 border border-gray-800 overflow-y-auto">

          {/* Top bar */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Tab */}
          <div className="mb-4 text-sm text-gray-400">portfolio.tsx</div>

          {/* Terminal */}
          <div className="bg-black text-green-400 font-mono text-sm p-3 rounded mb-4 border border-gray-800">
            <span className="text-gray-500">$ </span>
            <Typewriter
              words={["npm run dev", "Starting server...", "Portfolio ready"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </div>

          {/* CODE CONTENT - mix of pre blocks and real layout divs */}
          <div className="font-mono text-sm leading-6">

            {/* ── function signature ── */}
            <pre className="font-mono text-sm leading-6 whitespace-pre-wrap">
              <span className="text-purple-400">export default function</span>{" "}
              <span className="text-green-400">Portfolio</span>() {"{"}{"\n\n"}

              {"  "}<span className="text-purple-400">class</span>{" "}
              <span className="text-green-400">Developer</span> {"{"}{"\n\n"}

              {"    "}name{"     "} = <span className="text-yellow-300">"Jabulani Mokoena"</span>;{"\n"}
              {"    "}title{"    "} = <span className="text-yellow-300">"Graduate"</span>;{"\n"}
              {"    "}location = <span className="text-yellow-300">"Meyerton, Gauteng"</span>;{"\n\n"}

              {"    "}<span className="text-green-400">getCareerObjectives</span>() {"{"}{"\n"}
              {"      "}<span className="text-purple-400">return</span> ({"\n"}
              {"        "}<span className="text-yellow-300">"Motivated IT graduate from North-West University,"</span>{"\n"}
              {"        "}<span className="text-yellow-300">"specialising in Systems Development and Business Intelligence,"</span>{"\n"}
              {"        "}<span className="text-yellow-300">"graduating May 2026."</span>{"\n"}
              {"        "}<span className="text-yellow-300">"Eager to contribute to innovative tech solutions and grow as a developer."</span>{"\n"}
              {"      "});{"\n"}
              {"    "}{"}"}{"\n\n"}

              {"}"}
            </pre>

            {/* ── BUTTONS — outside pre ── */}
            <div className="mt-4 ml-6 grid grid-cols-3 gap-[10px] max-w-[420px]">

              <a href="https://github.com/Jabutec" target="_blank"
                className="flex items-center gap-[9px] h-[42px] px-[14px] rounded-[10px] bg-[#1a2744] border border-[#2a3a60] text-blue-400 text-[13px] font-medium hover:bg-blue-800 hover:border-blue-500 hover:text-white transition duration-200 hover:-translate-y-px active:scale-95 min-w-0">
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span className="truncate">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/jabulani-mokoena/" target="_blank"
                className="flex items-center gap-[9px] h-[42px] px-[14px] rounded-[10px] bg-[#1a2744] border border-[#2a3a60] text-blue-400 text-[13px] font-medium hover:bg-blue-800 hover:border-blue-500 hover:text-white transition duration-200 hover:-translate-y-px active:scale-95 min-w-0">
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="truncate">LinkedIn</span>
              </a>

              <a href="https://x.com/JabuTech" target="_blank"
                className="flex items-center gap-[9px] h-[42px] px-[14px] rounded-[10px] bg-[#1a2744] border border-[#2a3a60] text-blue-400 text-[13px] font-medium hover:bg-blue-800 hover:border-blue-500 hover:text-white transition duration-200 hover:-translate-y-px active:scale-95 min-w-0">
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
                <span className="truncate">X</span>
              </a>

              <a href="mailto:mokoenajabulani730@email.com"
                className="flex items-center gap-[9px] h-[42px] px-[14px] rounded-[10px] bg-[#1a2744] border border-[#2a3a60] text-blue-400 text-[13px] font-medium hover:bg-blue-800 hover:border-blue-500 hover:text-white transition duration-200 hover:-translate-y-px active:scale-95 min-w-0">
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.5.2-.96.532-1.3L12 12.727 23.468 4.157c.332.34.532.8.532 1.3z"/>
                  <path d="M12 10.09L.808 2.018A1.63 1.63 0 0 1 1.636.364h20.728c.297 0 .576.08.808.218z"/>
                </svg>
                <span className="truncate">Email</span>
              </a>

              <a href="tel:+27735347153"
                className="flex items-center gap-[9px] h-[42px] px-[14px] rounded-[10px] bg-[#1a2744] border border-[#2a3a60] text-blue-400 text-[13px] font-medium hover:bg-blue-800 hover:border-blue-500 hover:text-white transition duration-200 hover:-translate-y-px active:scale-95 min-w-0">
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="truncate">+27 73 534 7153</span>
              </a>

              <a href="/Jabulani_Mokoena_CV.pdf" download
                className="col-span-3 flex items-center justify-center gap-2 h-[42px] rounded-[10px] bg-green-900 border border-green-700 text-green-200 text-[13px] font-semibold hover:bg-green-800 hover:border-green-500 hover:text-white transition duration-200 hover:-translate-y-px active:scale-95">
                <svg className="w-[15px] h-[15px] fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download CV
              </a>

            </div>

            {/* ── PROJECTS label — pre for IDE text ── */}
            <pre className="font-mono text-sm leading-6 whitespace-pre-wrap mt-6">
              {"  "}<span className="text-purple-400">const</span>{" "}
              <span className="text-green-400">projects</span> = [
            </pre>

            {/* ── PROJECT CARDS — outside pre ── */}
            <div className="ml-8 my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Beauty Platform",
                  desc: "A full-featured salon booking and inspiration platform where users can discover styles, book appointments, and stylists can manage their portfolios.",
                  stack: ["Next.js", "Node.js", "Cloudinary"],
                  demo: "https://github.com/Jabutec/kefresh",
                  github: "https://github.com/Jabutec/kefresh",
                },
                {
                  name: "Student Portal",
                  desc: "An integrated learning system combining theory modules and practical exercises with progress tracking and assessment tools for students and educators.",
                  stack: ["React", "Node.js", "MySQL"],
                  demo: "https://github.com/Jabutec/ai-agents",
                  github: "https://github.com/Jabutec/ai-agents",
                },
                {
                  name: "Data Dashboard",
                  desc: "An analytics dashboard surfacing labour market trends and inflation insights through interactive visualisations built with Python and Power BI.",
                  stack: ["Python", "Power BI"],
                  demo: "https://github.com/Jabutec/Labour-Market-Trends-Business-Impact-Analysis",
                  github: "https://github.com/Jabutec/Labour-Market-Trends-Business-Impact-Analysis",
                },
              ].map((project) => (
                <div
                  key={project.name}
                  className="bg-[#0d1117] border border-[#2a3a60] rounded-xl p-5 flex flex-col gap-3 hover:border-blue-500 transition duration-200"
                >
                  <p className="font-mono text-[14px] font-bold text-green-400">
                    {project.name}
                  </p>

                  <p className="font-mono text-[12.5px] text-gray-300 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] bg-[#1a2744] border border-[#2a3a60] text-blue-400 rounded-md px-2 py-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto pt-1">
                    <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-[6px] h-[34px] rounded-lg bg-[#1a2744] border border-[#2a3a60] text-blue-400 font-mono text-[11.5px] hover:bg-blue-800 hover:border-blue-500 hover:text-white transition duration-150">
                      <svg className="w-[13px] h-[13px] fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── EDUCATION label ── */}
<pre className="font-mono text-sm leading-6 whitespace-pre-wrap mt-6">
  {"  "}<span className="text-purple-400">const</span>{" "}
  <span className="text-green-400">education</span> = {"{"}
</pre>

{/* ── EDUCATION CARD — outside pre ── */}
<div className="ml-8 my-4">
  <div className="bg-[#0d1117] border border-[#2a3a60] rounded-xl p-5 flex flex-col gap-4 max-w-sm hover:border-blue-500 transition duration-200">

    {/* Icon + degree */}
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-[#1a2744] border border-[#2a3a60] flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      </div>
      <div>
        <p className="font-mono text-[14px] font-bold text-green-400">BSc Information Technology</p>
        <p className="font-mono text-[12px] text-blue-400 mt-[2px]">North-West University</p>
      </div>
    </div>

    {/* Details */}
    <div className="flex flex-col gap-2 border-t border-[#2a3a60] pt-3">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-gray-500">specialisation:</span>
        <span className="font-mono text-[11px] text-yellow-300">"Systems Development &amp; Business Intelligence"</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-gray-500">status:</span>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-green-900 border border-green-700 text-green-300 rounded-md px-2 py-[2px]">
          <span className="w-[6px] h-[6px] rounded-full bg-green-400 inline-block"></span>
          Graduated 2026
        </span>
      </div>
    </div>

  </div>
</div>
{/* ── EDUCATION CARD — outside pre ── */}
<div className="ml-8 my-4">
  <div className="bg-[#0d1117] border border-[#2a3a60] rounded-xl p-5 flex flex-col gap-4 max-w-sm hover:border-blue-500 transition duration-200">

    {/* Icon + degree */}
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-[#1a2744] border border-[#2a3a60] flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      </div>
      <div>
        <p className="font-mono text-[14px] font-bold text-green-400">National Senior Certificate</p>
        <p className="font-mono text-[12px] text-blue-400 mt-[2px]">Lekoa-Shandu Secondary school</p>
      </div>
    </div>

    {/* Details */}
    <div className="flex flex-col gap-2 border-t border-[#2a3a60] pt-3">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-gray-500">specialisation:</span>
        <span className="font-mono text-[11px] text-yellow-300">"Mathematics &amp; Science"</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-gray-500">status:</span>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-green-900 border border-green-700 text-green-300 rounded-md px-2 py-[2px]">
          <span className="w-[6px] h-[6px] rounded-full bg-green-400 inline-block"></span>
          Matric 2021
        </span>
      </div>
    </div>

  </div>
</div>

{/* ── closing bracket ── */}
<pre className="font-mono text-sm leading-6 whitespace-pre-wrap">
  {"  "}{"}"}{"\n\n"}
  {"  "}<span className="text-purple-400">return</span> ({"\n"}
  {"    "}&lt;Portfolio /&gt;{"\n"}
  {"  "}){"\n"}
  {"}"}
</pre>

          </div>
        </div>
      </div>
    </div>
  );
}