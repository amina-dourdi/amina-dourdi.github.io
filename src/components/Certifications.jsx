import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiPieChart } from 'react-icons/fi'
import { FiCpu } from 'react-icons/fi'

const certifications = [
  {
    title: 'Supervised Learning with Scikit-Learn',
    issuer: 'DataCamp',
    description: 'Practical training on supervised machine learning models.',
    icon: <FiCpu />,
  },
  {
    title: 'Power BI Online Course',
    issuer: 'Udemy (2024)',
    description: 'Data visualization certification with Power BI.',
    icon: <FiPieChart />,
  },
]

const languages = [
  { name: 'Tarifit', level: 'Native', pct: 100 },
  { name: 'Arabic', level: 'Fluent', pct: 90 },
  { name: 'French', level: 'Advanced', pct: 85 },
  { name: 'English', level: 'Intermediate', pct: 60 },
  { name: 'Dutch', level: 'Elementary', pct: 35 },
  { name: 'Spanish', level: 'Beginner', pct: 20 },
  { name: 'Chinese', level: 'Beginner', pct: 15 },
]

const qualities = [
  'Problem-solving',
  'Adaptability',
  'Teamwork',
  'Rigor and attention to detail',
  'Sense of responsibility',
]

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section className="section" id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Certifications */}
          <motion.span className="section__label" variants={fadeUp}>Certifications</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Certificates <span className="section__title--gradient">& Training</span>
          </motion.h2>

          <div className="certifications__grid" style={{ marginBottom: '4rem' }}>
            {certifications.map((cert, i) => (
              <motion.div className="cert-card" key={i} variants={fadeUp}>
                <div className="cert-card__icon">{cert.icon}</div>
                <div className="cert-card__info">
                  <h4>{cert.title}</h4>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p>{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.span className="section__label" variants={fadeUp}>Languages</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            <span className="section__title--gradient">Language Skills</span>
          </motion.h2>

          <div className="languages__grid" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
            {languages.map((lang, i) => (
              <motion.div className="language-item" key={i} variants={fadeUp}>
                <div className="language-item__header">
                  <span className="language-item__name">{lang.name}</span>
                  <span className="language-item__level">{lang.level}</span>
                </div>
                <div className="language-item__bar">
                  <motion.div
                    className="language-item__fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Qualities */}
          <motion.span className="section__label" variants={fadeUp}>Qualities</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Personal <span className="section__title--gradient">Qualities</span>
          </motion.h2>

          <div className="qualities__grid" style={{ marginTop: '2rem' }}>
            {qualities.map((q, i) => (
              <motion.div className="quality-badge" key={i} variants={fadeUp}>
                <FiAward style={{ color: 'var(--accent-secondary)', flexShrink: 0 }} />
                <span>{q}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
