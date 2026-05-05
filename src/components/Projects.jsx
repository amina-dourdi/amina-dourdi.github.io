import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Collaborative Annotation Platform',
    description:
      'Web application for text annotation, annotation quality monitoring, and model training.',
    techs: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Spring Security', 'Python'],
    bgClass: 'project-card__image-bg--2',
    emoji: '📝',
    github: '',
    date: 'May 2026',
  },
  {
    title: 'TaaSim — Urban Mobility Big Data Platform',
    description:
      'Big Data platform for urban mobility: GPS data ingestion, real-time processing, and demand forecasting.',
    techs: ['Python', 'Kafka', 'Flink', 'Spark', 'Cassandra', 'Docker'],
    bgClass: 'project-card__image-bg--3',
    emoji: '🚦',
    github: '',
    date: 'Apr. 2026',
  },
  {
    title: 'JobIntelligent Data Platform',
    description:
      'Job offers analysis and recommendation platform based on a Medallion architecture.',
    techs: ['Python', 'Airflow', 'FastAPI', 'MinIO', 'PostgreSQL', 'NLP'],
    bgClass: 'project-card__image-bg--1',
    emoji: '💼',
    github: '',
    date: 'Apr. 2026',
  },
  {
    title: 'Batch Procurement Data Pipeline',
    description:
      'Batch pipeline for procurement: ingestion, processing, net demand calculation, and generation of supplier orders. Complete data engineering architecture with distributed storage.',
    techs: ['Python', 'HDFS', 'Trino', 'PostgreSQL', 'Avro', 'Docker'],
    bgClass: 'project-card__image-bg--1',
    emoji: '🔄',
    github: 'https://github.com/amina-dourdi/batch-procurement-data-pipeline',
    date: 'Jan. 2026',
  },
  {
    title: 'MongoDB Performance Optimization & Sharded Cluster',
    description:
      'Pipeline for preparation and ingestion of FHV data into MongoDB. Comparison and evaluation of indexes (single, compound, hashed) and deployment of a sharded MongoDB cluster via Docker.',
    techs: ['Python', 'MongoDB', 'Dash/Plotly', 'Docker'],
    bgClass: 'project-card__image-bg--2',
    emoji: '🗄️',
    github: 'https://github.com/amina-dourdi/fhv-tripdata-mongodb-optimization',
    date: 'Nov. 2025',
  },
  {
    title: 'Medical Data Management & Statistics',
    description:
      'Application for patient data entry, disease tracking, and statistical analysis with visualization. Complete desktop and web interface for hospital management.',
    techs: ['Python', 'Tkinter', 'Pandas', 'Matplotlib', 'PHP', 'MySQL'],
    bgClass: 'project-card__image-bg--3',
    emoji: '🏥',
    github: 'https://github.com/amina-dourdi/Medical-Data-Management-and-Statistics',
    date: 'Mar. 2025',
  },
  {
    title: 'House Prices Regression End-to-End',
    description:
      'End-to-end regression on Kaggle House Prices: exploratory data analysis (EDA), feature engineering, and hyperparameter tuning for real estate price prediction.',
    techs: ['Python', 'pandas', 'scikit-learn', 'EDA', 'Feature Engineering'],
    bgClass: 'project-card__image-bg--1',
    emoji: '🏠',
    github: 'https://github.com/amina-dourdi/machine-learning-regression-end-to-end',
    date: 'Dec. 2025',
  },
  {
    title: 'Fashion-MNIST Classification',
    description:
      'Fashion-MNIST image classification and comparison of Machine Learning models: Logistic Regression, SVM, Random Forest. Data preprocessing and scaling.',
    techs: ['Python', 'scikit-learn', 'ML', 'SVM', 'Random Forest'],
    bgClass: 'project-card__image-bg--2',
    emoji: '👗',
    github: 'https://github.com/amina-dourdi/Fashion-MNIST-Classification-using-Machine-Learning',
    date: 'Dec. 2025',
  },
  {
    title: 'Weather Forecasting Application',
    description:
      'Real-time data retrieval and weather forecasting via OpenWeatherMap and Open-Meteo APIs. Intuitive user interface for checking forecasts.',
    techs: ['Python', 'API REST', 'OpenWeatherMap', 'Open-Meteo'],
    bgClass: 'project-card__image-bg--3',
    emoji: '🌤️',
    github: 'https://github.com/amina-dourdi/Application-Weather',
    date: 'Feb. 2025',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="section__label" variants={fadeUp}>Academic Projects</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            My <span className="section__title--gradient">Portfolio</span>
          </motion.h2>
          <motion.p className="section__description" variants={fadeUp}>
            Concrete projects in data engineering, machine learning, and application development.
          </motion.p>

          <div className="projects__grid">
            {projects.map((project, i) => (
              <motion.div className="project-card" key={i} variants={fadeUp}>
                <div className="project-card__image">
                  <div className={`project-card__image-bg ${project.bgClass}`}>
                    <span style={{ fontSize: '3.5rem', zIndex: 1 }}>{project.emoji}</span>
                  </div>
                </div>
                <div className="project-card__body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 className="project-card__title" style={{ marginBottom: 0 }}>{project.title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-secondary)', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{project.date}</span>
                  </div>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__techs">
                    {project.techs.map((tech, j) => (
                      <span className="project-card__tech" key={j}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                        <FiGithub /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
