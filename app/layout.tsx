import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "monospace", background: "#0d0d0d", color: "#00ff9f" }}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          
          

          {/* Main Editor */}
          <div style={{ flex: 1, padding: "1rem" }}>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
