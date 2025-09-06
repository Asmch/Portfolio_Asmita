import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled ? 'glass backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold gradient-text transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              Asmita
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group touch-target"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gradient-start to-gradient-end transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Connect Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="font-semibold transition-all duration-300 hover:scale-105"
            >
              Connect With Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground touch-target transition-all duration-300 hover:scale-110"
            >
              <div className="transition-transform duration-300">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 glass backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-4 p-4 xs:p-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/10 animate-entrance"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="mt-4 w-full touch-target transition-all duration-300 hover:scale-105 animate-entrance"
              style={{ animationDelay: '0.6s' }}
            >
              Connect With Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;