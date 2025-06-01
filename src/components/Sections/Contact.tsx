import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Linkedin, Instagram, Twitter } from 'lucide-react';

interface BookingType {
  id: string;
  name: string;
  duration: string;
  description: string;
  isPaid: boolean;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedBooking, setSelectedBooking] = useState<string>('discovery');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
  });
  
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

  const bookingTypes: BookingType[] = [
    {
      id: 'discovery',
      name: 'Discovery Call',
      duration: '30 min',
      description: 'Initial consultation to discuss your needs and explore how I can help.',
      isPaid: false
    },
    {
      id: 'strategy',
      name: 'Strategy Session',
      duration: '60 min',
      description: 'Deep dive into your brand challenges with actionable recommendations.',
      isPaid: true
    },
    {
      id: 'workshop',
      name: 'Custom Workshop',
      duration: 'Custom',
      description: 'Tailored workshop for your team on brand strategy or design thinking.',
      isPaid: true
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
      company: '',
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="section bg-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Let's <span className="text-signature">Connect</span>
          </h2>
          
          <p className="text-lg fade-in reveal-delay-1">
            Ready to elevate your brand? Schedule a consultation or send me a message to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md fade-in reveal-delay-2">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="form-input resize-none"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          {/* Booking and Contact Info */}
          <div className="fade-in reveal-delay-3">
            <div className="bg-white p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
              
              <div className="space-y-4 mb-8">
                {bookingTypes.map(type => (
                  <div 
                    key={type.id}
                    className={`p-4 border-2 cursor-pointer transition-all duration-300 ${
                      selectedBooking === type.id 
                        ? 'border-signature bg-signature bg-opacity-5' 
                        : 'border-gray hover:border-signature'
                    }`}
                    onClick={() => setSelectedBooking(type.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">{type.name}</h4>
                      <span className="text-sm bg-charcoal text-white px-2 py-1">
                        {type.duration}
                      </span>
                    </div>
                    
                    <p className="text-sm mt-2">{type.description}</p>
                    
                    <div className="mt-2 text-sm">
                      {type.isPaid ? (
                        <span className="text-signature">Paid consultation</span>
                      ) : (
                        <span className="text-green-600">Free consultation</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary w-full flex items-center justify-center">
                <Calendar size={18} className="mr-2" />
                Schedule Now
              </button>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="text-signature mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:hello@dustinekibagendi.com" className="text-signature hover:underline">
                      hello@dustinekibagendi.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-signature mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-signature hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-signature mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-bold mb-4">Connect on Social</h4>
              
              <div className="flex space-x-4">
                <a href="#" className="text-charcoal hover:text-signature transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-charcoal hover:text-signature transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-charcoal hover:text-signature transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;