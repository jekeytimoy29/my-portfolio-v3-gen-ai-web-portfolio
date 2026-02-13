import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { profile, socialLinks } from '../../data/profile';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'd love to hear from you"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 max-w-2xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hi,
              feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => window.location.href = `mailto:${profile.email}`}
              className="group"
            >
              <span>Say Hello</span>
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Or connect with me on
            </p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.platform];
                if (!Icon) return null;

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.platform !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
