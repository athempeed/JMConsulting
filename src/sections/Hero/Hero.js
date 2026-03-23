import './Hero.css';

const Hero = () => {
  return (
    <section className="hero fade-up">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Identity &amp; Access Management • Cyber Defense • Zero Trust</div>
          <h1>Protecting identities. Securing access. Empowering trust.</h1>
          <p className="lead">
            JM Consulting specializes in Identity &amp; Access Management and cybersecurity consulting for organizations that need stronger access control, better governance, and modern cyber defense solutions. We help enterprises build secure, scalable, and compliant environments with a focus on Zero Trust, cloud security, and long-term resilience.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#contact">Request a Consultation</a>
            <a className="btn-secondary" href="#about">Learn About JM Consulting</a>
          </div>

          <div className="trust-row" aria-label="Highlights">
            <div className="trust-pill">
              <strong>End-to-End Identity</strong>
              We design, deploy, and maintain secure IAM systems tailored to your business, ensuring the right people access the right resources.
            </div>
            <div className="trust-pill">
              <strong>Zero Trust Framework</strong>
              We help organizations adopt a modern security model built on strict access controls and continuous verification.
            </div>
            <div className="trust-pill">
              <strong>Regulatory Compliance</strong>
              We support environments aligned with ISO 27001, NIST, GDPR, and broader cybersecurity governance expectations.
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-panel">
            <div className="hero-side-copy">
              <div className="eyebrow">Security-first consulting for modern enterprises</div>
              <h2>Identity-led security that scales with your business</h2>
              <p className="section-copy">
                Modern cybersecurity is no longer perimeter-based. Organizations must secure identities, enforce least-privilege access, and continuously validate every interaction. JM Consulting helps you move toward an identity-first, Zero Trust security model that reduces risk while enabling business agility.
              </p>
            </div>

            <div className="hero-media-grid">
              <div className="image-card">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Cybersecurity analyst reviewing enterprise access data"
                />
              </div>
              <div className="image-card">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
                  loading="lazy"
                  alt="Digital network and cybersecurity visualization"
                />
              </div>
            </div>

            <div className="metrics-compact">
              <div className="metric">
                <strong>16+ Years</strong>
                <span>Experience in enterprise IAM and cybersecurity consulting</span>
              </div>
              <div className="metric">
                <strong>Microsoft Entra ID</strong>
                <span>Identity modernization and access strategy expertise</span>
              </div>
              <div className="metric">
                <strong>SailPoint &amp; Okta</strong>
                <span>Platform depth across leading IAM ecosystems</span>
              </div>
              <div className="metric">
                <strong>Compliance-Ready</strong>
                <span>Support aligned with ISO 27001, NIST, GDPR, and governance goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
