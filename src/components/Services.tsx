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
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive web development services designed to bring your digital vision to life with modern technologies and best practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="service-card glass p-8 hover:border-primary/30 transition-all duration-300 hover-lift group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 w-fit group-hover:from-gradient-start/30 group-hover:to-gradient-end/30 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="text-sm text-muted-foreground flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Let's collaborate to create something amazing together. Whether you need a simple website or a complex web application, 
                I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white font-semibold rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a 
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;