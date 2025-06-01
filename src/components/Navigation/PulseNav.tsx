import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' }
];

const PulseNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Pulse Navigation Button */}
      <div className="fixed top-8 left-8 z-50">
        <button
          aria-label="Navigation Menu"
          className={`w-6 h-6 rounded-full bg-signature outline-none focus:outline-none ${
            isOpen ? '' : 'pulse'
          } transition-all duration-300 hover:w-8 hover:h-8`}
          onClick={toggleMenu}
        />
      </div>

      {/* Full-screen Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal bg-opacity-95 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col justify-center items-center`}
      >
        <button
          aria-label="Close Navigation"
          className="absolute top-8 right-8 text-white hover:text-signature transition-colors duration-300"
          onClick={toggleMenu}
        >
          <X size={32} />
        </button>

        <nav className="text-center">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.id} className="overflow-hidden">
                <button
                  className="text-white hover:text-signature text-4xl sm:text-5xl font-serif transition-all duration-300 hover:pl-4"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Bottom Navigation (Alternative for mobile users) */}
      <div className={`fixed bottom-0 left-0 right-0 z-30 bg-charcoal transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
        <div className="flex justify-between items-center p-4">
          <button 
            className="text-white" 
            onClick={toggleMenu}
          >
            <Menu size={24} />
            <span className="ml-2">Menu</span>
          </button>
          <button 
            className="btn-primary py-2 px-4 text-sm"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default PulseNav;