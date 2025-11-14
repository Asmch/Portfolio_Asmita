import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, GraduationCap, Trophy, Code2 } from 'lucide-react';

const About = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'asmitachoudhary08@gmail.com',
      href: 'mailto:asmitachoudhary08@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7061333651',
      href: 'tel:+917061333651'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/asmita-x/',
      href: 'https://www.linkedin.com/in/asmita-x/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/Asmch',
      href: 'https://github.com/Asmch'
    }
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Haldia Institute of Technology',
      detail: 'GPA: 9.33/10.0',
      year: '2023-2027'
    },
    {
      icon: Trophy,
      title: 'Hackathons & Competitions',
      subtitle: 'Active Participant',
      detail: 'Multiple coding competitions and hackathons',
      year: '2024-Present'
    },
    {
      icon: Code2,
      title: 'Technical Teacher',
      subtitle: 'IEEE Student Branch',
      detail: 'Inspiring the next generation of tech enthusiasts',
      year: '2023-2025'
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container-custom">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 xs:space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">About Me</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up px-2 xs:px-3" style={{ animationDelay: '0.1s' }}>
              Get to know more about my journey, education, and what drives my passion for web development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start">
            {/* Personal Information */}
            <div className="space-y-6 xs:space-y-7 sm:space-y-8 animate-slide-left">
              <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Get in Touch</h3>
                <div className="grid gap-3 xs:gap-3.5 sm:gap-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-center space-x-3 xs:space-x-3.5 sm:space-x-4 p-3 xs:p-3.5 sm:p-4 glass rounded-xl hover:border-primary/30 transition-all duration-300 hover-lift-touch touch-target animate-entrance relative overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="p-2 xs:p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 group-hover:from-gradient-start/40 group-hover:to-gradient-end/40 transition-all duration-300 flex-shrink-0 relative z-10 shadow-lg shadow-primary/10 group-hover:shadow-primary/20">
                        <info.icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0 relative z-10">
                        <p className="text-xs xs:text-sm text-muted-foreground mb-0.5 group-hover:text-primary/80 transition-colors duration-300">{info.label}</p>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors duration-300 break-all break-words">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-6 xs:space-y-7 sm:space-y-8 animate-slide-right">
              <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Education & Experience</h3>
                <div className="space-y-4 xs:space-y-4.5 sm:space-y-5 md:space-y-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="glass p-4 xs:p-5 sm:p-6 hover:border-primary/30 transition-all duration-300 hover-lift-touch group animate-entrance relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex items-start space-x-3 xs:space-x-3.5 sm:space-x-4 relative z-10">
                        <div className="p-2 xs:p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 group-hover:from-gradient-start/40 group-hover:to-gradient-end/40 transition-all duration-300 flex-shrink-0 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 group-hover:scale-110">
                          <achievement.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300" />
                        </div>
                        <div className="flex-1 space-y-1.5 xs:space-y-2 min-w-0 relative z-10">
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex-1 min-w-0">
                              {achievement.title}
                            </h4>
                            <span className="text-xs xs:text-sm text-muted-foreground font-medium whitespace-nowrap group-hover:text-primary/80 transition-colors duration-300">
                              {achievement.year}
                            </span>
                          </div>
                          <p className="text-xs xs:text-sm sm:text-base text-primary font-medium">{achievement.subtitle}</p>
                          <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{achievement.detail}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 xs:space-y-5 sm:space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass p-4 xs:p-5 sm:p-6 md:p-8 rounded-xl xs:rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 xs:mb-4">My Journey</h3>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2 xs:px-3">
                Results-driven Web Developer with strong expertise in modern web technologies and a proven record of building scalable, user-focused digital solutions. Experienced in hackathons and collaborative projects, demonstrating problem-solving, adaptability, and creativity under pressure. Passionate about continuous learning and mentoring, with a commitment to delivering applications that are both technically robust and engaging for users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;