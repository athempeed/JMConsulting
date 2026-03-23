import './About.css';

const About = () => {
  return (
    <section className="section-tight fade-up delay-1" id="about">
      <div className="container about-grid">
        <div className="about-main">
          <div className="section-header" style={{ marginBottom: 18 }}>
            <div>
              <h2>About Us</h2>
            </div>
          </div>
          <p className="about-copy">
            With over 16 years of experience, JM Consulting specializes in designing and implementing large-scale Identity &amp; Access Management solutions. The firm brings deep expertise in Microsoft Entra ID, SailPoint, Okta, and cybersecurity compliance strategies, delivering modern cloud security and Zero Trust architectures for enterprises globally.
          </p>
          <p className="about-copy" style={{ marginTop: 16 }}>
            Our approach combines technical depth with practical delivery. We help organizations secure identities, strengthen access controls, modernize security architecture, and align cybersecurity programs with business realities. Every engagement is focused on building scalable, future-ready solutions that improve trust, resilience, and governance maturity.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <strong>Industry-focused expertise</strong>
              <span className="about-copy">A specialized consulting focus on cybersecurity and IAM rather than broad generic IT services.</span>
            </div>
            <div className="about-stat">
              <strong>Client-centric approach</strong>
              <span className="about-copy">Solutions are tailored to business context, security maturity, and operational goals.</span>
            </div>
            <div className="about-stat">
              <strong>Proven problem-solvers</strong>
              <span className="about-copy">Built to solve real-world access, governance, and identity security challenges.</span>
            </div>
            <div className="about-stat">
              <strong>Agile &amp; scalable delivery</strong>
              <span className="about-copy">Delivery models designed for enterprise environments that need secure outcomes and practical execution.</span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h3>Why Choose Us</h3>
          <ul className="bullet-list">
            <li>Deep experience in Identity &amp; Access Management and cyber defense programs</li>
            <li>Expertise across Microsoft Entra ID, SailPoint, Okta, and compliance-driven security strategy</li>
            <li>Strong focus on practical solutions that can be implemented and sustained</li>
            <li>Security architecture thinking that balances protection, usability, and long-term growth</li>
          </ul>
          <div className="image-card" style={{ marginTop: 20, minHeight: 220 }}>
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80"
              loading="lazy"
              alt="Security operations dashboard and enterprise monitoring"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
