"use client";

import { FormEvent, useEffect, useState } from "react";
import Script from "next/script";

const services = [
  { number: "01", title: "Public Relations", text: "Earn meaningful attention with clear positioning, media strategy, and stories people remember." },
  { number: "02", title: "Advertising", text: "Reach the right audience with integrated campaigns built for visibility, response, and measurable growth." },
  { number: "03", title: "Crisis Communications", text: "Move quickly and confidently with experienced counsel, disciplined messaging, and reputation protection." },
];

const outcomes = ["Clarify your message", "Reach the right audience", "Build lasting credibility"];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const body = new URLSearchParams({
      "entry.93083080": String(data.get("firstName") ?? ""),
      "entry.1038023788": String(data.get("lastName") ?? ""),
      "entry.309591045": email,
      "entry.148782492": String(data.get("message") ?? ""),
      emailAddress: email,
    });

    setSubmitting(true);
    setSubmitError("");

    try {
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSegWmbVmAUkpIyyX9yeytxOnpcfV8vq4-TImHclIMiiiY7StA/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      form.reset();
      window.location.assign("/confirmed");
    } catch {
      setSubmitError("We couldn’t send your message. Please try again or call (702) 384-6683.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-448839432"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-448839432');`}
      </Script>
      <Script id="google-ads-home-view-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-448839432/5ur-CNuzlNEcEIj-gtYB'});`}
      </Script>
      <Script id="openai-home-view-conversion" strategy="afterInteractive">
        {`oaiq("measure", "page_viewed", { type: "contents" });`}
      </Script>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Letizia Agency home">
            <img src="/letizia-agency-logo.png" alt="Letizia Agency — PR, Digital, Advertising" />
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Start a conversation <span>↗</span></a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span /> Strategic PR + Advertising</p>
            <h1>Turn your story into <em>influence.</em></h1>
            <p className="hero-lede">Stop spinning your wheels. We build strategic public relations and advertising campaigns that shape perception, earn attention, and move people to act.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Begin your campaign <span>→</span></a>
              <a className="text-link" href="#approach">See our approach <span>↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A strategic message gaining reach and impact">
            <div className="photo-frame">
              <img src="/letizia-hero-team.png" alt="Letizia Agency team members standing outside a civic building" />
              <div className="photo-tint" />
            </div>
            <div className="impact-card card-top"><span>Message clarity</span><b>STRONG</b></div>
            <div className="impact-card card-bottom"><span>Campaign reach</span><b>HIGH IMPACT</b></div>
            <span className="star star-one">✦</span><span className="star star-two">✦</span>
          </div>
        </div>

        <div className="trust-strip">
          <div className="shell trust-inner">
            <p>Strategy that creates momentum</p>
            {outcomes.map((outcome) => <span key={outcome}><i>✓</i>{outcome}</span>)}
          </div>
        </div>
      </section>

      <section className="services section shell" id="services">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow dark"><span /> What we do</p><h2>One partner.<br/><em>Every angle.</em></h2></div>
          <p>From the first idea to the final impression, we connect strategy, storytelling, and media to make your message matter.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title} data-reveal>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true">{service.number === "01" ? "◌" : service.number === "02" ? "↗" : "◇"}</div>
              <h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Explore service <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="shell approach-grid">
          <div className="quote-panel" data-reveal>
            <p className="quote-mark">“</p>
            <blockquote>Great campaigns don’t just get seen. They become the conversation.</blockquote>
            <div className="quote-rule" />
            <p>That’s the Letizia approach.</p>
          </div>
          <div className="steps-panel" data-reveal>
            <p className="eyebrow"><span /> Our approach</p>
            <h2>Strategy before noise.</h2>
            {[
              ["01", "Listen", "We learn your goals, audience, challenges, and the opportunity ahead."],
              ["02", "Shape", "We turn insight into a sharp message and an integrated campaign plan."],
              ["03", "Move", "We launch, measure, optimize, and keep your momentum building."],
            ].map(([n,t,d]) => <div className="step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-grid">
          <div data-reveal>
            <p className="eyebrow dark"><span /> Ready when you are</p>
            <h2>Let’s make your message <em>impossible to ignore.</em></h2>
            <p>Tell us where you want to go. We’ll show you how strategic PR and advertising can help you get there.</p>
          </div>
          <form className="lead-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success" role="status"><span>✓</span><h3>Thank you.</h3><p>Your message is ready for the Letizia Agency team. We’ll be in touch shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div>
            ) : <>
              <div className="form-row"><label>First name<input required name="firstName" placeholder="Jane" /></label><label>Last name<input required name="lastName" placeholder="Smith" /></label></div>
              <label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label>
              <label>What can we help you accomplish?<textarea required name="message" rows={4} placeholder="Tell us a little about your goals..." /></label>
              {submitError && <p className="form-error" role="alert">{submitError}</p>}
              <button className="button primary form-button" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Start the conversation"} <span>→</span></button>
              <small>By submitting, you agree to be contacted about your inquiry.</small>
            </>}
          </form>
        </div>
      </section>

      <footer><div className="shell footer-inner"><a href="#top" className="brand footer-logo" aria-label="Letizia Agency home"><img src="/letizia-agency-logo.png" alt="Letizia Agency — PR, Digital, Advertising" /></a><p>PR • Advertising • Crisis Communications</p><p>© 2026 Letizia Agency</p></div></footer>
    </main>
  );
}
