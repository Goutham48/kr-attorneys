import React, { useState } from 'react';
import { Menu, X, Scale, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80; // Header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-2 rounded-full">
              <Scale className="h-8 w-8 text-red-600" />
            </div>
            <div>
            <h1 className="text-2xl font-bold text-slate-900">Koma Ramontja Attorneys Inc</h1>
            <p className="text-sm text-yellow-600 font-medium">Professional Legal Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-slate-700 hover:text-red-600 transition-colors font-medium relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-500"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-slate-700 hover:text-red-600 transition-colors font-medium relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-500"
            >
              About
            </a>
            <a 
              href="#practice-areas" 
              onClick={(e) => handleNavClick(e, 'practice-areas')}
              className="text-slate-700 hover:text-red-600 transition-colors font-medium relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-500"
            >
              Practice Areas
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleNavClick(e, 'team')}
              className="text-slate-700 hover:text-red-600 transition-colors font-medium relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-500"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-slate-700 hover:text-red-600 transition-colors font-medium relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-500"
            >
              Contact
            </a>
            <button 
              onClick={(e) => handleNavClick(e as any, 'contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl border border-yellow-500"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-amber-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-slate-700 hover:text-red-600 transition-colors font-medium"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-slate-700 hover:text-red-600 transition-colors font-medium"
              >
                About
              </a>
              <a 
                href="#practice-areas" 
                onClick={(e) => handleNavClick(e, 'practice-areas')}
                className="text-slate-700 hover:text-red-600 transition-colors font-medium"
              >
                Practice Areas
              </a>
              <a 
                href="#team" 
                onClick={(e) => handleNavClick(e, 'team')}
                className="text-slate-700 hover:text-red-600 transition-colors font-medium"
              >
                Team
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-slate-700 hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </a>
              <button 
                onClick={(e) => handleNavClick(e as any, 'contact')}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium w-full"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;