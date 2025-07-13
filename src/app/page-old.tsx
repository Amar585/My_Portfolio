"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Calendar, Users, Database, Code2, Menu, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [email, setEmail] = useState("");

  const skills = [
    "JavaScript", "Python", "Java", "React", "Next.js", "Node.js",
    "SQL", "HTML", "CSS", "Tailwind CSS", "Git", "GitHub",
    "VS Code", "Office 365", "Active Directory", "Windows Server"
  ];

  const experience = [
    {
      title: "Technical Support Officer",
      company: "Chisholm Institute TAFE",
      period: "January 2025 - Present",
      location: "Melbourne, VIC",
      description: "Providing technical support and troubleshooting for software and hardware issues across multiple platforms, managing user accounts using Microsoft Azure and Active Directory."
    },
    {
      title: "Endpoint Deployment Specialist",
      company: "HP Inc",
      period: "November 2024 - January 2025",
      location: "Melbourne, VIC",
      description: "Configured and deployed 300+ devices with automated scripting for enterprise environments, maintained technical documentation and deployment procedures."
    },
    {
      title: "ICT Help Desk Support Level 1 and 2",
      company: "Harris HMC Pty Ltd",
      period: "October 2023 - June 2024",
      location: "Melbourne, VIC",
      description: "Provided technical support for 250+ users across multiple platforms, managed system integrations and troubleshot complex technical issues."
    },
    {
      title: "ICT Service Desk Analyst Level 1",
      company: "Save the Children Australia",
      period: "December 2022 - March 2023",
      location: "Melbourne, VIC",
      description: "Provided Level 1 IT support, user account management, and network issue resolution, assisted in IT operations reducing downtime."
    }
  ];

  const projects = [
    {
      title: "Secure File Sharing Platform",
      description: "A comprehensive web-based file sharing platform using modern web technologies to provide secure, user-friendly file management and sharing capabilities for educational and professional environments.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Database", "Authentication"],
      highlights: [
        "Full-stack web application architecture for optimal performance",
        "Secure file upload, storage, and sharing with encryption protocols",
        "Responsive UI with modern design principles",
        "Comprehensive user authentication and authorization",
        "Database connectivity and data management systems"
      ]
    },
    {
      title: "Task Manager with Chatbot Integration",
      description: "An intelligent task management system using Python backend technologies and modern frontend frameworks to enhance user productivity through automated task organization and AI-powered assistance features.",
      technologies: ["Python", "HTML", "CSS", "Tailwind CSS", "RESTful API", "AI/Chatbot"],
      highlights: [
        "Comprehensive task management system with Python backend",
        "Responsive frontend interface with modern UX principles",
        "Intelligent chatbot functionality for task organization",
        "Robust database connectivity for secure task storage",
        "Automated task scheduling and reminder systems"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to a backend service
      alert(`Thanks for your interest! I'll contact you at ${email} soon!`);
      setEmail("");
    }
  };

  // Cool AG Logo Component with better design
  const CoolLogo = () => (
    <div className="relative group cursor-pointer">
      <div className="flex items-center gap-1">
        {/* A letter with modern styling */}
        <div className="relative">
          <span className="text-2xl font-bold text-green-400 transition-all duration-300 group-hover:text-green-300 group-hover:scale-110">
            A
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>

        {/* Connecting dot */}
        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>

        {/* G letter with modern styling */}
        <div className="relative">
          <span className="text-2xl font-bold text-green-400 transition-all duration-300 group-hover:text-green-300 group-hover:scale-110">
            G
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-green-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <CoolLogo />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-zinc-950 transition-all duration-300"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  MENU
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-700 text-white min-w-48">
                <DropdownMenuItem
                  onClick={() => scrollToSection('hero')}
                  className="text-zinc-300 hover:text-green-400 hover:bg-zinc-800 cursor-pointer"
                >
                  <span>Home</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToSection('about')}
                  className="text-zinc-300 hover:text-green-400 hover:bg-zinc-800 cursor-pointer"
                >
                  <span>About</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToSection('experience')}
                  className="text-zinc-300 hover:text-green-400 hover:bg-zinc-800 cursor-pointer"
                >
                  <span>Experience</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToSection('projects')}
                  className="text-zinc-300 hover:text-green-400 hover:bg-zinc-800 cursor-pointer"
                >
                  <span>Projects</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToSection('contact')}
                  className="text-zinc-300 hover:text-green-400 hover:bg-zinc-800 cursor-pointer"
                >
                  <span>Contact</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="relative">
            <div className="w-80 h-96 bg-green-400 rounded-3xl transform rotate-3 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-6xl font-bold text-zinc-300">
                AG
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                G'day <span className="text-zinc-400">World!</span>
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                I'm <span className="text-green-400">Amar</span>
              </h2>
            </div>

            <p className="text-lg text-zinc-300 max-w-2xl leading-relaxed">
              A passionate Software Developer from Melbourne with expertise in Full-stack Web Development.
              Graduate from Melbourne Institute of Technology, specializing in creating efficient,
              scalable applications and providing comprehensive technical solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-green-400 text-zinc-950 hover:bg-green-500 transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-zinc-950 transition-all duration-300"
                onClick={() => scrollToSection('about')}
              >
                About Me
              </Button>
            </div>

            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:bg-green-400/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:bg-green-400/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:bg-green-400/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-zinc-950">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
              <div className="text-lg">Professional Roles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Users Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
              <div className="text-lg">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Focusing on the <span className="text-green-400">Best</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Multiple Tech Stack */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-green-400/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-400">Multiple Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-300">
                  Proficient in multiple programming languages and frameworks including JavaScript, Python, Java, React, Next.js, and modern web technologies.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Full-Stack Development */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-green-400/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-400">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-300">
                  Expert in both frontend and backend development, creating scalable web applications with modern frameworks and databases.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-green-400/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-400">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-300">
                  Extensive experience in IT support, system administration, and helping teams solve complex technical challenges efficiently.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Skills Tags */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:border-green-400 hover:text-green-400 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-zinc-400 text-lg">Building expertise through diverse technical roles</p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-green-400">{job.title}</CardTitle>
                      <div className="text-lg font-semibold text-white">{job.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-zinc-400 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {job.period}
                      </div>
                      <div className="flex items-center text-zinc-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-300 text-base leading-relaxed">
                    {job.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-400 text-lg">Key software development projects showcasing my skills</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-green-400/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-green-400 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-zinc-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-zinc-800 text-zinc-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Key Highlights:</h4>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-green-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-8">
            Let's create great things together
          </h2>
          <p className="text-lg text-zinc-800 mb-12">
            Drop your email and I'll contact you soon :)
          </p>

          <form onSubmit={handleEmailSubmit} className="mb-12">
            <div className="relative max-w-md mx-auto">
              <Input
                type="email"
                placeholder="email here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-4 px-6 text-lg bg-zinc-950/20 border-0 rounded-full text-zinc-950 placeholder:text-zinc-700 focus:ring-2 focus:ring-zinc-950"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-950 hover:bg-zinc-800 text-green-400 rounded-full"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-zinc-950">
              <Mail className="w-5 h-5" />
              <span>amar.gupta@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-950">
              <MapPin className="w-5 h-5" />
              <span>Melbourne, VIC</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-400">
              <p>&copy; 2025 Amar Gupta. All rights reserved.</p>
            </div>
            <div className="text-zinc-400 mt-4 md:mt-0">
              <p>Software Developer • Melbourne, VIC</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
