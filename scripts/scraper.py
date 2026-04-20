import json
import os
from datetime import date
from playwright.sync_api import sync_playwright

SIGNALS_PATH = os.path.join(os.path.dirname(__file__), "../data/signals.json")
OPPORTUNITIES_PATH = os.path.join(
    os.path.dirname(__file__), "../data/opportunities.json"
)

# ── Targets ──────────────────────────────────────────────
TARGETS = {
    "fnb": "https://www.fnb.co.za/careers/",
    "absa": "https://www.absa.africa/absaafrica/careers/",
    "standardBank": "https://careers.standardbank.com/",
    "nedbank": "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/careers.html",
    "tymeBank": "https://www.tymebank.co.za/careers/",
    "yoco": "https://www.yoco.com/za/careers/",
    "peachPayments": "https://www.peachpayments.com/careers",
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

# ── Your personal job target keywords ────────────────────
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


# ── Scraper ───────────────────────────────────────────────
def scrape_company(page, company: str, url: str):
    try:
        page.goto(url, timeout=40000, wait_until="networkidle")
        page.wait_for_timeout(5000)

        # scroll down to trigger lazy loading
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000)

        content = page.inner_text("body").lower()
        lines = [l.strip() for l in content.split("\n") if l.strip()]

        tech_count = sum(1 for line in lines if any(kw in line for kw in TECH_KEYWORDS))

        matches = []
        for line in lines:
            if any(kw in line for kw in MY_KEYWORDS):
                if 8 < len(line) < 120:
                    matches.append(
                        {
                            "company": company,
                            "snippet": line.title(),
                            "url": url,
                            "found": str(date.today()),
                        }
                    )

        print(f"  {company}: {tech_count} tech roles, {len(matches)} personal matches")
        return tech_count, matches

    except Exception as e:
        print(f"  {company}: failed — {e}")
        return -1, []


def run():
    print("Starting scraper...")
    all_tech_counts = {}
    all_opportunities = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for company, url in TARGETS.items():
            print(f"Scraping {company}...")
            tech_count, matches = scrape_company(page, company, url)
            all_tech_counts[company] = tech_count
            all_opportunities.extend(matches)

        browser.close()

    # ── Load existing signals to preserve history ─────────
    try:
        with open(SIGNALS_PATH, "r") as f:
            existing = json.load(f)
    except Exception:
        existing = {}

    prev = existing.get("transferMarket", {})

    transfer_market = {}
    for company, current in all_tech_counts.items():
        previous = prev.get(company, {}).get("q1_2026", current)
        if current == -1:
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
    }

    with open(SIGNALS_PATH, "w") as f:
        json.dump(signals_output, f, indent=2)

    print(f"signals.json updated.")

    # ── Load existing opportunities to preserve history ───
    try:
        with open(OPPORTUNITIES_PATH, "r") as f:
            existing_opps = json.load(f)
    except Exception:
        existing_opps = []

    # Merge — avoid duplicates by company + snippet combo
    existing_keys = {(o["company"], o["snippet"]) for o in existing_opps}
    new_opps = [
        o
        for o in all_opportunities
        if (o["company"], o["snippet"]) not in existing_keys
    ]

    merged = new_opps + existing_opps

    # Keep only the latest 100 opportunities
    merged = merged[:100]

    with open(OPPORTUNITIES_PATH, "w") as f:
        json.dump(merged, f, indent=2)

    print(f"opportunities.json updated — {len(new_opps)} new, {len(merged)} total.")
    print("Done.")


if __name__ == "__main__":
    run()
