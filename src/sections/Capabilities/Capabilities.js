import './Capabilities.css';

const Capabilities = () => {
  return (
    <section className="section-tight fade-up delay-2" id="capabilities">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Core Capabilities</h2>
          </div>
          <p>This section reflects the strengths that matter most to clients evaluating a cybersecurity and IAM consulting partner.</p>
        </div>

        <div className="value-grid">
          <article className="value-card">
            <h3>End-to-End Identity</h3>
            <p>We design, deploy, and maintain secure IAM systems tailored to your business, ensuring only the right people access the right resources.</p>
          </article>
          <article className="value-card">
            <h3>Zero Trust Framework</h3>
            <p>We help organizations adopt a modern security model built on strict access controls and continuous verification with no assumptions.</p>
          </article>
          <article className="value-card">
            <h3>Seamless Integration</h3>
            <p>Our solutions are compatible with major cloud providers, SaaS platforms, and enterprise environments.</p>
          </article>
          <article className="value-card">
            <h3>Regulatory Compliance</h3>
            <p>We help ensure systems align with global cybersecurity standards such as ISO 27001, NIST, GDPR, and related frameworks.</p>
          </article>
          <article className="value-card">
            <h3>Security Architecture Thinking</h3>
            <p>We build security into the foundation so identity, access, and governance can scale alongside the business.</p>
          </article>
          <article className="value-card">
            <h3>Modern Cyber Defense</h3>
            <p>Our consulting reflects current priorities across access control, resilience, cloud security, threat exposure reduction, and enterprise trust models.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
