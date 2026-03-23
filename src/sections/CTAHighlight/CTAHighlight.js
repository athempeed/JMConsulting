import './CTAHighlight.css';

const CTAHighlight = () => {
  return (
    <section className="section-tight">
      <div className="container split">
        <div className="cta">
          <h2>Need expert support for IAM and cybersecurity strategy?</h2>
          <p>
            Whether you are strengthening identity controls, modernizing access architecture, advancing Zero Trust, or aligning with compliance requirements, JM Consulting can help translate security priorities into practical action.
          </p>
          <div className="cta-actions">
            <a className="btn" href="#contact">Talk to JM Consulting</a>
            <a className="btn-secondary" href="#faq">Read FAQs</a>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>What modern security means today</h3>
          <ul className="bullet-list" style={{ marginTop: 8 }}>
            <li>Identity-first controls across workforce, partner, and privileged access</li>
            <li>Phishing-resistant authentication and stronger access governance</li>
            <li>Cloud and SaaS security patterns aligned to real operating environments</li>
            <li>Cyber resilience, compliance readiness, and business-aligned security roadmaps</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTAHighlight;
