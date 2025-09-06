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
      liveUrl: 'https://asmiverse-timecapsule.vercel.app',
      githubUrl: 'https://github.com/asmitakumari/asmiverse-timecapsule',
      category: 'Full Stack',
      year: '2024'
    },
    {
      title: 'To-Do List App',
      description: 'A simple and intuitive task management tool built with React and TailwindCSS. Designed with a sleek and responsive UI, it helps users stay organized, manage daily tasks efficiently, and boost productivity.',
      image: '/To-Do List.png',
      technologies: ['React', 'Typescript', 'MongoDB', 'Context API','Git'],
      liveUrl: 'https://github.com/Asmch/Todo-list.git',
      githubUrl: 'https://github.com/Asmch/Todo-list.git',
      category: 'React Development',
      year: '2023'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              A showcase of my recent work, demonstrating my skills in modern web development and creative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 items-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card animate-entrance"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6 relative z-10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    {/* <div className="w-full h-48 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-primary/60" />
                    </div> */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 xs:top-4 xs:left-4">
                      <span className="px-2 xs:px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 xs:top-4 xs:right-4">
                      <span className="px-2 xs:px-3 py-1 text-xs font-medium bg-background/80 text-foreground rounded-full backdrop-blur-sm flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg xs:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs xs:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 xs:px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                      <Button
                        variant="gradient"
                        size="sm"
                        asChild
                        className="flex-1 touch-target"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4" />
                          <span className="text-xs xs:text-sm">Live Demo</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 touch-target"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Github className="w-3 h-3 xs:w-4 xs:h-4" />
                          <span className="text-xs xs:text-sm">Code</span>
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
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Want to see more of my work?
              </p>
              <Button
                variant="gradient-outline"
                size="lg"
                asChild
              >
                <a
                  href="https://github.com/asmitakumari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
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