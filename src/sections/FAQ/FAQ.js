import './FAQ.css';

const faqs = [
  {
    q: 'What kind of consulting does JM Consulting provide?',
    a: 'JM Consulting provides consulting across Identity & Access Management, cybersecurity risk assessment, Zero Trust, security architecture, compliance strategy, and platform advisory for Microsoft Entra ID, SailPoint, and Okta.',
  },
  {
    q: 'Why include an About section on a consulting website?',
    a: 'Because consulting is trust-driven. Prospective clients want to understand your experience, specialization, and working approach before they make contact.',
  },
  {
    q: 'Is a single-page website good for SEO?',
    a: 'Yes. For a focused consulting business, a single-page site can work very well when the content is structured clearly, the headings are strong, and the page covers core services, trust signals, and contact information.',
  },
  {
    q: 'Can JM Consulting support enterprise IAM platforms?',
    a: 'Yes. The consulting profile includes experience across Microsoft Entra ID, SailPoint, and Okta, along with broader strategy for SSO, MFA, RBAC, PAM, and Zero Trust access models.',
  },
];

const FAQ = () => {
  return (
    <section className="section fade-up delay-3" id="faq">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <p>These answers support trust, improve clarity, and strengthen the page for search visibility.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <article className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
