export default function HomePage() {
  return (
    <>
      <section style={{
        background: "linear-gradient(180deg,#e0f2fe,#ffffff)",
        padding: "60px 20px", textAlign: "center"
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>라파 스트레칭</h1>
          <p style={{ fontSize: 18, color: "#555" }}>
            명상과 음악 없이, 오직 <b>55가지 순수 스트레칭</b>으로 몸과 마음의 회복을 돕습니다.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="/programs" style={{
              display: "inline-block", marginRight: 10, background: "#0ea5e9",
              color: "white", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: 600
            }}>프로그램 보기</a>
            <a href="/contact" style={{
              display: "inline-block", border: "1px solid #999",
              padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: 600
            }}>위치/문의</a>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "40px auto", padding: "0 20px" }}>
        <h2>라파 스트레칭의 효과</h2>
        <ul>
          <li>✅ 허리·어깨 통증 완화</li>
          <li>✅ 혈액순환 개선과 숙면 도움</li>
          <li>✅ 초보자도 안전하게 참여 가능</li>
        </ul>
      </section>

      <footer style={{
        background: "#0f172a", color: "white", textAlign: "center",
        padding: "24px 0", marginTop: "60px"
      }}>
        <p>© {new Date().getFullYear()} Rapha Stretching. All rights reserved.</p>
        <p style={{ fontSize: 14 }}>센터빌 · 몸과 마음의 회복을 위한 라파 스트레칭</p>
      </footer>
    </>
  );
}
