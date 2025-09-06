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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 xs:-top-20 xs:-right-20 sm:-top-32 sm:-right-32 md:-top-40 md:-right-40 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-gradient-start/15 to-gradient-middle/15 blur-2xl xs:blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 xs:-bottom-20 xs:-left-20 sm:-bottom-32 sm:-left-32 md:-bottom-40 md:-left-40 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-gradient-middle/15 to-gradient-end/15 blur-2xl xs:blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] rounded-full bg-gradient-to-r from-gradient-start/8 to-gradient-end/8 blur-2xl xs:blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16">
          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="profile-glow">
                <img
                  src={asmitaProfile}
                  alt="Asmita Kumari - Web Developer"
                  className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-full object-cover border-2 xs:border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-105"
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
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-6xl mx-auto leading-relaxed font-light mobile-padding">
              Driven aspiring software developer with{' '}
              <span className="text-primary font-medium">1 year of experience</span> in web development 
              and technical education. Proficient in frontend technologies including{' '}
              <span className="gradient-text font-medium">HTML, CSS, JavaScript, React & Next.js</span>{' '}
              with backend basics using <span className="gradient-text font-medium">Node.js and MongoDB.</span>{' '}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up mobile-padding" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group touch-target transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm sm:text-base">Connect with Me</span>
            </Button>
            <Button 
              variant="gradient-outline" 
              size="lg"
              onClick={downloadResume}
              className="group border-2 touch-target transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
              <span className="text-sm sm:text-base">My Resume</span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 xs:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 touch-target p-2 rounded-full hover:bg-primary/10"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-5 h-5 xs:w-6 xs:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;