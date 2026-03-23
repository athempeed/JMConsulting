import './UseCases.css';

const useCases = [
  {
    title: 'Modernizing workforce identity',
    desc: 'Help organizations strengthen login security, implement MFA, improve SSO design, and reduce identity-related attack exposure across employees and contractors.',
    bullets: ['SSO and MFA rollout strategy', 'Access governance improvement', 'Identity lifecycle control design'],
  },
  {
    title: 'Adopting Zero Trust access',
    desc: 'Support businesses moving away from perimeter-based access by introducing verification-driven access policies and least-privilege principles.',
    bullets: ['Access policy modernization', 'Conditional access planning', 'Risk-based access controls'],
  },
  {
    title: 'Enterprise platform transformation',
    desc: 'Guide enterprises implementing or optimizing Microsoft Entra ID, SailPoint, or Okta to improve security architecture and long-term manageability.',
    bullets: ['Platform advisory and architecture', 'Integration direction', 'Operational best practices'],
  },
];

const UseCases = () => {
  return (
    <section className="section-tight" id="use-cases">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Client Use Cases</h2>
          </div>
          <p>These scenarios help prospective clients quickly understand where JM Consulting adds value and how engagements translate into business outcomes.</p>
        </div>

        <div className="services-grid">
          {useCases.map((useCase) => (
            <article className="service-card" key={useCase.title}>
              <h3>{useCase.title}</h3>
              <p>{useCase.desc}</p>
              <ul className="bullet-list">
                {useCase.bullets.map((item) => (
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

export default UseCases;
