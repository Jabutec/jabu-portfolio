import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "monospace", background: "#0d0d0d", color: "#00ff9f" }}>
        <div style={{ width: "100%", minHeight: "100vh" }}>
          
          

          {/* Main Editor */}
          <div style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
