import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 90, color: 'from-orange-400 to-red-900' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
        { name: 'HTML & CSS', level: 95, color: 'from-orange-500 to-red-500' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'Rest APIs', level: 80, color: 'from-red-500 to-red-700' },
        { name: 'JWT Authentication', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'Git & Github', level: 90, color: 'from-teal-400 to-teal-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container-custom">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 xs:space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Skills & Expertise</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up px-2 xs:px-3" style={{ animationDelay: '0.1s' }}>
              A comprehensive overview of my technical skills and proficiency levels in various technologies.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 lg:gap-10 xl:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="space-y-4 xs:space-y-5 sm:space-y-6 animate-fade-up" 
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold text-center lg:text-left">
                  {category.title}
                </h3>
                <div className="space-y-4 xs:space-y-4.5 sm:space-y-5 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Card 
                      key={skillIndex} 
                      className="skill-card p-4 xs:p-5 sm:p-6 animate-entrance"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="space-y-3 xs:space-y-3.5 sm:space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <span className="text-xs xs:text-sm font-medium text-muted-foreground whitespace-nowrap">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Enhanced Skill Level Indicator */}
                        <div className="flex items-center flex-wrap gap-2 xs:gap-3">
                          <div className="flex space-x-1 xs:space-x-1.5">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-all duration-300 ${
                                  i < Math.floor(skill.level / 20)
                                    ? `bg-gradient-to-r ${skill.color} shadow-sm shadow-primary/30`
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs xs:text-sm text-muted-foreground font-medium group-hover:text-primary/80 transition-colors duration-300">
                            {skill.level >= 90 ? 'Expert' : 
                             skill.level >= 75 ? 'Advanced' : 
                             skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold">Additional Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 px-2 xs:px-3">
              {[
                'Java', 'Python', 'VS Code', 'Acentricity UI', 'Vercel', 'DSA', 
                'Postman', 'Responsive Design', 'Web Performance', 'SEO'
              ].map((tool, index) => (
                <div
                  key={index}
                  className="glass px-2.5 xs:px-3 sm:px-3.5 md:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded-full text-xs xs:text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover-lift-touch cursor-pointer touch-target animate-entrance relative overflow-hidden group"
                  style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;