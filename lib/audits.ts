import fs from "fs";
import path from "path";
import matter from "gray-matter";

const auditsDir = path.join(process.cwd(), "content/intelligence");

export type Audit = {
  slug: string;
  title: string;
  track: string;
  category: string;
  date: string;
  verdict: string;
  summary: string;
  image: string;
};

export async function getAudits(): Promise<Audit[]> {
  const files = fs.readdirSync(auditsDir);

  const audits = files
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(auditsDir, filename);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));

      return {
        slug,
        title: data.title,
        track: data.track,
        category: data.category || "General",
        date: new Date(data.date).toISOString().split("T")[0],
        verdict: data.verdict,
        summary: data.summary,
        image: data.image || "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return audits;
}