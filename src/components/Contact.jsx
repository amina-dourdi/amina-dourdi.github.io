import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiSend, FiPhone } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will reply as soon as possible.')
  }

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="section__label" variants={fadeUp}>Contact</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Get In <span className="section__title--gradient">Touch</span>
          </motion.h2>
          <motion.p className="section__description" variants={fadeUp}>
            Do you have a project, an internship opportunity, or want to collaborate? Feel free to contact me!
          </motion.p>

          <div className="contact__content">
            <motion.div className="contact__info" variants={fadeUp}>
              <p>
                I am currently looking for a <strong>3-month internship starting in July 2026</strong> in 
                data engineering or data science. Open to opportunities in France, Morocco, 
                the Netherlands, and across the European Union (Dutch nationality).
              </p>

              <div className="contact__channels">
                <a href="mailto:amina.dourdi@gmail.com" className="contact__channel" id="contact-email">
                  <div className="contact__channel-icon"><FiMail /></div>
                  <div>
                    <div className="contact__channel-label">Email</div>
                    <div className="contact__channel-value">amina.dourdi@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+212627645255" className="contact__channel" id="contact-phone">
                  <div className="contact__channel-icon"><FiPhone /></div>
                  <div>
                    <div className="contact__channel-label">Phone</div>
                    <div className="contact__channel-value">+212 627-645255</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/amina-dourdi" target="_blank" rel="noreferrer" className="contact__channel" id="contact-linkedin">
                  <div className="contact__channel-icon"><FaLinkedin /></div>
                  <div>
                    <div className="contact__channel-label">LinkedIn</div>
                    <div className="contact__channel-value">linkedin.com/in/amina-dourdi</div>
                  </div>
                </a>

                <a href="https://github.com/amina-dourdi" target="_blank" rel="noreferrer" className="contact__channel" id="contact-github">
                  <div className="contact__channel-icon"><SiGithub /></div>
                  <div>
                    <div className="contact__channel-label">GitHub</div>
                    <div className="contact__channel-value">github.com/amina-dourdi</div>
                  </div>
                </a>

                <div className="contact__channel" id="contact-location">
                  <div className="contact__channel-icon"><FiMapPin /></div>
                  <div>
                    <div className="contact__channel-label">Location</div>
                    <div className="contact__channel-value">Nador, Morocco 🇲🇦</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form className="contact__form" onSubmit={handleSubmit} variants={fadeUp} id="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="form-input" placeholder="First Last" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" className="form-input" placeholder="email@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-input" placeholder="Internship Offer / Collaboration" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-input" placeholder="Describe your project or opportunity..." required></textarea>
              </div>
              <button type="submit" className="btn btn--primary" id="contact-submit">
                <FiSend /> Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
