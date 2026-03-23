import './Services.css';

const services = [
  {
    title: 'Cybersecurity Risk Assessment',
    desc: 'We identify vulnerabilities across your infrastructure and recommend practical steps to harden your security posture.',
    bullets: ['Infrastructure and access risk review', 'Prioritized remediation guidance', 'Security posture improvement roadmap'],
  },
  {
    title: 'Identity & Access Management',
    desc: 'Design and deployment of secure IAM solutions including Single Sign-On, Multi-Factor Authentication, Role-Based Access Control, and Privileged Access Management.',
    bullets: ['SSO, MFA, RBAC, and PAM strategy', 'Access lifecycle and governance design', 'Enterprise-scale identity modernization'],
  },
  {
    title: 'Security Architecture Design',
    desc: 'We build scalable, future-proof architectures that embed security from the ground up and support long-term enterprise growth.',
    bullets: ['Secure-by-design architecture planning', 'Cloud and hybrid security alignment', 'Scalable controls for long-term resilience'],
  },
  {
    title: 'Zero Trust Implementation Advisory',
    desc: 'We help organizations move from perimeter thinking to a Zero Trust model based on verification, segmentation, and least-privilege access.',
    bullets: ['Access policy modernization', 'Continuous verification principles', 'Identity-led control design'],
  },
  {
    title: 'Compliance & Security Strategy',
    desc: 'We support organizations in aligning security programs with global cybersecurity standards and governance expectations.',
    bullets: ['ISO 27001, NIST, GDPR alignment', 'Control mapping and governance direction', 'Audit and compliance readiness support'],
  },
  {
    title: 'Platform Expertise Advisory',
    desc: 'Focused consulting support across Microsoft Entra ID, SailPoint, and Okta for enterprises modernizing access and security architecture.',
    bullets: ['Platform selection and implementation guidance', 'Enterprise integration strategy', 'Operational and architectural best practices'],
  },
];

const Services = () => {
  return (
    <section className="section fade-up delay-1" id="services">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Our Services</h2>
          </div>
          <p>We specialize exclusively in cybersecurity and Identity &amp; Access Management, ensuring deep technical know-how and strong domain relevance.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="bullet-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
