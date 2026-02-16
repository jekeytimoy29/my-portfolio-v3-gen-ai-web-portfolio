import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile, socialLinks } from "../../data/profile";
import { Button } from "../common/Button";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export function Hero() {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900/30 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 dark:bg-accent-900/30 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar placeholder */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="Profile Picture"
                  className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-primary-600 dark:text-primary-400"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 font-medium mb-4"
          >
            {profile.title}
          </motion.p>

          {/* Subtitle */}
          {profile.subtitle && (
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              {profile.subtitle}
            </motion.p>
          )}

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-10"
          >
            {socialLinks.map((link) => {
              const iconMap: Record<string, typeof Github> = {
                github: Github,
                linkedin: Linkedin,
                email: Mail,
              };
              const Icon = iconMap[link.platform];
              if (!Icon) return null;

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-all duration-200 hover:-translate-y-1"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => handleScrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScrollToSection("#about")}
          className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce-slow"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
