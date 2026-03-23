import './MobilePanel.css';

const MobilePanel = () => {
  return (
    <div className="mobile-panel" aria-hidden="false">
      <a className="btn-secondary" href="#about">About</a>
      <a className="btn" href="#contact">Contact</a>
    </div>
  );
};

export default MobilePanel;
