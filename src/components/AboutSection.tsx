import { Code, Palette, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Palette size={32} />,
      title: 'Design Excellence',
      description: 'Creating intuitive UI/UX designs with modern aesthetics and user-centered approaches.',
      percentage: 95,
      color: 'bg-primary'
    },
    {
      icon: <Code size={32} />,
      title: 'Java Development',
      description: 'Building robust enterprise applications with Spring Boot, Maven, and advanced Java frameworks.',
      percentage: 90,
      color: 'bg-secondary'
    },
    {
      icon: <Users size={32} />,
      title: 'Full-Stack Mastery',
      description: 'End-to-end development with React, Node.js, databases, and cloud deployment solutions.',
      percentage: 88,
      color: 'bg-accent'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Sales Strategy',
      description: 'Driving revenue growth through strategic B2B/B2C sales, CRM management, and client relationships.',
      percentage: 92,
      color: 'bg-primary'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-gradient-primary mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A versatile professional with a passion for creating exceptional digital experiences. 
            I combine creative design thinking with technical expertise and business acumen to deliver 
            comprehensive solutions that drive results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Personal Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient-secondary">
                Multi-Disciplinary Expertise
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans across multiple domains - from crafting pixel-perfect designs to architecting 
                scalable backend systems, and from developing full-stack applications to closing complex sales deals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This unique combination allows me to understand projects from every angle: the user's perspective 
                through design, the technical feasibility through development, and the business impact through sales experience.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl glassmorphism">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-2xl glassmorphism">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-2xl glassmorphism">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-2xl glassmorphism">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right - Skills Visualization */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="skill-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${skill.color}/20 text-current`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span className="font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.percentage}%`,
                            animationDelay: `${index * 0.2 + 0.5}s` 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-12 text-gradient-primary">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glassmorphism hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-muted-foreground">
                Striving for perfection in every project, from the smallest design detail to complex system architecture.
              </p>
            </div>
            <div className="p-8 rounded-2xl glassmorphism hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-muted-foreground">
                Embracing cutting-edge technologies and creative solutions to solve complex challenges.
              </p>
            </div>
            <div className="p-8 rounded-2xl glassmorphism hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-3">Collaboration</h4>
              <p className="text-muted-foreground">
                Building strong partnerships with clients and teams to achieve extraordinary results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;