import './Approach.css';

const steps = [
  {
    num: '01',
    title: 'Assess the environment',
    desc: 'Review business context, identities, access patterns, infrastructure, platforms, and known areas of exposure.',
  },
  {
    num: '02',
    title: 'Identify risk and gaps',
    desc: 'Evaluate vulnerabilities, control gaps, compliance requirements, and identity security maturity.',
  },
  {
    num: '03',
    title: 'Design the right solution',
    desc: 'Create a roadmap that balances security strength, usability, delivery speed, and enterprise scale.',
  },
  {
    num: '04',
    title: 'Support implementation',
    desc: 'Guide teams through architecture, rollout, governance, and adoption so improvements become sustainable.',
  },
];

const Approach = () => {
  return (
    <section className="section fade-up delay-2" id="approach">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>How JM Consulting Works</h2>
          </div>
          <p>A clear consulting process that helps clients move from risk visibility to practical security outcomes.</p>
        </div>

        <div className="approach">
          {steps.map((step) => (
            <article className="step" key={step.title}>
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
