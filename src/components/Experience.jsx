import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    date: 'Jul. 2025 — Sep. 2025',
    role: 'Intern — Digital Dashboard Development',
    company: 'Terra Nova EBS',
    location: 'Al-Hoceima, Morocco',
    description:
      'Designed a Power BI dashboard for tracking aeronautical purchases. Integrated and visualized data with Power BI and Excel to drive procurement activities.',
    techs: ['Power BI', 'Excel', 'Data Visualization', 'Aeronautical Procurement'],
  },
  {
    date: 'Jun. 2025 — Aug. 2025',
    role: 'Intern — Radiology Department',
    company: 'CH Provincial Med VI',
    location: 'Al-Hoceima, Morocco',
    description:
      'Participated in radiology department activities. Supported the management of medical data and imaging. Contributed to the organization and processing of healthcare data.',
    techs: ['Data Management', 'Medical Data', 'Medical Imaging'],
  },
]

const education = [
  {
    date: '2024 — Present',
    role: 'Data Engineering',
    company: 'ENSA Al-Hoceima',
    location: 'National School of Applied Sciences',
    description:
      'Engineering degree specializing in data engineering, covering Big Data, Machine Learning, advanced databases, data pipelines, and visualization.',
    techs: ['Big Data', 'ML', 'Data Engineering', 'Python', 'SQL', 'Docker'],
  },
  {
    date: '2022 — 2024',
    role: 'Integrated Preparatory Cycle',
    company: 'ENSA Al-Hoceima',
    location: 'National School of Applied Sciences',
    description:
      'Integrated preparatory classes with a strong foundation in mathematics, computer science, physics, and engineering sciences.',
    techs: ['Mathematics', 'Computer Science', 'Physics', 'Algorithms'],
  },
  {
    date: '2022',
    role: 'High School Diploma — Physics-Chemistry',
    company: 'Lycée Qualifiant Ibn Sina',
    location: 'Nador, Morocco',
    description:
      'Graduated with a high school diploma in physics-chemistry (French option).',
    techs: ['Physics', 'Chemistry', 'Mathematics'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="section__label" variants={fadeUp}>Journey</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Professional <span className="section__title--gradient">Experience</span>
          </motion.h2>
          <motion.p className="section__description" variants={fadeUp}>
            My internships and experiences in data management, visualization, and engineering.
          </motion.p>

          <div className="experience__timeline">
            {experiences.map((exp, i) => (
              <motion.div className="experience__item" key={i} variants={fadeUp}>
                <div className="experience__date">{exp.date}</div>
                <h3 className="experience__role">{exp.role}</h3>
                <div className="experience__company">{exp.company} — <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{exp.location}</span></div>
                <p className="experience__description">{exp.description}</p>
                <div className="experience__techs">
                  {exp.techs.map((tech, j) => (
                    <span className="experience__tech" key={j}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h2 className="section__title" style={{ marginTop: '4rem' }} variants={fadeUp}>
            <span className="section__title--gradient">Education</span>
          </motion.h2>

          <div className="experience__timeline">
            {education.map((edu, i) => (
              <motion.div className="experience__item" key={i} variants={fadeUp}>
                <div className="experience__date">{edu.date}</div>
                <h3 className="experience__role">{edu.role}</h3>
                <div className="experience__company">{edu.company} — <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.location}</span></div>
                <p className="experience__description">{edu.description}</p>
                <div className="experience__techs">
                  {edu.techs.map((tech, j) => (
                    <span className="experience__tech" key={j}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
