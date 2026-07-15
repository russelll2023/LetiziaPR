export default function SchedulePage() {
  return (
    <main className="schedule-page">
      <nav className="confirmed-nav shell" aria-label="Scheduling navigation">
        <a href="/" className="brand" aria-label="Letizia Agency home">
          <img src="/letizia-agency-logo.png" alt="Letizia Agency — PR, Digital, Advertising" />
        </a>
        <a href="/confirmed" className="confirmed-home">Back <span>←</span></a>
      </nav>

      <section className="schedule-intro shell">
        <p className="eyebrow"><span /> Let’s start the conversation</p>
        <h1>Schedule your <em>creative strategy session.</em></h1>
        <p>Choose a time that works for you. We look forward to learning about your goals and exploring the right path forward.</p>
      </section>

      <section className="schedule-frame shell" aria-label="Schedule a creative strategy session">
        <iframe
          src="https://calendly.com/d/cgjm-yg9h/creative-strategy-session"
          title="Schedule a creative strategy session with Letizia Agency"
          loading="eager"
          allow="payment"
        />
      </section>

      <footer className="confirmed-footer">
        <div className="shell"><p>PR • Advertising • Crisis Communications</p><p>© 2026 Letizia Agency</p></div>
      </footer>
    </main>
  );
}
