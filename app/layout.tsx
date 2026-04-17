import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "monospace", background: "#0d0d0d", color: "#00ff9f" }}>
        <div style={{ display: "flex", height: "100vh" }}>
          
          {/* Sidebar */}
          <div style={{ width: "220px", background: "#111", padding: "1rem" }}>
            <h3>Explorer</h3>
            <p>📁 portfolio</p>
            <p>📄 about.ts</p>
            <p>📄 projects.ts</p>
            <p>📄 contact.ts</p>
          </div>

          {/* Main Editor */}
          <div style={{ flex: 1, padding: "1rem" }}>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}