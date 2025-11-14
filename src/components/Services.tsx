import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Smartphone, Database, Computer, Zap, Codesandbox} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility']
    },
    {
      icon: Smartphone,
      title: 'Frontend Development',
      description: 'Creating beautiful, interactive user interfaces that provide exceptional user experiences across all devices.',
      features: ['React & Next.js', 'Tailwind CSS', 'JavaScript/TypeScript', 'Mobile-First Design']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building secure and scalable backend systems to support your web applications.',
      features: ['Node.js & Express.js', 'MongoDB Integration', 'Authentication & Authorization', 'RESTful APIs']
    },
    {
      icon: Computer,
      title: 'React Development',
      description: 'Building dynamic, component-based applications with React to deliver fast, interactive, and scalable user experiences',
      features: ['Component-based UI development', 'React Hooks & State Management', 'API Integration', 'Reusable & Scalable Components']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhancing website speed, efficiency, and overall performance to provide the best user experience.',
      features: ['Code Optimization', 'Image Optimization', 'Caching Strategies', 'Core Web Vitals']
    },
    {
      icon: Codesandbox,
      title: 'Next.js Development',
      description: 'Sharing knowledge through workshops, mentoring, and technical content creation for aspiring developers.',
      features: ['SSR & SSG', 'File-based Routing', 'API Routes & Middleware', 'SEO-friendly Applications']
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container-custom">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 xs:space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Services</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up px-2 xs:px-3" style={{ animationDelay: '0.1s' }}>
              Comprehensive web development services designed to bring your digital vision to life with modern technologies and best practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="service-card glass p-4 xs:p-5 sm:p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover-lift-touch group animate-entrance relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="space-y-4 xs:space-y-5 sm:space-y-6 relative z-10">
                  {/* Enhanced Service Icon */}
                  <div className="p-2.5 xs:p-3 sm:p-4 rounded-xl xs:rounded-2xl bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 w-fit group-hover:from-gradient-start/40 group-hover:to-gradient-end/40 transition-all duration-300 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 group-hover:scale-110">
                    <service.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Service Info */}
                  <div className="space-y-3 xs:space-y-3.5 sm:space-y-4">
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Enhanced Service Features */}
                    <div className="space-y-1.5 xs:space-y-2">
                      <h4 className="text-xs xs:text-sm font-medium text-foreground group-hover:text-primary/80 transition-colors duration-300">Key Features:</h4>
                      <ul className="space-y-1 xs:space-y-1.5">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="text-xs xs:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end flex-shrink-0 mt-1.5 shadow-sm shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300" />
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center space-y-4 xs:space-y-5 sm:space-y-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass p-4 xs:p-5 sm:p-6 md:p-8 rounded-xl xs:rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 xs:mb-4">Ready to Start Your Project?</h3>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 xs:mb-5 sm:mb-6 px-2 xs:px-3">
                  Let's collaborate to create something amazing together. Whether you need a simple website or a complex web application, 
                  I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
                </p>
                <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-3 sm:gap-4 justify-center items-stretch xs:items-center px-2 xs:px-3">
                  <a 
                    href="#contact"
                    className="group inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white font-semibold rounded-lg xs:rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 touch-target relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10">Get Started Today</span>
                  </a>
                  <a 
                    href="#portfolio"
                    className="inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base border-2 border-primary text-primary font-semibold rounded-lg xs:rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 touch-target"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;