import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="floating-shape top-10 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float" />
      <div className="floating-shape bottom-20 right-1/4 w-16 h-16 bg-secondary/10 rotate-45 animate-float-slow" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-gradient-primary mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your project to life? Whether you need design expertise, development skills, 
            or sales strategy, I'm here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gradient-secondary">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and challenges. 
                Feel free to reach out whether you have a project in mind, need consultation, 
                or just want to say hello.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl glassmorphism hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-primary/20 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">sudarshan@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-2xl glassmorphism hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-2xl glassmorphism hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-accent/20 rounded-xl text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-project-gradient/10 border border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <h4 className="font-semibold">Currently Available</h4>
              </div>
              <p className="text-muted-foreground">
                Open to new projects and collaborations. Typical response time: 2-4 hours during business days.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle size={28} className="text-primary" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project Discussion / Consultation / etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cta-primary flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:sudarshan@example.com"
                className="p-4 text-center rounded-xl glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Mail size={24} className="mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Quick Email</div>
              </a>
              <a
                href="tel:+15551234567"
                className="p-4 text-center rounded-xl glassmorphism hover:bg-secondary/20 transition-all duration-300 hover:scale-105"
              >
                <Phone size={24} className="mx-auto mb-2 text-secondary" />
                <div className="text-sm font-medium">Call Direct</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;