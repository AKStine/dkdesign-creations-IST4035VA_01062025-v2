import React, { useRef, useEffect } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
}

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.fade-in');
          elements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('appear');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery',
      description: 'In-depth analysis of your business, goals, target audience, and market landscape to identify opportunities.',
      duration: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creating a comprehensive strategy that addresses your challenges and outlines the path to achieving your goals.',
      duration: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Executing the strategy through design, development, and content creation to bring your vision to life.',
      duration: '3-6 weeks'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous improvement based on performance data and user feedback to maximize results.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="section bg-charcoal text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            My <span className="text-signature">Process</span>
          </h2>
          
          <p className="text-lg opacity-90 fade-in reveal-delay-1">
            A structured approach that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>
        
        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative mb-16 fade-in reveal-delay-2">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-signature"></div>
          
          <div className="grid grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative pt-16 pb-16 ${index % 2 === 0 ? 'mt-12' : 'mb-12'}`}>
                {/* Step Number */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-signature flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                
                <div className={`bg-rich p-6 h-full ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="mb-4 opacity-90">{step.description}</p>
                  <div className="text-signature font-medium text-sm">
                    Duration: {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Process Timeline - Mobile & Tablet */}
        <div className="lg:hidden relative fade-in reveal-delay-2">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-signature"></div>
          
          <div className="space-y-12 ml-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute top-0 left-0 transform -translate-x-[calc(50%+32px)] -translate-y-0 z-10 w-16 h-16 rounded-full bg-signature flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                
                <div className="bg-rich p-6">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="mb-4 opacity-90">{step.description}</p>
                  <div className="text-signature font-medium text-sm">
                    Duration: {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16 fade-in reveal-delay-3">
          <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Brand?</h3>
          
          <button 
            className="btn-primary text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;