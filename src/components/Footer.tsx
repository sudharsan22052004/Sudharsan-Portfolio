import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:sudarshan@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background Elements */}
      <div className="floating-shape top-10 right-20 w-20 h-20 bg-primary/5 rounded-full animate-float" />
      <div className="floating-shape bottom-10 left-20 w-16 h-16 bg-secondary/5 rotate-45 animate-float-slow" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary font-poppins mb-3">
                SUDARSHAN
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting exceptional digital experiences through innovative design, 
                robust development, and strategic sales excellence.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Ready to start your next project?</p>
              <div className="space-y-2">
                <p className="text-sm">📧 sudarshan@example.com</p>
                <p className="text-sm">📱 +1 (555) 123-4567</p>
                <p className="text-sm">📍 San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Sudarshan. Made with <Heart size={16} className="text-primary" /> and passion.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-6 py-2 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-300 text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;