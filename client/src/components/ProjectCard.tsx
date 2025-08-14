import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  year: string;
  icon: string;
  color: string;
  githubUrl: string;
  demoUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const colorClasses = {
    purple: 'from-purple-600 to-indigo-600',
    green: 'from-green-600 to-emerald-600',
    blue: 'from-blue-600 to-cyan-600',
    yellow: 'from-yellow-600 to-orange-600',
    red: 'from-red-600 to-pink-600',
    pink: 'from-pink-600 to-rose-600'
  };

  return (
    <div 
      className="project-card h-80 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden glass-morphism border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="text-4xl mb-4">
                <i className={`${project.icon} text-${project.color}-600 dark:text-${project.color}-400`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 glass-morphism border-0 shadow-lg">
          <CardContent className="p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button 
                size="sm" 
                className={`flex-1 bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses]} text-white hover:scale-105 transition-transform`}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 hover:scale-105 transition-transform"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
