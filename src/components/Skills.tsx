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
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              A comprehensive overview of my technical skills and proficiency levels in various technologies.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="space-y-6 animate-fade-up" 
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-subsection text-foreground font-semibold text-center lg:text-left">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Card 
                      key={skillIndex} 
                      className="skill-card"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        {/* <div className="space-y-2">
                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: `${skill.level}%`,
                                animation: `expand 1.5s ease-out ${(categoryIndex * 0.2) + (skillIndex * 0.1)}s both`
                              }}
                            />
                          </div>
                        </div> */}

                        {/* Skill Level Indicator */}
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i < Math.floor(skill.level / 20)
                                    ? `bg-gradient-to-r ${skill.color}`
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
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
          <div className="text-center space-y-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-subsection text-foreground font-semibold">Additional Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Java', 'Python', 'VS Code', 'Acentricity UI', 'Vercel', 'DSA', 
                'Postman', 'Responsive Design', 'Web Performance', 'SEO'
              ].map((tool, index) => (
                <div
                  key={index}
                  className="glass px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover-lift cursor-pointer"
                  style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
                >
                  {tool}
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