import './Industries.css';

const Industries = () => {
  return (
    <section className="section-tight" id="industries">
      <div className="container split">
        <div className="about-card">
          <h3 style={{ fontSize: '1.45rem', marginBottom: 14 }}>Industries We Serve</h3>
          <p className="section-copy">
            JM Consulting’s approach is suited to organizations that need stronger identity security, governance maturity, and modern access architecture in regulated or high-trust environments.
          </p>
          <ul className="bullet-list" style={{ marginTop: 18 }}>
            <li>Financial services and fintech</li>
            <li>Healthcare and life sciences</li>
            <li>Technology and SaaS organizations</li>
            <li>Manufacturing and enterprise operations</li>
            <li>Professional services and consulting-led businesses</li>
            <li>Global enterprises with hybrid and multi-cloud environments</li>
          </ul>
        </div>

        <div className="cta">
          <h2 style={{ marginBottom: 12 }}>Security consulting shaped by real operating environments</h2>
          <p>
            Different industries face different risk models, compliance expectations, and identity challenges. JM Consulting helps clients adapt security architecture and access strategy to fit the realities of their sector, systems, and business priorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
