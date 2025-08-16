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
    purple: 'from-purple-600 via-indigo-600 to-blue-600',
    green: 'from-green-600 via-emerald-600 to-teal-600',
    blue: 'from-blue-600 via-cyan-600 to-sky-600',
    yellow: 'from-yellow-600 via-orange-600 to-red-600',
    red: 'from-red-600 via-pink-600 to-rose-600',
    pink: 'from-pink-600 via-rose-600 to-purple-600'
  };

  const bgGradients = {
    purple: 'from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-blue-950/20',
    green: 'from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20',
    blue: 'from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-sky-950/20',
    yellow: 'from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/20 dark:via-orange-950/20 dark:to-red-950/20',
    red: 'from-red-50 via-pink-50 to-rose-50 dark:from-red-950/20 dark:via-pink-950/20 dark:to-rose-950/20',
    pink: 'from-pink-50 via-rose-50 to-purple-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-purple-950/20'
  };

  return (
    <div 
      className="group h-[28rem] cursor-pointer project-card project-card-hover"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full card-3d transition-all duration-700 ease-in-out ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden project-card-front">
          <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[project.color as keyof typeof bgGradients]} opacity-60`} />
          <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <div className="text-5xl mb-6 flex justify-center">
                <div className={`p-3 rounded-full bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses]} text-white shadow-lg project-icon-container`}>
                  <i className={project.icon} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground text-center">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-center text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs bg-white/90 dark:bg-slate-800/90 border-2 border-gray-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-xs font-medium text-foreground bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 px-4 py-2 rounded-full border border-gray-300 dark:border-slate-500 shadow-sm">
                {project.year}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 border-0 shadow-xl overflow-hidden project-card-back">
          <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[project.color as keyof typeof bgGradients]} opacity-70`} />
          <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground text-center">Key Features</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`text-2xl text-transparent bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses]} bg-clip-text`}>
                      •
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-3 mt-6">
              <Button 
                size="sm" 
                className={`flex-1 bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses]} text-white project-button shadow-lg`}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 project-button border-2 hover:border-primary"
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
