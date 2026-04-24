import json
import os
from datetime import date
from playwright.sync_api import sync_playwright

NEWS_PATH = os.path.join(os.path.dirname(__file__), "../data/news.json")

# ── News sources ──────────────────────────────────────────
SOURCES = {
    "techcentral": "https://techcentral.co.za",
    "ventureburn": "https://ventureburn.com",
    "mybroadband": "https://mybroadband.co.za",
    "businessinsider": "https://www.businessinsider.co.za/tech",
    "disruptafrica": "https://disrupt-africa.com",
}

# ── Keywords to flag as signals ───────────────────────────
SIGNAL_KEYWORDS = [
    # funding
    "raised",
    "funding",
    "million",
    "investment",
    "seed",
    "series a",
    "series b",
    "venture",
    "capital",
    # ai
    "artificial intelligence",
    "ai",
    "machine learning",
    "large language model",
    "llm",
    "chatgpt",
    "openai",
    # startups
    "startup",
    "launch",
    "founded",
    "new product",
    "south africa",
    "sa tech",
    "cape town",
    "johannesburg",
    # events
    "conference",
    "summit",
    "hackathon",
    "meetup",
    "event",
    # global signals
    "microsoft",
    "google",
    "amazon",
    "meta",
    "africa",
]


# ── Scrape a single source ────────────────────────────────
def scrape_source(page, name: str, url: str):
    try:
        page.goto(url, timeout=40000, wait_until="networkidle")
        page.wait_for_timeout(3000)

        content = page.inner_text("body").lower()
        lines = [l.strip() for l in content.split("\n") if l.strip()]

        NOISE_KEYWORDS = [
            "sign up",
            "privacy policy",
            "terms of service",
            "subscribe",
            "newsletter",
            "cookie",
            "living on $",
            "quit our jobs",
            "debt after",
            "travel in our",
            "fire dreams",
            "clicking",
        ]
        signals = [
            s
            for s in signals
            if not any(n in s["headline"].lower() for n in NOISE_KEYWORDS)
        ]
        for line in lines:
            if any(kw in line for kw in SIGNAL_KEYWORDS):
                if 20 < len(line) < 200:
                    signals.append(
                        {
                            "source": name,
                            "headline": line.title(),
                            "url": url,
                            "found": str(date.today()),
                            "category": categorise(line),
                        }
                    )

        print(f"  {name}: {len(signals)} signals found")
        return signals[:20]

    except Exception as e:
        print(f"  {name}: failed — {e}")
        return []


# ── Auto categorise by keyword ────────────────────────────
def categorise(line: str) -> str:
    line = line.lower()

    # Must check funding first — most specific
    if any(
        k in line
        for k in [
            "raises",
            "raised",
            "funding",
            "seed",
            "series a",
            "series b",
            "million",
            "investment",
            "venture capital",
            "prize",
            "grant",
        ]
    ):
        return "Funding"

    # Events
    if any(
        k in line
        for k in [
            "summit",
            "conference",
            "hackathon",
            "meetup",
            "game jam",
            "event",
            "workshop",
            "apply to pitch",
            "applications open",
        ]
    ):
        return "Events"

    # Build Log
    if any(
        k in line
        for k in [
            "launches",
            "launch",
            "founded",
            "new product",
            "platform",
            "marketplace",
            "building",
            "built",
            "ships",
            "released",
        ]
    ):
        return "Build Log"

    # AI Watch — only actual AI content
    if any(
        k in line
        for k in [
            "artificial intelligence",
            " ai ",
            "machine learning",
            "llm",
            "large language model",
            "chatgpt",
            "claude",
            "openai",
            "anthropic",
            "generative",
        ]
    ):
        return "AI Watch"

    # Global Signal
    if any(
        k in line
        for k in [
            "microsoft",
            "google",
            "amazon",
            "meta",
            "apple",
            "global",
            "worldwide",
            "international",
        ]
    ):
        return "Global Signal"

    return "General"


def run():
    print("Starting news scraper...")
    all_signals = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )

        for name, url in SOURCES.items():
            print(f"Scraping {name}...")
            signals = scrape_source(page, name, url)
            all_signals.extend(signals)

        browser.close()

    # ── Load existing news ────────────────────────────────
    try:
        with open(NEWS_PATH, "r") as f:
            existing = json.load(f)
    except Exception:
        existing = []

    # Keep today's signals fresh, preserve last 7 days
    existing_keys = {(s["source"], s["headline"]) for s in existing}
    new_signals = [
        s for s in all_signals if (s["source"], s["headline"]) not in existing_keys
    ]

    merged = new_signals + existing
    merged = merged[:200]

    with open(NEWS_PATH, "w") as f:
        json.dump(merged, f, indent=2)

    print(f"news.json updated — {len(new_signals)} new signals, {len(merged)} total.")
    print("Done.")


if __name__ == "__main__":
    run()
