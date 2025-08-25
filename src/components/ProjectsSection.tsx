import { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'Design' },
    { id: 'java', label: 'Java' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'sales', label: 'Sales' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform UI/UX',
      description: 'Complete design system and user experience for a modern e-commerce platform with focus on conversion optimization.',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['UI/UX', 'Figma', 'Design System', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Spring Boot Microservices',
      description: 'Scalable microservices architecture with Spring Boot, handling high-traffic e-commerce transactions.',
      category: 'java',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      tags: ['Spring Boot', 'Microservices', 'Maven', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'React Dashboard Application',
      description: 'Full-stack analytics dashboard with React frontend and Node.js backend, featuring real-time data visualization.',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Charts.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Sales Performance Analytics',
      description: 'CRM integration and sales analytics system that increased team performance by 40% through data-driven insights.',
      category: 'sales',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['CRM', 'Analytics', 'Strategy', 'Performance'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Mobile Banking App Design',
      description: 'Secure and intuitive mobile banking interface design with focus on accessibility and user trust.',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tags: ['Mobile UI', 'Banking', 'Security', 'Accessibility'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Enterprise Java Application',
      description: 'Large-scale enterprise application with complex business logic, built with Java Spring ecosystem.',
      category: 'java',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop',
      tags: ['Java', 'Spring', 'Enterprise', 'Hibernate'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="floating-shape top-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float" />
      <div className="floating-shape bottom-40 left-20 w-20 h-20 bg-secondary/10 rotate-45 animate-float-slow" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-gradient-primary mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my diverse portfolio spanning design, development, and sales excellence. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'glassmorphism hover:bg-primary/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-primary rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-secondary rounded-full hover:scale-110 transition-transform"
                    >
                      <Github size={16} />
                    </a>
                    <button className="p-2 bg-accent rounded-full hover:scale-110 transition-transform">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 text-center py-2 px-4 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    View Live
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 text-center py-2 px-4 border border-border rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-8">
            Interested in working together on your next project?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-primary"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;