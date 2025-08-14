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
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <div className="container mx-auto px-6 text-center z-10 pt-20">
          <div className="animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white text-shadow">
                Hello, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-2">
                <TypingAnimation phrases={typingPhrases} className="font-medium" />
              </div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/80 max-w-4xl mx-auto animate-slide-up leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
              <Button
                onClick={handleDownloadResume}
                className="elevated-button glass-morphism px-10 py-4 text-white font-semibold hover:scale-110 transform transition-all duration-300 border border-white/30 text-lg"
                variant="outline"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Resume
              </Button>
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="elevated-button bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-10 py-4 text-white font-semibold hover:scale-110 transform transition-all duration-300 shadow-xl text-lg"
              >
                <Briefcase className="w-6 h-6 mr-3" />
                View My Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Professional scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white/70 text-sm mb-2 font-medium">Explore More</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-float animation-delay-1000 blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-float animation-delay-2000 blur-sm"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-bg relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="professional-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-8 gradient-text">{about.title}</h3>
                  <div className="space-y-6">
                    {about.description.map((paragraph: string, index: number) => (
                      <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Badge variant="secondary" className="px-5 py-3 text-sm font-medium">
                      <i className="fas fa-map-marker-alt mr-2 text-primary" />
                      {personalInfo.location}
                    </Badge>
                    <Badge variant="secondary" className="px-5 py-3 text-sm font-medium">
                      <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                      CGPA: {about.education.cgpa}
                    </Badge>
                    <Badge variant="secondary" className="px-5 py-3 text-sm font-medium">
                      <Briefcase className="w-4 h-4 mr-2 text-primary" />
                      {about.education.degree}
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="professional-card max-w-sm">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Briefcase className="text-white w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">{experience.title}</h4>
                      <p className="text-muted-foreground mb-4 font-medium">{experience.company}</p>
                      <div className="text-primary font-semibold mb-2">{experience.duration}</div>
                      <div className="text-sm text-muted-foreground">{experience.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <div className="professional-card skill-glow group">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-code text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Programming Languages</h3>
                  <p className="text-muted-foreground text-sm mt-2">Core development languages</p>
                </div>
                <div className="space-y-5">
                  {skills.languages.map((skill: any) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color="purple"
                    />
                  ))}
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="professional-card skill-glow group">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-layer-group text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Frameworks & Libraries</h3>
                  <p className="text-muted-foreground text-sm mt-2">Modern development frameworks</p>
                </div>
                <div className="space-y-5">
                  {skills.frameworks.map((skill: any) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color="green"
                    />
                  ))}
                </div>
              </div>

              {/* Technical Expertise */}
              <div className="professional-card skill-glow group">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-brain text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Technical Expertise</h3>
                  <p className="text-muted-foreground text-sm mt-2">Advanced engineering skills</p>
                </div>
                <div className="space-y-5">
                  {skills.tools.map((skill: any) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color="blue"
                    />
                  ))}
                </div>
              </div>
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
          
          <div className="max-w-5xl mx-auto">
            <div className="professional-card">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white w-10 h-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold gradient-text mb-2">{experience.title}</h3>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">{experience.company}</h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {experience.duration}
                      </span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    <h5 className="text-lg font-semibold text-foreground mb-4">Key Achievements & Impact</h5>
                    {experience.achievements.map((achievement: string, index: number) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="text-white w-4 h-4" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project: any) => (
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
            {codingProfiles.map((profile: any) => (
              <CodingProfile
                key={profile.name}
                name={profile.name}
                count={profile.count}
                suffix={profile.suffix}
                icon={profile.icon}
                color={profile.color}
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
