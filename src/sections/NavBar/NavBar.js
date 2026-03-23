import { useState } from 'react';
import './NavBar.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#industries', label: 'Industries' },
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleLinkClick = () => setOpen(false);

  return (
    <div className="nav-wrap">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="JM Consulting home">
          <img
            className="brand-logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAADAFBMVEVHcEwqvP0svPs07v8rvv4swv8twv8qs/otvv4rtfopsfQv2/8lnOgtw/4rtPYqt/8or/IlnOgquPs///8opvAqsPUv1/8npu8opvEnpfAtx/8npO0oqPIprfYt0P8tx/8oqvMqtvkptfsprvQno+0osvgno+0op/Elm+gqvv4louwoqfEqrPQqt/gptfwqtPknou0moOsnoOsnpe8prfMjm+crufgop/ElnOgruPgnqfInq/Ekm+coq/Imn+sqsPUpsfUrwP8psfcmoOstv/svzv8loOsmouwnou4iluQjmOUrtPcrtfgqr/YmqPMnoe0rs/clo+0x3f8pr/QpsPUrufklo+4nrvYpqfMpsfYnrPUopvEtuvkno+4nrfQoqfEorPIpsfUqt/skmuYoqPArsPUlnekoq/Iope8svfwkmuYoqfIopfApqvImnekno+0mo+0noewpqfIopvIswPwpqvInou4qsPclqfMqrvQnrfYnpu8rs/YnoOwmp/Eqr/QopfAjneoloewpqPQkmOUlneomp/EpqvMmouwmoOwmp/AloOsmpO0tx/4kn+otv/onqPAnrfQloe0no+8op/AnqfEopfEnqPEqs/YpqvIoqPApsfYmo+wnnusnqO8mnuknpu8npu4pp/Enou0no+0kmuYkneoqr/Uno+4kpfElou0lou0pqPMlpO4mp/AqsfUprPMlnuortvcsuvkmoOcqrfQkmeUsufcmo+wlo+4mnuopo+Mtu/ooqfEnpvAprPQqrPQnp+4mnukmoussv/sprfQlnOgmp+8pqPIpq/Irr/UrrvUrrfUqrPMpqfIpqPMstfcppOUmoeomoeosq+0qtvcorPEnoO0lmucnoe8kmOQmn+wlmuYmnusmnuomnekkmeUno/AlnOkkmeYlm+gilOEnou8kmOUmoO0jluMmm+kmn+0mn+smneonoe4kl+MopPEjluImoOwjleIkl+QilOAileEmnOoopPInoO4novAppfMppvMnou4opfIoo/Kp2zVhAAAA13RSTlMAESwCEAwIEg0QXAPsFBUJXP4dAdCDBM68wwnO7JIFCpMiF4LQKs3D/A+xjbwzGiXR2unre+FJ4+9TYoX1gf5QLA4u4SkQzs/W+fOEXZFR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"
            alt="JM Consulting logo"
          />
          <span className="brand-copy">
            <span>JM Consulting</span>
            <small>Cybersecurity Consulting</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} id="navMenu" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={handleLinkClick}>
              {label}
            </a>
          ))}
          <a className="btn-secondary" href="#contact" onClick={handleLinkClick}>
            Book a Consultation
          </a>
        </nav>

        <button className="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded={open} onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
