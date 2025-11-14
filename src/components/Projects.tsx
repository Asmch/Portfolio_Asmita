import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Academy Landing Page',
      description: 'Built a modern, responsive Academy Landing Page using React and Tailwind CSS, featuring interactive UI components, animations, and a clean layout to showcase educational offerings.',
      image: '/Academy.png',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      liveUrl: 'https://landing-page-academy-qoza1w7rg.vercel.app/',
      githubUrl: 'https://github.com/Asmch/LandingPage-Academy.git',
      category: 'Frontend',
      year: '2025'
    },
    {
      title: 'AsmiVerse Time Capsule',
      description: 'Built an interactive Time Capsule web application enabling users to create, store, and unlock digital capsules with text, photos, and videos, featuring scheduled future delivery for a personalized memory-sharing experience.',
      image: '/asmiverse.png',
      technologies: ['Next.js', 'MongoDB', 'Node.js', 'TypeScript','NextAuth.js','Socket.io'],
      liveUrl: 'https://asmiversecapsule.vercel.app/',
      githubUrl: 'https://github.com/asmitakumari/asmiverse-timecapsule',
      category: 'Full Stack',
      year: '2024'
    },
    {
      title: 'SecureVault',
      description: 'Built a secure password management application with Next.js, featuring encrypted password storage, CRUD operations, tag-based filtering, and 2FA support for enhanced data protection.',
      image: '/secureVault.png',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      liveUrl: 'https://password-vault-murex.vercel.app/',
      githubUrl: 'https://github.com/Asmch/Password-Vault.git',
      category: 'Full Stack',
      year: '2025'
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-background to-muted/20 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container-custom">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 xs:space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Featured Projects</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up px-2 xs:px-3" style={{ animationDelay: '0.1s' }}>
              A showcase of my recent work, demonstrating my skills in modern web development and creative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 items-stretch">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card p-4 xs:p-5 sm:p-6 animate-entrance flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4 xs:space-y-5 sm:space-y-6 relative z-10 flex flex-col flex-1">
                  {/* Enhanced Project Image */}
                  <div className="relative overflow-hidden rounded-lg flex-shrink-0 group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-[5]"></div>
                    <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 z-20">
                      <span className="px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 text-xs font-medium bg-primary/30 backdrop-blur-md text-primary rounded-full border border-primary/20 shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 z-20">
                      <span className="px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 text-xs font-medium bg-background/90 backdrop-blur-md text-foreground rounded-full border border-white/10 flex items-center space-x-1 shadow-lg">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 flex flex-col flex-1">
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 xs:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col xs:flex-row gap-2 xs:gap-2.5 sm:gap-3 pt-1 xs:pt-2">
                      <Button
                        variant="gradient"
                        size="sm"
                        asChild
                        className="flex-1 touch-target text-xs xs:text-sm"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1.5 xs:space-x-2"
                        >
                          <ExternalLink className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 touch-target text-xs xs:text-sm"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1.5 xs:space-x-2"
                        >
                          <Github className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                          <span>Code</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Section */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-3 xs:space-y-4">
              <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">
                Want to see more of my work?
              </p>
              <Button
                variant="gradient-outline"
                size="lg"
                asChild
                className="text-xs xs:text-sm sm:text-base px-4 xs:px-6 sm:px-8"
              >
                <a
                  href="https://github.com/asmitakumari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Github className="w-4 h-4 xs:w-5 xs:h-5" />
                  <span>View All Projects on GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;