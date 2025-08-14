import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

import { ParticleBackground } from '../components/ParticleBackground';
import { TypingAnimation } from '../components/TypingAnimation';
import { SkillBar } from '../components/SkillBar';
import { ProjectCard } from '../components/ProjectCard';
import { CodingProfile } from '../components/CodingProfile';
import { ContactForm } from '../components/ContactForm';

import {
  personalInfo,
  about,
  skills,
  experience,
  projects,
  codingProfiles,
  certifications,
  typingPhrases
} from '../data/portfolio';

export const Portfolio: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10 pt-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm <span className="gradient-text bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-gray-200 h-16">
              <TypingAnimation phrases={typingPhrases} className="text-2xl" />
            </div>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto animate-slide-up">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button
                onClick={handleDownloadResume}
                className="glass-morphism px-8 py-4 text-white font-semibold hover:scale-105 transform transition-all duration-300 border border-white/20"
                variant="outline"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-bg relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism border-0 shadow-lg animate-slide-up">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary">{about.title}</h3>
                    {about.description.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="secondary" className="px-4 py-2">
                        <i className="fas fa-map-marker-alt mr-2 text-primary" />
                        {personalInfo.location}
                      </Badge>
                      <Badge variant="secondary" className="px-4 py-2">
                        <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                        CGPA: {about.education.cgpa}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <Card className="glass-morphism border-0 shadow-lg animate-float">
                      <CardContent className="p-8">
                        <div className="text-6xl mb-4">
                          <Briefcase className="text-primary mx-auto w-16 h-16" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-foreground">{experience.title}</h4>
                        <p className="text-muted-foreground mb-4">{experience.company}</p>
                        <div className="text-sm text-primary">{experience.duration}</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <Card className="glass-morphism border-0 shadow-lg hover:scale-105 transform transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <i className="fas fa-code text-5xl text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold text-foreground">Languages</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.languages.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                        color="purple"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Frameworks & Tools */}
              <Card className="glass-morphism border-0 shadow-lg hover:scale-105 transform transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <i className="fas fa-tools text-5xl text-green-600 dark:text-green-400 mb-4" />
                    <h3 className="text-2xl font-bold text-foreground">Frameworks & Tools</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.frameworks.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                        color="green"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Other Skills */}
              <Card className="glass-morphism border-0 shadow-lg hover:scale-105 transform transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <i className="fas fa-cogs text-5xl text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-foreground">Other Skills</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.tools.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                        color="blue"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism border-0 shadow-lg animate-slide-up">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Briefcase className="text-2xl text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">{experience.title}</h3>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{experience.company}</h4>
                    <div className="text-muted-foreground mb-4">{experience.duration} | {experience.location}</div>
                    
                    <div className="space-y-4">
                      {experience.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 w-5 h-5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Coding Profiles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {codingProfiles.map((profile) => (
              <CodingProfile
                key={profile.name}
                name={profile.name}
                count={profile.count}
                suffix={profile.suffix}
                icon={profile.icon}
                color={profile.color as any}
                url={profile.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg mt-6 text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card dark:bg-background py-12 text-foreground border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-4">{personalInfo.name}</div>
            <p className="text-muted-foreground mb-6">Software Developer | Problem Solver | Tech Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">&copy; 2025 {personalInfo.name}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
