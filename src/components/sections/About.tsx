import { motion } from 'framer-motion';
import { MapPin, Mail, Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';
import { SectionHeading } from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {/* Bio */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {profile.bio.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div variants={fadeInUp}>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Quick Info
              </h3>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span>{profile.location}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span>{profile.title}</span>
              </div>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Download Resume
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
