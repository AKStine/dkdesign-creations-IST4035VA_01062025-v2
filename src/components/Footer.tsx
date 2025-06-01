import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold">
              Dustine <span className="text-signature">Kibagendi</span>
            </h3>
            <p className="mt-2 text-sm opacity-80">
              Brand Strategist & Design Consultant
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-signature transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white hover:text-signature transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-white hover:text-signature transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white hover:text-signature transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-rich border-none focus:outline-none text-white w-full max-w-[200px]"
              />
              <button type="submit" className="bg-signature text-white px-4 py-2 border-none">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs opacity-80">
              Join my newsletter for brand insights.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 mb-4 md:mb-0">
            &copy; {currentYear} Dustine Kibagendi. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-white hover:text-signature transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-white hover:text-signature transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;