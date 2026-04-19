import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import TransferChart from "@/components/TransferChart";

const auditsDir = path.join(process.cwd(), "content/intelligence");
const signalsPath = path.join(process.cwd(), "data/signals.json");



export async function generateStaticParams() {
  const files = fs.readdirSync(auditsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export default async function AuditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(auditsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Load signals for chart
  const signals = JSON.parse(fs.readFileSync(signalsPath, "utf-8"));
  const chartData = Object.entries(signals.transferMarket).map(
    ([company, val]: [string, any]) => ({
      company: company
        .replace(/([A-Z])/g, " $1")
        .replace(/^[a-z]/, (s) => s.toUpperCase())
        .trim(),
      change: val.change,
    })
  );

  return (
    <main className="audit-post">
      <Link href="/intelligence" className="back-link">
        ← Intelligence Feed
      </Link>

      <div className="audit-post-header">
        <div className="audit-post-meta">
          <span className="audit-track">{data.track}</span>
          <span className="audit-date">
            {new Date(data.date).toISOString().split("T")[0]}
          </span>
        </div>
        <h1 className="audit-post-title">{data.title}</h1>
        <p className="audit-post-summary">{data.summary}</p>
      </div>

      <TransferChart data={chartData} />

      <div className="audit-post-body">
        <MDXRemote source={content} />
      </div>

      <div className="audit-verdict-block">
        <span className="verdict-label">Verdict</span>
        <span className="verdict-word">{data.verdict}</span>
      </div>
    </main>
  );
}