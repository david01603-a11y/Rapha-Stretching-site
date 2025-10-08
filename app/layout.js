export const metadata = {
  title: "라파 스트레칭 | Rapha Stretching",
  description: "몸과 마음을 회복하는 라파 스트레칭 센터빌 · 순수 스트레칭 55가지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <header style={{
          background: "#0f172a", color: "white",
          padding: "16px 20px", position: "sticky", top: 0, zIndex: 10
        }}>
          <nav style={{ display: "flex", gap: 16, alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>
            <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>라파 스트레칭</a>
            <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
              <a href="/programs" style={link}>프로그램</a>
              <a href="/schedule" style={link}>시간표</a>
              <a href="/contact" style={link}>위치·문의</a>
            </div>
          </nav>
        </header>

        <main style={{ minHeight: "75vh" }}>{children}</main>

        <footer style={{
          background: "#111827", color: "#e5e7eb",
          textAlign: "center", padding: "20px 0"
        }}>
          <p>© {new Date().getFullYear()} Rapha Stretching</p>
          <p style={{ fontSize: 14 }}>센터빌 · 몸과 마음의 회복을 위한 라파 스트레칭</p>
        </footer>

        <style>{`a:hover { opacity: .85 }`}</style>
      </body>
    </html>
  );
}

const link = { color: "white", textDecoration: "none", fontWeight: 500 };
