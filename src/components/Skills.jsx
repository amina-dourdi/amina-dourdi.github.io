import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython, SiApachespark, SiPostgresql, SiMongodb, SiMysql, SiDocker,
  SiGit, SiLinux, SiJupyter, SiNumpy, SiPandas, SiScala,
} from 'react-icons/si'
import { FaAws, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { FiDatabase, FiCloud, FiTool, FiCode, FiBarChart2, FiCpu, FiPieChart, FiSettings, FiLayers } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FiCode />,
    iconClass: 'skill-category__icon--purple',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'SQL / PL/SQL', icon: <FiDatabase /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <FiCode /> },
      { name: 'R', icon: <FiBarChart2 /> },
      { name: 'Matlab', icon: <FiSettings /> },
    ]
  },
  {
    title: 'Web Development',
    icon: <FiLayers />,
    iconClass: 'skill-category__icon--teal',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FiCode /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Spring Boot', icon: <FiSettings /> },
      { name: 'FastAPI', icon: <FiCode /> },
      { name: 'Thymeleaf', icon: <FiLayers /> },
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <FiBarChart2 />,
    iconClass: 'skill-category__icon--pink',
    skills: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib', icon: <FiBarChart2 /> },
      { name: 'scikit-learn', icon: <FiCpu /> },
      { name: 'Power BI', icon: <FiPieChart /> },
      { name: 'Dash / Plotly', icon: <FiBarChart2 /> },
    ]
  },
  {
    title: 'Databases',
    icon: <FiDatabase />,
    iconClass: 'skill-category__icon--purple',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Oracle', icon: <FiDatabase /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'HDFS', icon: <FiDatabase /> },
      { name: 'Trino', icon: <FiDatabase /> },
      { name: 'Cassandra', icon: <FiDatabase /> },
    ]
  },
  {
    title: 'Data Engineering & Big Data',
    icon: <FiCpu />,
    iconClass: 'skill-category__icon--teal',
    skills: [
      { name: 'Data Mining', icon: <FiDatabase /> },
      { name: 'Big Data', icon: <FiCloud /> },
      { name: 'Data Lake', icon: <FiDatabase /> },
      { name: 'Data Warehouse', icon: <FiDatabase /> },
      { name: 'ETL Pipelines', icon: <FiSettings /> },
      { name: 'Apache Spark', icon: <SiApachespark /> },
      { name: 'Kafka', icon: <FiLayers /> },
      { name: 'Flink', icon: <FiLayers /> },
      { name: 'Airflow', icon: <FiSettings /> },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <FiCpu />,
    iconClass: 'skill-category__icon--pink',
    skills: [
      { name: 'Machine Learning', icon: <FiCpu /> },
      { name: 'Deep Learning', icon: <FiCpu /> },
      { name: 'NLP', icon: <FiCpu /> },
      { name: 'Supervised Learning', icon: <FiBarChart2 /> },
      { name: 'Feature Engineering', icon: <FiSettings /> },
      { name: 'Jupyter Notebooks', icon: <SiJupyter /> },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: <FiTool />,
    iconClass: 'skill-category__icon--purple',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Git & GitHub', icon: <SiGit /> },
      { name: 'Linux (Ubuntu, Fedora)', icon: <SiLinux /> },
      { name: 'Windows', icon: <FiSettings /> },
      { name: 'Scrum', icon: <FiTool /> },
      { name: 'Gantt', icon: <FiBarChart2 /> },
    ]
  },
  {
    title: 'Modeling & Design',
    icon: <FiLayers />,
    iconClass: 'skill-category__icon--teal',
    skills: [
      { name: 'UML', icon: <FiLayers /> },
      { name: 'Merise', icon: <FiDatabase /> },
      { name: 'Tkinter (GUI)', icon: <FiSettings /> },
    ]
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span className="section__label" variants={fadeUp}>Technical Skills</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            My <span className="section__title--gradient">Tech Stack</span>
          </motion.h2>
          <motion.p className="section__description" variants={fadeUp}>
            A comprehensive set of tools and technologies for data engineering, 
            development, and artificial intelligence.
          </motion.p>

          <div className="skills__categories">
            {skillCategories.map((cat, i) => (
              <motion.div
                className="skill-category"
                key={i}
                variants={fadeUp}
              >
                <div className="skill-category__header">
                  <div className={`skill-category__icon ${cat.iconClass}`}>{cat.icon}</div>
                  <h3 className="skill-category__title">{cat.title}</h3>
                </div>
                <div className="skill-category__items">
                  {cat.skills.map((skill, j) => (
                    <span className="skill-tag" key={j}>
                      <span className="skill-tag__icon">{skill.icon}</span>
                      {skill.name}
                    </span>
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
