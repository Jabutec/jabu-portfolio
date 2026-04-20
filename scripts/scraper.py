import json
import os
from datetime import date
from playwright.sync_api import sync_playwright

SIGNALS_PATH = os.path.join(os.path.dirname(__file__), "../data/signals.json")
OPPORTUNITIES_PATH = os.path.join(
    os.path.dirname(__file__), "../data/opportunities.json"
)

# ── Job boards ────────────────────────────────────────────
BOARDS = [
    "https://www.pnet.co.za/jobs/{query}/",
    "https://www.careers24.com/jobs/{query}/",
    "https://www.graduates24.com/jobs/{query}/",
]

# ── Companies to track ────────────────────────────────────
COMPANIES = {
    "fnb": "fnb",
    "absa": "absa",
    "standardBank": "standard-bank",
    "nedbank": "nedbank",
    "tymeBank": "tymebank",
    "yoco": "yoco",
    "peachPayments": "peach-payments",
}

# ── Blog intelligence keywords ────────────────────────────
TECH_KEYWORDS = [
    "engineer",
    "developer",
    "software",
    "data",
    "cloud",
    "devops",
    "backend",
    "frontend",
    "fullstack",
    "architect",
    "platform",
    "ml",
    "machine learning",
    "go",
    "python",
    "java",
    "kotlin",
    "typescript",
    "react",
    "kubernetes",
    "data engineer",
    "data analyst",
    "business intelligence",
    "data scientist",
    "analytics",
    "etl",
    "pipeline",
    "power bi",
    "tableau",
    "sql",
    "snowflake",
    "spark",
    "airflow",
    "dbt",
    "looker",
    "bigquery",
]

# ── Personal job target keywords ──────────────────────────
MY_KEYWORDS = [
    "systems developer",
    "systems development",
    "junior developer",
    "graduate developer",
    "software developer",
    "web developer",
    "business intelligence",
    "bi developer",
    "data engineer",
    "data analyst",
    "it graduate",
    "graduate programme",
    "internship",
    "learnership",
]


# ── Scrape a single URL ───────────────────────────────────
def scrape_url(page, url: str):
    try:
        page.goto(url, timeout=40000, wait_until="networkidle")
        page.wait_for_timeout(4000)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000)

        content = page.inner_text("body").lower()
        lines = [l.strip() for l in content.split("\n") if l.strip()]
        return lines

    except Exception as e:
        print(f"    failed {url} — {e}")
        return []


# ── Scrape all boards for one company ────────────────────
def scrape_company(page, company: str, query: str):
    all_lines = []
    sources_hit = 0

    for board in BOARDS:
        url = board.format(query=query)
        print(f"    scraping {url}")
        lines = scrape_url(page, url)
        if lines:
            all_lines.extend(lines)
            sources_hit += 1

    # deduplicate lines across boards
    all_lines = list(dict.fromkeys(all_lines))

    tech_count = sum(1 for line in all_lines if any(kw in line for kw in TECH_KEYWORDS))

    matches = []
    for line in all_lines:
        if any(kw in line for kw in MY_KEYWORDS):
            if 8 < len(line) < 120:
                matches.append(
                    {
                        "company": company,
                        "snippet": line.title(),
                        "url": BOARDS[0].format(query=query),
                        "found": str(date.today()),
                    }
                )

    print(
        f"  {company}: {tech_count} tech roles across {sources_hit} boards, {len(matches)} personal matches"
    )
    return tech_count, matches


def run():
    print("Starting scraper — PNet + Careers24 + Graduates24...")
    all_tech_counts = {}
    all_opportunities = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )

        for company, query in COMPANIES.items():
            print(f"Scraping {company}...")
            tech_count, matches = scrape_company(page, company, query)
            all_tech_counts[company] = tech_count
            all_opportunities.extend(matches)

        browser.close()

    # ── Load existing signals ─────────────────────────────
    try:
        with open(SIGNALS_PATH, "r") as f:
            existing = json.load(f)
    except Exception:
        existing = {}

    prev = existing.get("transferMarket", {})

    transfer_market = {}
    for company, current in all_tech_counts.items():
        previous = prev.get(company, {}).get("q1_2026", current)
        if current == -1 or current == 0:
            current = previous
        change = round(((current - previous) / previous) * 100) if previous else 0
        transfer_market[company] = {
            "q4_2025": prev.get(company, {}).get("q4_2025", previous),
            "q1_2026": current,
            "change": change,
        }

    signals_output = {
        "lastUpdated": str(date.today()),
        "transferMarket": transfer_market,
        "ghostTable": existing.get("ghostTable", {}),
        "skillPremium": existing.get("skillPremium", {}),
        "leagueTable": existing.get("leagueTable", {}),
        "sources": ["PNet", "Careers24", "Graduates24"],
    }

    with open(SIGNALS_PATH, "w") as f:
        json.dump(signals_output, f, indent=2)

    print("signals.json updated.")

    # ── Load existing opportunities ───────────────────────
    try:
        with open(OPPORTUNITIES_PATH, "r") as f:
            existing_opps = json.load(f)
    except Exception:
        existing_opps = []

    existing_keys = {(o["company"], o["snippet"]) for o in existing_opps}
    new_opps = [
        o
        for o in all_opportunities
        if (o["company"], o["snippet"]) not in existing_keys
    ]

    merged = new_opps + existing_opps
    merged = merged[:100]

    with open(OPPORTUNITIES_PATH, "w") as f:
        json.dump(merged, f, indent=2)

    print(f"opportunities.json updated — {len(new_opps)} new, {len(merged)} total.")
    print("Done.")


if __name__ == "__main__":
    run()
