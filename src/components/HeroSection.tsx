import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="floating-shape top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="floating-shape top-40 right-20 w-16 h-16 bg-secondary/20 rotate-45 animate-float-slow" />
      <div className="floating-shape bottom-32 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float" />
      <div className="floating-shape bottom-20 right-1/3 w-24 h-24 bg-primary/10 rotate-12 animate-float-slow" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Greeting */}
            <div className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </div>

            {/* Name */}
            <h1 className="text-hero text-gradient-primary animate-fade-up" style={{ animationDelay: '0.4s' }}>
              SUDARSHAN
            </h1>

            {/* Professional Tags */}
            <div className="flex flex-wrap gap-4 text-lg font-medium animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                Designer
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                Java Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                Full-Stack
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                Sales Expert
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.8s' }}>
              Crafting digital experiences through innovative design, robust backend solutions, 
              and strategic sales excellence. I bridge the gap between creative vision and technical implementation.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '1s' }}>
              <button 
                onClick={scrollToProjects}
                className="cta-primary flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={scrollToContact}
                className="cta-secondary flex items-center gap-2"
              >
                Get In Touch
                <Mail size={20} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 animate-fade-up" style={{ animationDelay: '1.2s' }}>
              <a 
                href="#" 
                className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Download size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-right" style={{ animationDelay: '0.6s' }}>
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Sudarshan - Professional Portfolio" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Gradient overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -inset-4 bg-hero-gradient rounded-3xl opacity-20 blur-xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;