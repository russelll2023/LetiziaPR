import Script from "next/script";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-448839432"
        strategy="afterInteractive"
      />
      <Script id="google-ads-thank-you-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-448839432');`}
      </Script>
      <Script id="google-ads-booked-call-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-448839432/B-COCOnZkNEcEIj-gtYB'});`}
      </Script>
      <Script id="openai-booked-call-conversion" strategy="afterInteractive">
        {`oaiq("measure", "custom", { type: "custom" }, {custom_event_name: "bookedcall"});`}
      </Script>
      <nav className="confirmed-nav shell" aria-label="Thank-you navigation">
        <a href="/" className="brand" aria-label="Letizia Agency home">
          <img src="/letizia-agency-logo.png" alt="Letizia Agency — PR, Digital, Advertising" />
        </a>
        <a href="/" className="confirmed-home">Return home <span>↗</span></a>
      </nav>

      <section className="thank-you-shell shell">
        <div className="thank-you-card">
          <div className="thank-you-check" aria-hidden="true">✓</div>
          <p className="eyebrow dark"><span /> You’re all set</p>
          <h1>Your meeting is <em>confirmed.</em></h1>
          <p className="thank-you-lede">Hi, this is Tom Letizia. You’ll receive a Zoom calendar invitation for our one-on-one meeting, where we’ll discuss your specific goals and opportunities.</p>

          <div className="thank-you-details">
            <h2>Help us prepare for your session</h2>
            <p>If you’d like to share your website, company history, current challenges, or anything else that would help us prepare, please send it before our meeting.</p>
            <a href="mailto:Tom@LetiziaPR.com">Tom@LetiziaPR.com <span>→</span></a>
          </div>

          <blockquote>I’ve helped hundreds of businesses and individuals build their brands and make an impact through advertising and public relations. I look forward to helping you.</blockquote>

          <div className="thank-you-signoff">
            <span>All the best,</span>
            <strong>Tom Letizia</strong>
            <a href="https://letiziaagency.com">LetiziaAgency.com</a>
          </div>
        </div>
      </section>

      <footer className="confirmed-footer">
        <div className="shell"><p>PR • Advertising • Crisis Communications</p><p>© 2026 Letizia Agency</p></div>
      </footer>
    </main>
  );
}
