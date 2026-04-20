import fs from "fs";
import path from "path";

const signalsPath = path.join(process.cwd(), "data/signals.json");

type LeagueEntry = {
  rank: number;
  company: string;
  score: number;
  change: "up" | "down" | "same";
};

function ChangeIndicator({ change }: { change: string }) {
  if (change === "up") return <span className="lt-change up">↑</span>;
  if (change === "down") return <span className="lt-change down">↓</span>;
  return <span className="lt-change same">—</span>;
}

function LeagueTable({
  title,
  subtitle,
  entries,
}: {
  title: string;
  subtitle: string;
  entries: LeagueEntry[];
}) {
  return (
    <div className="lt-section">
      <div className="lt-section-header">
        <h2 className="lt-section-title">{title}</h2>
        <p className="lt-section-sub">{subtitle}</p>
      </div>
      <table className="lt-table">
        <thead>
          <tr>
            <th className="lt-th lt-th-rank">#</th>
            <th className="lt-th">Company</th>
            <th className="lt-th lt-th-right">Score</th>
            <th className="lt-th lt-th-right">Trend</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.company} className="lt-row">
              <td className="lt-td lt-td-rank">
                {entry.rank <= 3 ? (
                  <span className={`lt-medal rank-${entry.rank}`}>
                    {entry.rank}
                  </span>
                ) : (
                  <span className="lt-rank-num">{entry.rank}</span>
                )}
              </td>
              <td className="lt-td lt-td-company">{entry.company}</td>
              <td className="lt-td lt-td-right">
                <div className="lt-score-wrap">
                  <div
                    className="lt-score-bar"
                    style={{ width: `${entry.score}%` }}
                  />
                  <span className="lt-score-num">{entry.score}</span>
                </div>
              </td>
              <td className="lt-td lt-td-right">
                <ChangeIndicator change={entry.change} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LeagueTablePage() {
  const signals = JSON.parse(fs.readFileSync(signalsPath, "utf-8"));
  const { leagueTable } = signals;

  return (
    <main className="lt-page">
      <div className="lt-header">
        <span className="intel-label">Monthly Rankings</span>
        <h1 className="lt-title">League Table</h1>
        <p className="lt-desc">
          SA tech ecosystem ranked by data. Updated monthly. No opinions —
          just numbers.
        </p>
        <span className="lt-month">{leagueTable.month}</span>
      </div>

      <div className="lt-grid">
        <LeagueTable
          title="Innovation Standing"
          subtitle="Who is hiring for the most modern tech stack"
          entries={leagueTable.innovation}
        />
        <LeagueTable
          title="Legacy Index"
          subtitle="Who is carrying the most tech debt signals"
          entries={leagueTable.legacy}
        />
        <LeagueTable
          title="Grad-Friendly Standing"
          subtitle="Who is actually investing in junior talent"
          entries={leagueTable.gradFriendly}
        />
      </div>
    </main>
  );
}