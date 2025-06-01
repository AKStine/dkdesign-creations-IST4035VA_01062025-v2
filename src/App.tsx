import React, { useEffect } from 'react';
import PulseNav from './components/Navigation/PulseNav';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import Portfolio from './components/Sections/Portfolio';
import Process from './components/Sections/Process';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import { setupFadeInObserver } from './utils/animations';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Dustine Kibagendi | Brand Strategist & Design Consultant';
    
    // Initialize animation observers
    const observer = setupFadeInObserver();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <PulseNav />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;