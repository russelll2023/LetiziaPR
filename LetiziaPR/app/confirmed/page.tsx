import Script from "next/script";

export default function ConfirmedPage() {
  return (
    <main className="confirmed-page">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-448839432"
        strategy="afterInteractive"
      />
      <Script id="google-ads-confirmed-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-448839432');`}
      </Script>
      <Script id="google-ads-opted-in-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-448839432/c6DECIS8kNEcEIj-gtYB'});`}
      </Script>
      <nav className="confirmed-nav shell" aria-label="Confirmation navigation">
        <a href="/" className="brand" aria-label="Letizia Agency home">
          <img src="/letizia-agency-logo.png" alt="Letizia Agency — PR, Digital, Advertising" />
        </a>
        <a href="/" className="confirmed-home">Return home <span>↗</span></a>
      </nav>

      <section className="confirmed-hero shell">
        <div className="confirmed-copy">
          <p className="eyebrow"><span /> Your campaign starts here</p>
          <h1>Begin your <em>Advertising &amp; PR</em> campaign today.</h1>
          <p>Put 50 years of advertising and PR experience to work for you.</p>
          <div className="confirmed-rule" />
          <p className="confirmed-note">Stop spinning your wheels and we’ll show you a successful approach.</p>
          <div className="investment-card">
            <span>Minimum investment</span>
            <p><b>PR services</b> — $5,000 per month</p>
            <p><b>Digital</b> — $10,000 per month</p>
            <small>6-month minimum</small>
          </div>
          <a className="button primary" href="/schedule">Schedule Meeting <span>→</span></a>
        </div>

        <figure className="confirmed-image">
          <img src="/letizia-confirmation.jpg" alt="Letizia Agency team members discussing strategy outside a civic building" />
          <figcaption>Strategy. Storytelling. Momentum.</figcaption>
        </figure>
      </section>

      <footer className="confirmed-footer">
        <div className="shell"><p>PR • Advertising • Crisis Communications</p><p>© 2026 Letizia Agency</p></div>
      </footer>
    </main>
  );
}
