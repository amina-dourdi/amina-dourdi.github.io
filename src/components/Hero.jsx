import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { SiPython, SiPostgresql, SiDocker, SiMongodb } from 'react-icons/si'
import { HiOutlineDatabase } from 'react-icons/hi'
import { FiBarChart2, FiCpu } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Hero() {
  const nodes = [
    { icon: <SiPython /> },
    { icon: <HiOutlineDatabase /> },
    { icon: <SiPostgresql /> },
    { icon: <SiDocker /> },
    { icon: <FiBarChart2 /> },
    { icon: <SiMongodb /> },
  ]

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div className="hero__badge" variants={fadeUp} custom={0}>
              <span className="hero__badge-dot"></span>
              Data Engineering Student
            </motion.div>

            <motion.h1 className="hero__title" variants={fadeUp} custom={1}>
              Hi, I'm{' '}
              <span className="hero__title-accent">Amina Dourdi</span>
            </motion.h1>

            <motion.div className="hero__typing" variants={fadeUp} custom={2}>
              <TypeAnimation
                sequence={[
                  'Data Engineering Student',
                  2000,
                  'Building Data Pipelines',
                  2000,
                  'Data Visualization & Power BI',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Turning Data Into Insights',
                  2000
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p className="hero__description" variants={fadeUp} custom={3}>
              <strong>Data Engineering</strong> student at ENSA Al-Hoceima,
              specializing in data management, processing, and visualization. Passionate about
              artificial intelligence and building robust pipelines, I transform raw data
              into actionable and innovative solutions.
            </motion.p>

            <motion.div className="hero__actions" variants={fadeUp} custom={4}>
              <a href="#projects" className="btn btn--primary">
                View My Projects <FiArrowRight />
              </a>
              <a href="/CV_Amina_Dourdi.pdf" download="CV_Amina_Dourdi.pdf" className="btn btn--outline">
                <FiDownload /> Download Resume
              </a>
            </motion.div>

            <motion.div className="hero__stats" variants={fadeUp} custom={5}>
              <div className="hero__stat">
                <div className="hero__stat-number">6+</div>
                <div className="hero__stat-label">Projects</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">2</div>
                <div className="hero__stat-label">Internships</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">2</div>
                <div className="hero__stat-label">Certifications</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">7</div>
                <div className="hero__stat-label">Languages</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero__visual-orb">
              <div className="hero__visual-ring hero__visual-ring--1"></div>
              <div className="hero__visual-ring hero__visual-ring--2"></div>
              <div className="hero__visual-ring hero__visual-ring--3"></div>
              <div className="hero__visual-center">
                <FiCpu style={{ color: 'white' }} />
              </div>
              {nodes.map((node, i) => (
                <div className="hero__visual-node" key={i}>
                  {node.icon}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
