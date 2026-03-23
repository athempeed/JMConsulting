import './App.css';
import NavBar from './sections/NavBar/NavBar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Capabilities from './sections/Capabilities/Capabilities';
import Services from './sections/Services/Services';
import UseCases from './sections/UseCases/UseCases';
import Industries from './sections/Industries/Industries';
import Approach from './sections/Approach/Approach';
import CTAHighlight from './sections/CTAHighlight/CTAHighlight';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import MobilePanel from './sections/MobilePanel/MobilePanel';

function App() {
  return (
    <div className="App" id="top">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Services />
        <UseCases />
        <Industries />
        <Approach />
        <CTAHighlight />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobilePanel />
    </div>
  );
}

export default App;
