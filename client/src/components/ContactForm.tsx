import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast message since this is frontend-only
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: 'fab fa-linkedin', url: personalInfo.socialLinks.linkedin, color: 'from-blue-600 to-blue-700' },
    { icon: 'fab fa-github', url: personalInfo.socialLinks.github, color: 'from-gray-800 to-gray-900' },
    { icon: 'fas fa-code', url: personalInfo.socialLinks.leetcode, color: 'from-orange-500 to-red-500' },
    { icon: 'fas fa-medal', url: personalInfo.socialLinks.hackerrank, color: 'from-green-500 to-teal-500' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="glass-morphism border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold mb-2 block">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-morphism border-border focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-semibold mb-2 block">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-morphism border-border focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-semibold mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-morphism border-border focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 transform transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300`}
                  >
                    <i className={`${link.icon} text-white text-xl`} />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
