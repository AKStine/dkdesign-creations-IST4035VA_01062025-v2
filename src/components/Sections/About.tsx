import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

  const skills = [
    { name: 'Brand Strategy', level: 95 },
    { name: 'Web Design', level: 90 },
    { name: 'Digital Marketing', level: 85 },
    { name: 'UI/UX Design', level: 88 },
  ];

  return (
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
              Brand Strategist & <span className="text-signature">Design Consultant</span>
            </h2>
            
            <p className="mb-6 text-lg fade-in reveal-delay-1">
              With over a decade of experience transforming businesses through strategic design, I help brands find their voice and create experiences that resonate with their audience.
            </p>
            
            <p className="mb-8 fade-in reveal-delay-2">
              My approach combines data-driven insights with creative excellence, delivering brand experiences that drive measurable business results. I believe in design as a strategic tool that solves business problems, not just aesthetic challenges.
            </p>
            
            <div className="mb-8 fade-in reveal-delay-3">
              <h3 className="text-xl font-medium mb-4">Expertise</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="fade-in" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-signature">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray relative">
                      <div 
                        className="absolute top-0 left-0 h-full bg-signature transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                        ref={el => {
                          if (el) {
                            setTimeout(() => {
                              el.style.width = `${skill.level}%`;
                            }, 500);
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-in reveal-delay-4">
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </button>
            </div>
          </div>
          
          <div className="relative fade-in reveal-delay-2">
            <div className="aspect-w-4 aspect-h-5 relative">
              <img 
                src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dustine Kibagendi - Brand Strategist" 
                className="object-cover w-full h-full"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-signature opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-signature opacity-50"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white p-4 shadow-lg">
              <div className="text-signature font-bold text-xl mb-1">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;