export const metadata = {
  title: 'Rapha Stretching | Centreville VA',
  description: '라파스트레칭 — 55가지 순수 스트레칭으로 몸과 마음의 회복.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{margin:0, fontFamily:'system-ui, Apple SD Gothic Neo, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
