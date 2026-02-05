import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2 } from 'lucide-react';
import Container from '../layout/Container';
import { profile } from '../../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    setIsSubmitting(false);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const InputField = ({ label, name, type = "text", value, onChange, required = true }) => (
    <div className="relative group">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full px-4 py-3 pt-6 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder-transparent"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );

  const SocialCard = ({ icon: Icon, label, value, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-3 rounded-full bg-secondary/50 text-foreground group-hover:bg-primary group-hover:text-primary-foreground mb-3 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-foreground mb-1">{label}</span>
      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors truncate max-w-full">{value}</span>
    </a>
  );

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Info & Socials via Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="mb-8">
              <motion.span className="text-primary font-medium tracking-wider text-sm uppercase block mb-2">
                Get in Touch
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-6">
                Let's Work <span className="text-primary">Together</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </div>

            {/* Unified Grid of Cards for Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
              <SocialCard
                icon={Mail}
                label="Email"
                value="Send Mail" // Abbreviated for card layout
                href={`mailto:${profile.email}`}
              />
              <SocialCard
                icon={Linkedin}
                label="LinkedIn"
                value="Connect"
                href={profile.social.linkedin}
              />
              <SocialCard
                icon={Github}
                label="GitHub"
                value="Follow"
                href={profile.social.github}
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 shadow-2xl"
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(0,234,255,0.1)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder=" "
                  className="peer w-full px-4 py-3 pt-6 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder-transparent resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground font-bold text-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,234,255,0.3)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
