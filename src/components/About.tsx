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
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Get to know more about my journey, education, and what drives my passion for web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-start">
            {/* Personal Information */}
            <div className="space-y-8 animate-slide-left">
              <div className="space-y-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl text-foreground font-semibold">Get in Touch</h3>
                <div className="grid gap-3 xs:gap-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 glass rounded-xl hover:border-primary/30 transition-all duration-300 hover-lift-touch touch-target animate-entrance"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-2 xs:p-3 rounded-lg bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 group-hover:from-gradient-start/30 group-hover:to-gradient-end/30 transition-all duration-300 flex-shrink-0">
                        <info.icon className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs xs:text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors duration-300 break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-8 animate-slide-right">
              <div className="space-y-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl text-foreground font-semibold">Education & Experience</h3>
                <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="glass p-4 xs:p-6 hover:border-primary/30 transition-all duration-300 hover-lift-touch group animate-entrance" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-start space-x-3 xs:space-x-4">
                        <div className="p-2 xs:p-3 rounded-lg bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 group-hover:from-gradient-start/30 group-hover:to-gradient-end/30 transition-all duration-300 flex-shrink-0">
                          <achievement.icon className="w-5 h-5 xs:w-6 xs:h-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base xs:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {achievement.title}
                            </h4>
                            <span className="text-xs xs:text-sm text-muted-foreground font-medium">
                              {achievement.year}
                            </span>
                          </div>
                          <p className="text-sm xs:text-base text-primary font-medium">{achievement.subtitle}</p>
                          <p className="text-xs xs:text-sm text-muted-foreground">{achievement.detail}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
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