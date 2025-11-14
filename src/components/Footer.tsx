import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Asmch',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/asmita-x/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:asmitachoudhary08@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-background to-muted/20 border-t border-white/10">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          variant="gradient"
          size="icon"
          className="rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container-custom py-6 xs:py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-10">
          {/* Brand Section */}
          <div className="sm:col-span-2 space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="space-y-3 xs:space-y-4">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold gradient-text">Asmita Kumari</h3>
              <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                Passionate web developer creating beautiful, functional, and user-friendly digital experiences. 
                Always learning, always creating, always improving.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2.5 xs:space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 xs:p-3 glass rounded-lg xs:rounded-xl hover:border-primary/30 transition-all duration-300 hover-lift-touch group touch-target"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs xs:text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-300 relative group touch-target block py-1"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gradient-start to-gradient-end transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
              {[
                'Web Development',
                'Frontend Development',
                'Backend Development',
                'React Development',
                'Performance Optimization',
                'Next.js Development',
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-xs xs:text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer touch-target block py-1">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 pt-4 xs:pt-5 sm:pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 xs:gap-2 text-muted-foreground text-xs xs:text-sm sm:text-base">
              <span>© 2025 Asmita Kumari. Made with</span>
              <Heart className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-red-500 fill-current" />
              <span>and lots of</span>
              <span className="gradient-text font-semibold">code</span>
            </div>
            
            <div className="flex items-center text-xs xs:text-sm text-muted-foreground">
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-middle/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-gradient-middle/10 to-gradient-end/10 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;