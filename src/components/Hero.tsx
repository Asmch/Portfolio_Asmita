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
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 xs:-top-20 xs:-right-20 sm:-top-32 sm:-right-32 md:-top-40 md:-right-40 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-middle/20 blur-2xl xs:blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 xs:-bottom-20 xs:-left-20 sm:-bottom-32 sm:-left-32 md:-bottom-40 md:-left-40 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-gradient-middle/20 to-gradient-end/20 blur-2xl xs:blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 blur-2xl xs:blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        {/* Additional subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-gradient-start/5 to-gradient-middle/5 blur-3xl animate-float" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-gradient-middle/5 to-gradient-end/5 blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16">
          {/* Enhanced Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="profile-glow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={asmitaProfile}
                  alt="Asmita Kumari - Web Developer"
                  className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-full object-cover border-2 xs:border-4 border-white/30 shadow-2xl shadow-primary/20 transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-primary/30"
                />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-hero gradient-text leading-tight drop-shadow-lg">
              I'm <span className="block md:inline">Asmita Kumari</span>{' '}
              <span className="block">Full-Stack Developer</span>{' '}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <div className="h-px w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground max-w-6xl mx-auto leading-relaxed font-light mobile-padding px-2 xs:px-3 sm:px-4">
              Driven aspiring software developer with{' '}
              <span className="text-primary font-medium">1 year of experience</span> in web development 
              and technical education. Proficient in frontend technologies including{' '}
              <span className="gradient-text font-medium">HTML, CSS, JavaScript, React & Next.js</span>{' '}
              with backend basics using <span className="gradient-text font-medium">Node.js and MongoDB.</span>{' '}
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-3 sm:gap-4 justify-center items-stretch xs:items-center animate-fade-up mobile-padding px-2 xs:px-3 sm:px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group touch-target transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 w-full xs:w-auto text-xs xs:text-sm sm:text-base px-4 xs:px-6 sm:px-8 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <Mail className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Connect with Me</span>
            </Button>
            <Button 
              variant="gradient-outline" 
              size="lg"
              onClick={downloadResume}
              className="group border-2 touch-target transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/50 w-full xs:w-auto text-xs xs:text-sm sm:text-base px-4 xs:px-6 sm:px-8 relative overflow-hidden"
            >
              <Download className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
              <span>My Resume</span>
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('#about')}
              className="group text-muted-foreground hover:text-primary transition-all duration-300 touch-target p-3 xs:p-3.5 rounded-full hover:bg-primary/10 hover:border border-primary/20 relative"
              aria-label="Scroll to About section"
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              <ArrowDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 relative z-10 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;