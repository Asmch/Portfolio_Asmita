import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';
import asmitaProfile from '@/assets/asmita-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://flowcv.com/resume/kwg4msi2tbm6'; 
    link.download = 'Asmita_Kumari_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-middle/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-gradient-middle/20 to-gradient-end/20 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="profile-glow">
                <img
                  src={asmitaProfile}
                  alt="Asmita Kumari - Web Developer"
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-hero gradient-text leading-tight">
              I'm <span className="block md:inline">Asmita Kumari</span>{' '}
              <span className="block">Full-Stack Developer</span>{' '}
              {/* <span className="block md:inline text-foreground">based in India.</span> */}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Driven aspiring software developer with{' '}
              <span className="text-primary font-medium">1 year of experience</span> in web development 
              and technical education. Proficient in frontend technologies including{' '}
              <span className="gradient-text font-medium">HTML, CSS, JavaScript, React & Next.js</span>{' '}
              with backend basics using <span className="gradient-text font-medium">Node.js and MongoDB.</span>{' '}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Connect with Me
            </Button>
            <Button 
              variant="gradient-outline" 
              size="xl"
              onClick={downloadResume}
              className="group border-2"
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
              My Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;