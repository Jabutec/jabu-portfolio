export default function AboutPage() {
  return (
    <main style={{ padding: "2.5rem 2rem", maxWidth: "680px" }}>

      <div style={{ marginBottom: "2.5rem", paddingBottom: "1.5rem", borderBottom: "0.5px solid rgba(0,255,159,0.12)" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#8b949e", textTransform: "uppercase" as const }}>About</span>
        <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#00ff9f", margin: "8px 0 6px", fontFamily: "Google Sans, sans-serif" }}>Jabulani Mokoena</h1>
        <p style={{ fontSize: "14px", color: "#e6edf3", margin: "0 0 4px", fontFamily: "Google Sans, sans-serif" }}>BSc IT Graduate · Systems Development & Business Intelligence</p>
        <p style={{ fontSize: "13px", color: "#8b949e", margin: 0, fontFamily: "Google Sans, sans-serif" }}>Meyerton, Gauteng · South Africa</p>
      </div>

      <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "0.5px solid rgba(255,255,255,0.04)" }}>
        <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#c9d1d9", marginBottom: "1rem", fontFamily: "Google Sans, sans-serif" }}>
          I am a graduate developer from North-West University with a focus on systems development and business intelligence. I build things that work, automated pipelines, data systems, and web applications that solve real problems.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#c9d1d9", marginBottom: "1rem", fontFamily: "Google Sans, sans-serif" }}>
          This site is my proof of work. The Intelligence feed tracks the South African tech ecosystem using a scraper I built myself, pulling data daily from PNet, Careers24 and Graduates24, processing it with Python and Pandas, and publishing it automatically using GitHub Actions. Every post is backed by real data, not opinion.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#c9d1d9", margin: 0, fontFamily: "Google Sans, sans-serif" }}>
          I apply for jobs every day. I built this tool partly because I was tired of not knowing where the market was actually moving. Now I do and I write about it publicly.
        </p>
      </div>

      <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "0.5px solid rgba(255,255,255,0.04)" }}>
        <h2 style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#8b949e", margin: "0 0 1rem", fontFamily: "Google Sans, sans-serif" }}>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
          {[
            "Python", "Playwright", "Pandas",
            "Next.js", "React", "TypeScript",
            "GitHub Actions", "SQL", "Power BI",
            "Node.js", "Git", "REST APIs",
            "Business Intelligence", "Data Pipelines", "Web Scraping",
          ].map((skill) => (
            <span key={skill} style={{
              fontSize: "12px",
              padding: "5px 12px",
              borderRadius: "4px",
              border: "0.5px solid rgba(0,255,159,0.2)",
              color: "rgba(0,255,159,0.7)",
              fontFamily: "monospace",
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "0.5px solid rgba(255,255,255,0.04)" }}>
        <h2 style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#8b949e", margin: "0 0 1rem", fontFamily: "Google Sans, sans-serif" }}>What I am looking for</h2>
        <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#c9d1d9", margin: 0, fontFamily: "Google Sans, sans-serif" }}>
          A junior or graduate developer role where I can contribute immediately, ideally in a team that values data, automation, and shipping real products. Open to software development, data engineering, or business intelligence roles across South Africa.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#8b949e", margin: "0 0 1rem", fontFamily: "Google Sans, sans-serif" }}>Get in touch</h2>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px" }}>
          {[
            { label: "Email", href: "mailto:mokoenajabulani730@gmail.com" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/jabulani-mokoena/" },
            { label: "GitHub", href: "https://github.com/Jabutec" },
            { label: "X", href: "https://x.com/JabuTech" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" style={{
              fontSize: "13px",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "0.5px solid rgba(255,255,255,0.1)",
              color: "#c9d1d9",
              textDecoration: "none",
              fontFamily: "Google Sans, sans-serif",
            }}>
              {link.label}
            </a>
          ))}
          <a href="/Jabulani_Mokoena_CV.pdf" download style={{
            fontSize: "13px",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "0.5px solid rgba(0,255,159,0.3)",
            color: "#00ff9f",
            textDecoration: "none",
            background: "rgba(0,255,159,0.08)",
            fontFamily: "Google Sans, sans-serif",
          }}>
            Download CV
          </a>
        </div>
      </div>

    </main>
  );
}