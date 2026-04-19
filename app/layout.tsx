import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <aside className="sidebar">
          <div className="sidebar-brand">JM</div>
          <nav className="sidebar-nav">
            <Link href="/" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span className="sidebar-label">Home</span>
            </Link>
            <Link href="/intelligence" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c0 1.1-.9 2-2 2z"/>
              </svg>
              <span className="sidebar-label">Intelligence</span>
            </Link>
            <Link href="/about" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
              <span className="sidebar-label">About</span>
            </Link>
          </nav>
          <div className="sidebar-footer">
            <span className="sidebar-status">
              <span className="status-dot"></span>
              Available
            </span>
          </div>
        </aside>

        <main className="main-content">
          {children}
        </main>

        <nav className="tab-bar">
          <Link href="/" className="tab-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="tab-label">Home</span>
          </Link>
          <Link href="/intelligence" className="tab-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c0 1.1-.9 2-2 2z"/>
            </svg>
            <span className="tab-label">Intelligence</span>
          </Link>
          <Link href="/about" className="tab-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
            <span className="tab-label">About</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}