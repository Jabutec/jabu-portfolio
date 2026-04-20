import Link from "next/link";
import { getAudits } from "@/lib/audits";

export default async function IntelligencePage() {
  const audits = await getAudits();

  return (
    <main className="intel-feed">
      <div className="intel-header">
        <span className="intel-label">Intelligence Feed</span>
        <h1 className="intel-title">SA Tech Ecosystem</h1>
        <p className="intel-sub">
          Data-backed audits. No fluff. Updated weekly.
        </p>
      </div>
      <div className="lt-shortcut">
          <Link href="/intelligence/league-table" className="lt-shortcut-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14l5-5 5 5H7z"/>
            </svg>
            View April 2026 League Table →
          </Link>
        </div>
      <div className="intel-list">
        {audits.map((audit) => (
          <Link
            key={audit.slug}
            href={`/intelligence/${audit.slug}`}
            className="audit-card"
          >
            <div className="audit-card-top">
              <span className="audit-track">{audit.track}</span>
              <span className="audit-date">{audit.date}</span>
            </div>
            <h2 className="audit-card-title">{audit.title}</h2>
            <p className="audit-card-summary">{audit.summary}</p>
            <div className="audit-verdict">
              <span className="verdict-label">Verdict</span>
              <span className="verdict-word">{audit.verdict}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}