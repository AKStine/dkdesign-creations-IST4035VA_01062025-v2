import React, { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Luxury Brand',
      category: 'branding',
      image: 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity redesign for a luxury fashion label.'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'High-conversion e-commerce website with seamless checkout experience.'
    },
    {
      id: 3,
      title: 'Tech Startup Positioning',
      category: 'strategy',
      image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Market positioning and growth strategy for an AI startup.'
    },
    {
      id: 4,
      title: 'Premium Product Launch',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'End-to-end product launch strategy for a premium gadget.'
    },
    {
      id: 5,
      title: 'Real Estate Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/7173056/pexels-photo-7173056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Luxury real estate platform with virtual tours and booking system.'
    },
    {
      id: 6,
      title: 'Restaurant Rebranding',
      category: 'branding',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete rebranding for an upscale restaurant chain.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="portfolio" ref={sectionRef} className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Featured <span className="text-signature">Projects</span>
          </h2>
          
          <p className="text-lg fade-in reveal-delay-1">
            A selection of strategic brand and web projects that showcase my approach to solving complex business challenges.
          </p>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in reveal-delay-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 capitalize transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-signature text-white'
                  : 'bg-gray hover:bg-signature hover:text-white'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="fade-in group"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white text-sm mb-4">{project.description}</p>
                    <span className="inline-block px-3 py-1 text-xs font-medium border border-signature text-signature">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mt-20 bg-gray p-8 md:p-12 fade-in reveal-delay-3">
          <h3 className="text-2xl font-bold mb-8 text-center">Client Testimonials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="p-6 border-l-4 border-signature bg-white">
              <p className="mb-4 italic">"Dustine transformed our brand from generic to exceptional. Our conversion rate increased by 40% after implementing his strategy."</p>
              <footer className="font-medium">— Sarah Johnson, CEO at TechVision</footer>
            </blockquote>
            
            <blockquote className="p-6 border-l-4 border-signature bg-white">
              <p className="mb-4 italic">"Working with Dustine was the best decision we made for our rebrand. His strategic approach delivered measurable results within months."</p>
              <footer className="font-medium">— Michael Chen, Marketing Director</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;