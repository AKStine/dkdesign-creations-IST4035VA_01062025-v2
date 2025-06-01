import React, { useRef, useEffect } from 'react';
import { Palette, Globe, LineChart } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  tier: 'Premium' | 'Executive' | 'Comprehensive';
}

const Services: React.FC = () => {
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

  const services: Service[] = [
    {
      icon: <Palette size={32} />,
      title: 'Brand Strategy',
      description: 'Develop a comprehensive brand strategy that positions your business for growth and market differentiation.',
      features: [
        'Brand positioning',
        'Competitive analysis',
        'Target audience definition',
        'Visual identity development',
        'Brand messaging framework'
      ],
      tier: 'Premium'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Design',
      description: 'Create stunning, conversion-focused web experiences that captivate your audience and drive business results.',
      features: [
        'User experience design',
        'Responsive development',
        'Performance optimization',
        'Conversion rate optimization',
        'Custom animations & interactions'
      ],
      tier: 'Executive'
    },
    {
      icon: <LineChart size={32} />,
      title: 'Consulting',
      description: 'Strategic guidance to help your business overcome challenges and capitalize on market opportunities.',
      features: [
        'Growth strategy development',
        'Digital transformation',
        'Marketing strategy',
        'Team training & workshops',
        'Ongoing strategic advisory'
      ],
      tier: 'Comprehensive'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section bg-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Strategic <span className="text-signature">Services</span>
          </h2>
          
          <p className="text-lg fade-in reveal-delay-1">
            Comprehensive solutions designed to transform your brand and drive business growth. Each service is tailored to your specific needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card group hover:shadow-xl fade-in"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-signature bg-opacity-10 text-signature mb-4 group-hover:bg-signature group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-signature text-white">
                      {service.tier}
                    </span>
                  </div>
                  
                  <p className="mb-6">{service.description}</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-medium mb-3">What's included:</h4>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-signature mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="btn-secondary w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;