import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { cn } from '../../utils/cn';

export function Skills() {
  const getLevelWidth = (level: number) => {
    return `${(level / 5) * 100}%`;
  };

  const getLevelColor = (level: number) => {
    if (level >= 5) return 'bg-green-500';
    if (level >= 4) return 'bg-primary-500';
    if (level >= 3) return 'bg-yellow-500';
    return 'bg-slate-400';
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: getLevelWidth(skill.level) }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={cn('h-full rounded-full', getLevelColor(skill.level))}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
