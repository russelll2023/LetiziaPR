export default function ConfirmedPage() {
  return (
    <main className="confirmed-page">
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
