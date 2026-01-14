import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, Linkedin, ExternalLink, Send, 
  Palette, Smartphone, Image as ImageIcon, Monitor,
  Briefcase, Users, Award, Trophy, Star, Quote,
  Figma, Pen, ArrowRight, FileText
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import ProjectCard from '../components/ProjectCard';
import { personalInfo, projects, categories, skills, testimonials, services, stats, tools } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getIconComponent = (iconName) => {
    const icons = {
      Palette,
      Smartphone,
      Image: ImageIcon,
      Monitor,
      Briefcase,
      Users,
      Award,
      Trophy,
      Figma,
      Pen
    };
    return icons[iconName] || Palette;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - will be replaced with backend API
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-400/10 dark:from-purple-600/20 dark:to-purple-400/20 z-10" />
          <img
            src={personalInfo.heroImage}
            alt="Creative workspace"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Nwachukwu</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Jubilee
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full"
              >
                View My Work
              </Button>
              <Button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-6 text-lg rounded-full"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              About <span className="text-purple-600 dark:text-purple-400">Me</span>
            </h2>
            <div className="grid md:grid-cols-5 gap-12 items-start">
              {/* Profile Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl transform rotate-6"></div>
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="relative rounded-2xl w-full max-w-sm object-cover shadow-2xl"
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
              </div>

              {/* About Content */}
              <div className="md:col-span-3 space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {personalInfo.introduction}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {personalInfo.aboutLong}
                </p>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 8).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Info Card */}
                <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Mail className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Phone className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                      <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <Button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Me a Message
                  </Button>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Services I <span className="text-purple-600 dark:text-purple-400">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and engage your audience
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = getIconComponent(service.icon);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 group">
                      <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {service.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-500 dark:from-purple-700 dark:to-purple-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-white" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base text-purple-100">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Tools I <span className="text-purple-600 dark:text-purple-400">Master</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((tool, index) => {
                const IconComponent = getIconComponent(tool.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                      <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {tool.name}
                      </h3>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-0">
                        {tool.level}
                      </Badge>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
              Explore my portfolio of branding, UI/UX, and graphic design projects. Each project tells a unique story of creative problem-solving and impactful design.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Client <span className="text-purple-600 dark:text-purple-400">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              Don't just take my word for it - hear what my clients have to say
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">
                          {testimonial.company}
                        </p>
                      </div>
                      <Quote className="w-8 h-8 text-purple-200 dark:text-purple-900" />
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "{testimonial.text}"
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-500 dark:from-purple-700 dark:to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. I'm here to help transform your ideas into stunning designs that resonate with your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Let's <span className="text-purple-600 dark:text-purple-400">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <Card className="p-8 border-gray-200 dark:border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="border-gray-300 dark:border-gray-700 focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="border-gray-300 dark:border-gray-700 focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    className="border-gray-300 dark:border-gray-700 focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {personalInfo.title}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Download Resume"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;