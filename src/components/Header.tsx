import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Maison');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Maison', 'Moi', 'Je Fait', 'Parle Moi'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <a href="#Maison" className="text-white text-2xl font-medium">Archiratus</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Maison', 'Moi', 'Je Fait', 'Parle Moi'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-white uppercase text-sm tracking-wider transition-all duration-300 ${
                  activeSection === item ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center md:hidden">
            <nav className="text-center">
              {['Maison', 'Moi', 'Je Fait', 'Parle Moi'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block text-white text-2xl mb-8 uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;