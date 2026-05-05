import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiGlobe, FiDatabase, FiCpu, FiFlag, FiBook } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  }

  const highlights = [
    { icon: <FiDatabase />, text: 'Data Engineering' },
    { icon: <FiCpu />, text: 'Machine Learning & AI' },
    { icon: <FiGlobe />, text: 'Data Visualization' },
    { icon: <FiMapPin />, text: 'Nador, Morocco 🇲🇦' },
    { icon: <FiFlag />, text: 'Dutch Nationality (EU)' },
    { icon: <FiBook />, text: 'ENSA Al-Hoceima' },
  ]

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="section__label" variants={fadeUp}>About Me</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            <span className="section__title--gradient">Data Engineering</span> Student
          </motion.h2>

          <div className="about__grid">
            <motion.div className="about__image-wrapper" variants={fadeUp}>
              <div className="about__image-container">
                <div className="about__image-placeholder">
                  <span style={{ zIndex: 1, filter: 'drop-shadow(0 0 30px rgba(124,92,252,0.3))' }}>👩‍💻</span>
                </div>
              </div>
              <div className="about__image-glow"></div>
            </motion.div>

            <motion.div className="about__info" variants={fadeUp}>
              <h3>Data Engineering & Artificial Intelligence</h3>
              <p>
                I am <strong>Amina Dourdi</strong>, a Data Engineering student at the 
                <strong> National School of Applied Sciences (ENSA) of Al-Hoceima</strong>. 
                Specialized in the management, processing, and visualization of data, I have been 
                trained in artificial intelligence and supervised learning.
              </p>
              <p>
                My background includes professional internships developing digital dashboards and managing medical data. 
                I master data engineering tools such as Python, SQL, MongoDB, Docker, as well as visualization platforms 
                like Power BI. I am currently seeking a <strong>3-month internship starting in July 2026</strong> where I can 
                contribute to concrete and innovative projects while strengthening my technical skills.
              </p>

              <div className="about__highlights">
                {highlights.map((h, i) => (
                  <div className="about__highlight" key={i}>
                    <div className="about__highlight-icon">{h.icon}</div>
                    <span className="about__highlight-text">{h.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
