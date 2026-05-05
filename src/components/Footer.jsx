import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__text">
            © {new Date().getFullYear()} <span>Amina Dourdi</span>. Built with React & a passion for data.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/in/amina-dourdi" target="_blank" rel="noreferrer" className="footer__social" aria-label="LinkedIn" id="footer-linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/amina-dourdi" target="_blank" rel="noreferrer" className="footer__social" aria-label="GitHub" id="footer-github">
              <SiGithub />
            </a>
            <a href="mailto:amina.dourdi@gmail.com" className="footer__social" aria-label="Email" id="footer-email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
