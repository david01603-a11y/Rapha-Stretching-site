export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="container bar">
          <div className="logo">Rapha<span>Stretching</span></div>
          <nav className="nav">
            <a href="#program">프로그램</a>
            <a href="#timetable">시간표</a>
            <a href="#pricing">수업료</a>
            <a href="#contact" className="btn">체험 문의</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container grid2">
            <div>
              <h1>몸이 풀리면, 마음도 회복됩니다</h1>
              <p className="lead">‘라파(Rapha)’는 히브리어로 ‘치유’. 55가지 순수 스트레칭으로 유연성과 균형을 회복하도록 돕습니다.</p>
              <div className="cta">
                <a href="#contact" className="btn large">첫 방문 체험 문의</a>
                <a href="tel:+17033501576" className="btn outline large">☎ 703-350-1576</a>
              </div>
              <p className="note">신규 등록: 안전을 위해 <b>70세 이하</b>만 받습니다.</p>
            </div>
            <div className="photo"><div className="ph">사진 준비중</div></div>
          </div>
        </section>

        <section id="program" className="section">
          <div className="container cards3">
            <div className="card"><h3>55가지 순수 스트레칭</h3><p>몸의 균형과 유연성에 집중</p></div>
            <div className="card"><h3>통증 완화 & 수면 개선</h3><p>꾸준한 참여로 변화</p></div>
            <div className="card"><h3>센터빌 10+년</h3><p>지역 커뮤니티와 함께</p></div>
          </div>
        </section>

        <section id="timetable" className="section alt">
          <div className="container">
            <h2>📅 시간표</h2>
            <div className="grid2 gap">
              <div className="card">
                <h4>월 ~ 금 (AM)</h4>
                <div className="badges"><span className="badge">09:10 - 10:10</span><span className="badge">10:30 - 11:30</span></div>
              </div>
              <div className="card">
                <h4>월, 목 (PM)</h4>
                <div className="badges"><span className="badge">18:00 - 19:00</span><span className="badge">20:00 - 21:00</span></div>
              </div>
            </div>
            <p className="small mt8">신규 등록은 <b>70세 이하</b>만—안전한 적응을 위한 조치입니다. 🙏</p>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <h2>💲 수업료</h2>
            <div className="card">
              <p className="price">주 2회 $150 <span className="sep">/</span> 주 3회 $220</p>
              <p className="small">근육은 72시간 후 원상복귀 → 최소 주 2회 권장</p>
              <ul className="list"><li>그룹 클래스</li><li>개별 자세 코칭</li><li>매트 제공</li></ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container grid2">
            <div className="card">
              <h2>연락처</h2>
              <ul className="list">
                <li>📞 <a href="tel:+17033501576">703-350-1576</a></li>
                <li>💬 카톡: <b>rapha-stretch</b></li>
                <li>📷 인스타: <a href="#" target="_blank" rel="noreferrer">@rapha.stretching</a></li>
                <li>📍 14641 Route 29 Suite 107, Centreville VA 20121</li>
              </ul>
              <a className="btn" href="tel:+17033501576">지금 전화하기</a>
            </div>
            <div className="map card">
              <iframe title="Rapha Stretching Location"
                src="https://www.google.com/maps?q=14641%20US-29%20Suite%20107%2C%20Centreville%2C%20VA%2020121&output=embed"
                loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} RaphaStretching | 14641 Route 29 Suite 107, Centreville VA 20121 | ☎ 703-350-1576</div>
      </footer>

      <style jsx>{`
        :root{--line:#e5e7eb}
        *{box-sizing:border-box} body{margin:0;background:linear-gradient(#fff,#fafafa);color:#0a0a0a}
        .container{max-width:1100px;margin:0 auto;padding:0 16px}
        .topbar{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.85);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
        .bar{display:flex;align-items:center;justify-content:space-between;height:64px}
        .logo{font-weight:800;font-size:20px}.logo span{color:#6b7280}
        .nav{display:flex;gap:14px}.nav a{text-decoration:none;color:#111;font-size:14px}
        .btn{display:inline-block;padding:10px 14px;border-radius:12px;border:1px solid #111;text-decoration:none;color:#111;font-weight:600}
        .btn.large{padding:12px 18px}.btn.outline{background:#fff}
        .hero{padding:56px 0}.grid2{display:grid;grid-template-columns:1fr;gap:24px}
        @media(min-width:900px){.grid2{grid-template-columns:1.1fr .9fr}}
        .lead{color:#6b7280}.cta{display:flex;gap:12px;margin-top:16px;flex-wrap:wrap}.note{font-size:12px;color:#6b7280;margin-top:6px}
        .photo{display:flex;align-items:center;justify-content:center}
        .ph{width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#e5e7eb,#f9fafb);border:1px solid var(--line);border-radius:18px;display:flex;align-items:center;justify-content:center;color:#6b7280}
        .section{padding:48px 0}.section.alt{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .cards3{display:grid;grid-template-columns:1fr;gap:16px}@media(min-width:900px){.cards3{grid-template-columns:repeat(3,1fr)}}
        .card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px}
        h1{margin:0 0 8px;font-size:36px;line-height:1.2}h2{margin:0 0 14px;font-size:28px}
        .badges{display:flex;gap:8px;flex-wrap:wrap}.badge{font-size:12px;border:1px solid var(--line);background:#f3f4f6;border-radius:999px;padding:6px 10px}
        .small{font-size:13px;color:#6b7280}.mt8{margin-top:8px}.price{font-size:22px;font-weight:800}.sep{margin:0 6px;color:#9ca3af}
        .list{margin:12px 0 0 18px}.list li{margin:6px 0}
        .map iframe{width:100%;height:100%;min-height:260px;border:0;border-radius:12px}
        .footer{border-top:1px solid var(--line);padding:28px 0;background:#f3f4f6;color:#374151;font-size:14px;text-align:center}
        .gap{gap:16px}
      `}</style>
    </>
  );
}
