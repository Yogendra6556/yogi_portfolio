import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Rocket, Star } from 'lucide-react';
import ProfilePic from './assets/YOYO_InPixio.jpg';
import { Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             {/* Profile Picture */}
            <img src={ProfilePic} alt="Profile" className="w-32 h-32 rounded-full border-2 border-blue-3000 shadow-lg"/>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Yogendra Rai
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
               Software Engineer & Solution Architect
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
               href="https://github.com/Yogendra6556"
               className="text-gray-400 hover:text-white transition-colors"
               target="_blank"
               rel="noopener noreferrer"
              >
               <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/yogendra-rai-98ba31289"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:yogendrarai910@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
               
            </div>
          </div>
        </div>
      </header>
       {/* Experience Section */}
         
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ 
              {
                role: "Intern",
                company: "NXT WAVE",
                duration: "26.02.2024 - 26.08.2024",
                description: "Leading a team of developers in building scalable web applications using modern technologies and AI Generative Model"
              },
              {
                role: "Intern",
                company: "Ypsilon IT Solutions Pvt. Ltd.",
                duration: "2025 - present",
                description: "Python with Django & Machine Learning,Developed and optimized enterprise solutions, focusing on performance and security."
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <Briefcase className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-gray-400">{job.company} ({job.duration})</p>
                <p className="text-gray-300 mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                title: "AI Generative Model",
                img: "src/assets/next_wave.jpg",
              },
              {
                title: "Python with Django & Machine Learning",
                img: "src/assets/Ypsilon.jpg",
              },
              {
                title: "Virtual Summer Internship with paloalto",
                img: "src/assets/virtual_I.jpg",
              },
            ].map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <img src={cert.img} alt={cert.title} className="w-32 h-32 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
              <p className="text-gray-300">Specialized in full-stack development with modern technologies and best practices.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <Brain className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-300">Passionate about solving complex problems and creating efficient solutions.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <Rocket className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
              <p className="text-gray-300">Always exploring new technologies and pushing boundaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
       
      <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Portfolio Website",
              img: "src/assets/portfolio.jpeg" ,
              github: "https://github.com/Yogendra6556/portfolio",
              live: "https://yourportfolio.com",
              tech: ["React", "TypeScript", "TailwindCSS"],
            },
            {
              title: "Hospital Management System",
              img: "src/assets/hospital.jpeg",
              github: "https://github.com/Yogendra6556/yogi.git",
              live: "https://docpulse.com/",
              tech: ["Next.js", "Node.js", "MongoDB"],
            },
            {
              title: "AI Chatbot",
              img: "src/assets/Chatbot.jpeg",
              github: "https://github.com/Yogendra6556/chatbot",
              live: "https://yourchatbot.com",
              tech: ["Python", "Django", "OpenAI API"],
            },
            {
              title: "Task Manager",
              img: "src/assets/task.jpg",
              github: "https://github.com/Yogendra6556/taskmanager",
              live: "https://yourtaskmanager.com",
              tech: ["Vue.js", "Firebase", "Express.js"],
            },
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  A sophisticated project showcasing modern development practices and innovative solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      
       {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'Django','AWS', 'Docker', 'GraphQL',
              'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes'
            ].map((skill) => (
              <div key={skill} className="bg-gray-700 p-4 rounded-lg flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
       

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Yogendra Rai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;